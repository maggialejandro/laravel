require.config({
	shim : {
		underscore: {
			exports: '_'
		},
		"backbone" : {
			"deps" : ["underscore", "jquery"],
			"exports" : "Backbone"
		},
		"bootstrap" : {
			"deps" : ["jquery"]
		}
	},
	paths :{
		"jquery" : "libs/jquery",
		"underscore" : "libs/underscore",
		"backbone" : "libs/backbone",
		"bootstrap" : "libs/bootstrap"
	}
});


require([ 
	"jquery", 
	"underscore", 
	"backbone", 
	"bootstrap"
	
	], function($, _, Backbone){
		console.log('ok');
	});