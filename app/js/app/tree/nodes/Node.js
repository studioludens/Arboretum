// 
//  Node.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-11.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define( ['three'], 

function( THREE ){
	
	console.log("Node loaded");
	
	var Node = function( pos, normal ){
		this._pos = pos || new THREE.Vector3(0,0,0);
		this._normal = normal || new THREE.Vector3(0,0,0);
		
		// links to all the branches this node is connected to
		this._branches = [];
		
		// setup basic geometry
		this._geometry = new THREE.SphereGeometry(1,4,4);
		
		
	};
	
	Node.prototype = {
		
		pos : function( value ){
			if( value ) this._pos = value;
			
			return this._pos;	
		},
		
		pos : function( value ){
			if( value ) this._pos = value;
			
			return this._pos;	
		},
		
		tick: function(){
			
		},
		
		geometry : function( value ){
			if( value ) this._geometry = value;
			
			return this._geometry;
		}
		
	};
	
	return Node;
})