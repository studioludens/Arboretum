// 
//  SceneGeometryPlugin.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-28.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define( ['three',
		'renderPlugins/RenderPlugin',
		'settings/SceneGeometrySettings',
        'tree/Tree'],
function( THREE, RenderPlugin, SceneGeometrySettings, Tree ){
	
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
		    this.tree = new Tree(this.settings.tree);
        },
		
		update : function( scene ){

            // DEBUG: try a continuous rotation
			this.cube.rotation.x += .003;
			this.cube.rotation.y += .001;

            // move the simulator one tick forwards
            this.tree.tick();
		},
		
		sceneExports : function(){
			return [ this.cube, this.tree.geometry() ];
		}
	});
	
	return SceneGeometryPlugin;
});