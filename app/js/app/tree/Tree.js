// 
//  Tree.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-11.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define( ['tree/nodes/Node'], 

function( Node ){
	
	console.log("Tree loaded");
	
	var Tree = function(){
		
		// bounding box
		this.aabb = null;
		this.rootNode = new Node();
	};
	
	Tree.prototype = {
		
		tick : function(){
			console.log("Tree tick");
			
			this.rootNode.tick();
		}
	};
	
	return Tree;
});