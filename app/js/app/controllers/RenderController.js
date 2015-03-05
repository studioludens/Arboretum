// 
//  RenderController.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-12.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 

define(['jquery',
		'three',
		'underscore',
		'stats',
		'settings/RenderSettings'],
		
function( $, THREE, _, Stats, RenderSettings ){
	
	var RenderController = function( settings ){
		
		this.width  = window.innerWidth;
		this.height = window.innerHeight;
		
		/**
		all the elements that are rendered to the scene
		**/
		this.renderElements = {};
		
		/*
			a list of all plugins currently active in the renderer
		*/
		this.plugins = [];
		
		this.settings = {};
		_( this.settings ).extend( RenderSettings );
		_( this.settings ).extend( settings );
		
		this.webglEl = document.getElementById( this.settings.domElement );

		if (!Detector.webgl) {
			Detector.addGetWebGLMessage(webglEl);
			return;
		}
		
		// default objects
		this.renderer = null;
		this.scene = null;
		this.manager = null;
		
		
	};
	
	RenderController.prototype = {
		
		init : function(){
			
			// first initialize the scene
			this.initScene();
			
			var _this = this;
			
			// initialize plugins
			_(this.settings.plugins).each( function( plugin ){
				var pluginObject = new plugin( _this.settings[plugin] );
				
				// initialize plugin object
				pluginObject.init();
				
				_this.plugins.push( pluginObject );
				// get the exports and extend the rendercontroller with them
				_( _this ).extend( pluginObject.exports() );
				
				// add each item from the sceneExports object to the scene
				_( pluginObject.sceneExports() ).each( function( sceneItem ){
					_this.scene.add( sceneItem );
				});
			});
			
			this.webglEl.appendChild(this.renderer.domElement);
			
		},
		
		
		initScene : function(){
			this.scene = new THREE.Scene();

			
			this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			this.renderer.setSize(this.width, this.height);
			
			var _this = this;
			
			// add event listener for resizing the screen
			window.addEventListener( 'resize', function(){
				
				_this.width = window.innerWidth;
				_this.height = window.innerHeight;
			
				_this.camera.aspect = window.innerWidth / window.innerHeight;
				_this.camera.updateProjectionMatrix();
			
				_this.renderer.setSize( window.innerWidth, window.innerHeight );
			
			}, false );
			
		},
		
		/**
		render the scene
		**/
		render : function() {

			var _this = this;
			
			this.dispatchEvent({type: "frameRender"});

			// update all plugins
			_( this.plugins ).each( function( plugin ){
				plugin.update( _this.scene );
			});
			
			this.renderer.render(this.scene, this.camera);
			this.dispatchEvent({type: "frameRendered"});
		}
	};
	
	// apply event dispatcher
	THREE.EventDispatcher.prototype.apply( RenderController.prototype );
	
	
	return RenderController;
});