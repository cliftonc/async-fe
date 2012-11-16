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
	 				style: "large" 				
 				}
 			},
 			'ABD': {
 				ot: 'column',
 				slot: {
	 				ot: "article",
	 				oid: "1",
	 				headline: "Hello this is a slot headline",
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
 	}
 }




