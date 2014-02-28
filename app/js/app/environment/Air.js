// 
//  Air.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-11.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define( function( Environment ){
	console.log( "environment/Air loaded");
	
	var Air = function(){
		
	};
	
	Air.prototype = {
		
		tick : function(){
			console.log("[Air.tick]");
		}
	};
	
	return Air;
});