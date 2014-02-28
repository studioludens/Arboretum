// 
//  InteractionController.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-12.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define(["jquery", 
		"underscore",
		"trackballControls"],
function( $, _, TrackballControls ){
	
	//var trackballControls = new TrackballControls();
	
	var InteractionController = function( renderController ){
		
		this.controls = null;
		this.renderController = renderController;
	};
	
	InteractionController.prototype = {
		
		init : function(){
			
			//this.controls = new TrackballControls( this.renderController.camera, this.renderController.renderer.domElement );
			
			this.initMouseHandlers();
		},
		
		initMouseHandlers : function(){
			
		}
	};
	
	return InteractionController;
	
})