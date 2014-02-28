// 
//  Plugin.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-28.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
//  A simple plugin for the RenderController. All plugins can be loaded
//  and 

define( [],
	
function(){
	
	var RenderPlugin = function(){};
	
	// define 'virtual' methods that get implemented by each plugin
	RenderPlugin.prototype = {
		
		init : function(){
			console.log("[Plugin.init]");
		},
		
		update : function(){
			//console.log("[Plugin.update]");
		},
		
		exports : function(){
			//console.log("[Plugin.exports]");
			return {};
		},
		
		sceneExports : function(){
			//console.log("[Plugin.sceneExports]");
			return {};
		}
	};
	
	return RenderPlugin;	
} );