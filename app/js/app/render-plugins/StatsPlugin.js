// 
//  StatsPlugin.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-28.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define( [ "underscore", "renderPlugins/RenderPlugin", "stats", "settings/StatsSettings"],
	
function( _, RenderPlugin, Stats, StatsSettings ) {
	
	var StatsPlugin = function( settings ){
		
		console.log("[StatsPlugin.contructor]");
		
		this.stats = null;
		
		this.settings = {};
		_( this.settings ).extend( StatsSettings );
		_( this.settings ).extend( settings );
		
		
	};
	
	// inherit from RenderPlugin
	StatsPlugin.prototype = new RenderPlugin();
	
	_( StatsPlugin.prototype ).extend( {
		
		init : function(){
			console.log("[Statsplugin.init]");
			
			this.stats = new Stats();
			this.stats.domElement.style.position = 'absolute';
			this.stats.domElement.style.top = '0px';
			
			this.domElement = document.getElementById( this.settings.domElement );
			
			this.domElement.appendChild( this.stats.domElement );
			
		},
		
		update : function(){
			this.stats.update();
		}
	});
	
	return StatsPlugin;
	
});