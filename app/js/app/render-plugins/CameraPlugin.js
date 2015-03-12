// 
//  CameraPlugin.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-28.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define(['three',
		'renderPlugins/RenderPlugin',
		'settings/CameraSettings'],

function( THREE, RenderPlugin, CameraSettings ){
	
	var CameraPlugin = function( settings ){
		this.camera = null;
		
		this.settings = {};
		_( this.settings ).extend( CameraSettings ); 
		_( this.settings ).extend( settings );
	};
	
	CameraPlugin.prototype = new RenderPlugin();
	
	_( CameraPlugin.prototype ).extend({
		
		init : function(){
			
			console.log("[CameraPlugin.init]");
			
			this.camera = new THREE.PerspectiveCamera(this.settings.fov, this.settings.width / this.settings.height, this.settings.near, this.settings.far);

			this.camera.position = this.settings.position;
			//this.camera.rotation = cameraOptions.rotation;
			this.camera.lookAt( this.settings.target );
		},
		
		exports : function(){
			return { camera : this.camera };
		}
		
	});
	
	return CameraPlugin;
});