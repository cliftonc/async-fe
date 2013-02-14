/**
 *  Master server process
 *  Initialises a number of instances of the app, based on the number of CPU's it detects
 *  is available.
 *
 *  First arg is the port
 *  Second arg is the num worker threads;
 *
 *  e.g. node server 3000 8
 *
 */
// Dependencies
var rootpath = process.cwd() + '/',
    path = require('path'),
    cluster = require('cluster'),
    App = require('./app.js'),
    colors = require('colors'),
    logger = require('winston'),
    restarts = 0;

// Configure logger
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {level: 'info', timestamp: true, colorize: true});

launchServer();

/**
 * Launch server instance, initially master, then each worker instance is forked.
 * All instances share same config.
 */
function launchServer() {

  // Configure logging
  var argv = processArgs(),
      port = 3000; // workers:logger | workers:admin

  if(argv.m === 'full' && argv.c === 1) {
    return false;
  }

  // Check if we are the master process
  if (cluster.isMaster) {


    logger.info("Launching server with " + (argv.c + "").green + " workers on port " + (port + "").green);

    // Fork workers based on num cpus
    for (var i = 0; i < argv.c; i++) {
      forkWorker();
    }


    // Log worker death
    // TODO : Auto restart with number of retries
    cluster.on('death', function(worker) {

  	  console.log('worker ' + worker.pid + ' died ...');

      // Manage restarting of workers
      if(config.get('master:restartWorkers')) {
        if(restarts > config.get('master:maximumRestarts')) {
          logger.error('Maximum number of restarts reached, not restarting this worker.'.red);
        } else {
          restarts++;
          forkWorker();
        }
      }
    });

  } else {

    // Worker options
    var options = {
      port: port
    };

    // We are a child worker, so bootstrap the app.
    App.bootstrap(options, function(app) {
      logger.info("Worker with pid " + (process.pid + "").grey + " online." );
      process.send({ cmd: 'workerStarted' });
    });

  }

}

/**
 * Helper function to fork a worker, we need to reset the counter in the master thread
 * hence the messaging back, also deal with messaging around job management from worker threads.
 */
function forkWorker() {

  var worker = cluster.fork();

  worker.on('message', function(msg) {

    if (msg.cmd) {

      if(msg.cmd == 'workerStarted') {
        // Reset our restart counter
        restarts = 0;
      }
    }
  });
}

/**
 * Process command line arguments using optimist
 */
function processArgs() {
  return require('optimist')
            .usage('Launch Real Time Analytics Server\nUsage: $0')            
            .describe('c', 'Number of CPUs')
            .alias('c', 'cpu')
            .default('c', require('os').cpus().length)                    
            .argv;
}