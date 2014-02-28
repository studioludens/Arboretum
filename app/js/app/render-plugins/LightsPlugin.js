// 
//  LightsPlugin.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-28.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define( ['three',
		'renderPlugins/RenderPlugin',
		'settings/LightsSettings'], 
function( THREE, RenderPlugin, LightsSettings ){
	
	var LightsPlugin = function( settings ){
		
		this.settings = {};
		_( this.settings ).extend( LightsSettings );
		_( this.settings ).extend( settings );
		
		this._sceneExports = [];
		
	};
	
	LightsPlugin.prototype = new RenderPlugin();
	
	_( LightsPlugin.prototype ).extend( {
		
		init : function(){
			console.log("[LightsPlugin.init]");
			
			var _this = this;

			_(this.settings.lights).each(function(item, lightIndex){

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

				_this._sceneExports.push( light );

			});
			
		},
		
		update : function(){
			//console.log( "[LightsPlugin.update]");
			
		},
		
		sceneExports : function(){
			return this._sceneExports;
		}
	});
	
	return LightsPlugin;
});