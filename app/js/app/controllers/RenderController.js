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
	
	var RenderController = function(){
		
		
		this.webglEl = document.getElementById('webgl');

		if (!Detector.webgl) {
			Detector.addGetWebGLMessage(webglEl);
			return;
		}

		this.width  = window.innerWidth;
		this.height = window.innerHeight;
		
		/**
		all the elements that are rendered to the scene
		**/
		this.renderElements = {
			models: [],
			lights: []
		};
		
		_(this).extend(RenderSettings);
		
		// default objects
		this.renderer = null;
		this.camera = null;
		this.scene = null;
		this.manager = null;
		
		
	};
	
	RenderController.prototype = {
		
		init : function(){
			this.initStats();
			this.initScene();
			this.initLights();
			
		},
		
		initStats : function(){
			
			this.stats = new Stats();
			this.stats.domElement.style.position = 'absolute';
			this.stats.domElement.style.top = '0px';
			this.webglEl.appendChild( this.stats.domElement );
		},
		
		initScene : function(){
			this.scene = new THREE.Scene();

			var cameraSettings = this.cameraSettings;

			this.camera = new THREE.PerspectiveCamera(cameraSettings.fov, this.width / this.height, cameraSettings.near, cameraSettings.far);

			this.camera.position = cameraSettings.position;
			//this.camera.rotation = cameraOptions.rotation;
			this.camera.lookAt( cameraSettings.target );

			//renderer = new THREE.WebGLDeferredRenderer({ antialias: true });
			this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			this.renderer.setSize(this.width, this.height);


			this.renderer.shadowMapEnabled = true;
			this.renderer.shadowMapSoft = true;
			this.renderer.shadowMapCullFace = THREE.CullFaceBack;
			this.renderer.shadowMapType = THREE.PCFSoftShadowMap;

			this.renderer.physicallyBasedShading = true;

			this.manager = new THREE.LoadingManager();

			// some simple event listeners
			this.manager.onProgress = function ( item, loaded, total ) {

				console.log( item, loaded, total );

			};
			
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
		
		// creates and adds the lights
		initLights : function(){

			var controller = this;

			_(this.lightsSettings).each(function(item, lightIndex){

				var light;

				// create the light
				if( item.type == "Ambient")
					light = new THREE.AmbientLight();
				if( item.type == "Directional")
					light = new THREE.DirectionalLight();
				if( item.type == "Spot")
					light = new THREE.SpotLight();
				if( item.type == "Hemisphere")
					light = new THREE.HemisphereLight();

				// loop through properties
				_(item).each(function(value, index){
					if( index == "type") return;

					if( typeof value === "string" && value.indexOf("#") == 0){
						// it's a color
						light[index] = new THREE.Color(value);
					} else {
						// filter out undesirable properties
						if( !_(["type", "name"]).contains( index ) ) light[index] = value;
					}
				});

				controller.renderElements.lights.push( light );

				controller.scene.add( light );
			});

		},
		
		/**
		render the scene
		**/
		render : function() {

			this.dispatchEvent({type: "frameRender"});

			//this.updateScene();
			//this.updateMaterials();
			//this.updateLights();

			this.stats.update();
			
			
			// if( this.effectsEnabled ){
			// 				this.updateEffects();
			// 				this.composer.render();
			// } else {
				this.renderer.render(this.scene, this.camera);
			// }

			this.dispatchEvent({type: "frameRendered"});
		}
	};
	
	// apply event dispatcher
	THREE.EventDispatcher.prototype.apply( RenderController.prototype );
	
	
	return RenderController;
});