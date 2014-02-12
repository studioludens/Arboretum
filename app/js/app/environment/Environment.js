// 
//  Environment.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-11.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define([
			"underscore",
			"environment/Air",
			"environment/Ground",
			"environment/Rain",
			"environment/Sun",
			"environment/Wind"], function( _, Air, Ground, Rain, Sun, Wind ){
	
	console.log( "Environment loaded");
/*
	var air = new Air();
	var ground = new Ground();
	var rain = new Rain();
	var sun = new Sun();
	var wind = new Wind();
*/
	// store the factors in an array
	var factors = []; //[ air, ground, rain, sun, wind ];
	
	var Environment = function( factors ){
		this.factors = factors;
	};
	
	Environment.prototype = {
		
		tick : function(){
			_(this.factors).each( function( factor ){
				factor.tick();
			})
		}
	};
	
	return Environment;
});