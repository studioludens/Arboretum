// 
//  SceneGeometryPlugin.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-28.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define( ['three',
		'renderPlugins/RenderPlugin',
		'settings/SceneGeometrySettings'], 
function( THREE, RenderPlugin, SceneGeometrySettings ){
	
	var SceneGeometryPlugin = function( settings ){
		this.settings = {};
		_( this.settings ).extend( SceneGeometrySettings );
		_( this.settings ).extend( settings );
	};
	
	SceneGeometryPlugin.prototype = new RenderPlugin();
	
	_(SceneGeometryPlugin.prototype).extend({
		
		init : function(){
			// create some geometry
			console.log("[SceneGeometryPlugin.init]");
			
			this.cube = new THREE.Mesh( new THREE.CubeGeometry( this.settings.cube.width, this.settings.cube.height, this.settings.cube.depth ), new THREE.MeshNormalMaterial() );
		},
		
		update : function( scene ){
			this.cube.rotation.x += .007;
			this.cube.rotation.y += .003;
		},
		
		sceneExports : function(){
			return [ this.cube ];
		}
	})
	
	return SceneGeometryPlugin;
});