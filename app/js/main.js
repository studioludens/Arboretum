// 
//  main.js
//  Arboretum
//	Main Entry point
//  
//  Created by Alexander Rulkens on 2014-02-11.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 


require.config({
    baseUrl: 'js',
    paths: {
        app: 'app',
		environment: 'app/environment',
		controllers: 'app/controllers',
		settings: 'app/settings',
		tree: 'app/tree',
		
		
		jquery: 'bower-lib/jquery/jquery',
		underscore: 'bower-lib/underscore/underscore',
		three: 'bower-lib/threejs/build/three',
		detector: 'lib/three-lib/Detector',
		stats: 'lib/stats/stats.min',
		trackballControls: 'lib/three-lib/TrackballControls'
    },
	
	shim : {
		'underscore': {
			exports: '_'
		},
		'detector': {
			exports: 'Detector'
		},
		'trackballControls': {
			exports: 'THREE.TrackballControls'
		},
		'three' : {
			exports: 'THREE'
		},
		'stats' : {
			exports: 'Stats'
		}
	}
});



// Start the main app logic.
require([	'jquery', 
			'three', 
			'underscore', 
			'controllers/MainController'],
function ($, THREE, _, MainController) {
	
	var controller = new MainController();
	
	controller.init( );
});
