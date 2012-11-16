/**
 * Experiments around representing and traversing a composite hierarchy.
 */

exports.page = {
 	'A': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "list",
 				oid: "2",
	 			style: "puff"	 			
 			}
 		}
 	},
 	'B': {
 		ot: 'row',
 		slot: {
 				ot: "module",
 				oid: "2"
 		}
 	},
 	'C': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			'ABC': {
 				ot: 'column',
 				slot: {
	 				ot: "article",
	 				oid: "1",
	 				headline: "Hello this is a slot headline",
	 				preview:'I am small',
	 				style: "large" 				
 				}
 			},
 			'ABD': {
 				ot: 'column',
 				slot: {
	 				ot: "article",
	 				oid: "1",
	 				headline: "Hello this is a slot headline",
	 				preview:'I am slightly larger!',
	 				style: "large" 				
 				}
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture",
	 			preview: "This is some longer preview text to show that any property of an object can be simply over ridden from within a page slot."			
 			}
 		}
 	},
 	'D': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1", 				
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'E': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "module",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "module",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'F': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'G': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'H': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'I': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'J': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'K': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'L': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'M': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'N': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'O': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'P': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'Q': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'R': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'S': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'T': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'U': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	},
 	'U': {
 		ot: 'row',
 		'AB': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1",
 				headline: "Hello this is a slot headline",
 				style: "large" 				
 			}
 		},
 		'AC': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "1"
 			}
 		},
 		'AD': {
 			ot: 'column',
 			slot: {
 				ot: "article",
 				oid: "2",
	 			style: "bigpicture"	 			
 			}
 		}
 	}
 }




