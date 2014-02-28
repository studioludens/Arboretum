// 
//  MainController.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-11.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 

define([ 'detector',
		 'controllers/RenderController',
		 'controllers/InteractionController',
		 'settings/MainSettings',
		 'tree/Tree',
		 'environment/Environment',
		  ], 
function( Detector, RenderController, InteractionController, settings, Tree, Environment ){
	
	console.log("MainController loaded");
	
	// TODO : move this into the constructor
	var tree = new Tree();
	var environment = new Environment();
	var renderController = new RenderController();
	var interactionController = new InteractionController( renderController );
	
	var MainController = function( ){
		
		this.tree = tree;
		this.environment = environment;
		this.renderController = renderController;
		this.interactionController = interactionController;
		this.settings = settings;
		
	};
	
	MainController.prototype = {
		
		init : function(){
			// create new tree object
			this.renderController.init();
			this.interactionController.init();
			
			/**
			main rendering loop
			**/
			function render(){

				renderController.render();
				requestAnimationFrame( render );

			}
			
			// start main rendering loop
			render();
			
		},
		/*
			tick function: calculate on world tick
		*/
		tick : function(){
			this.environment.tick();
			this.tree.tick();
			
		}
	};
	
	return MainController;
});