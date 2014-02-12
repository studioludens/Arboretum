// 
//  Branch.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-11.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define( function(){
	
	var Branch = function( tree ){
		this.tree = tree;
		
		this._startNode = null;
		this._endNode = null;
		
		this._nodes = [];
		
		this._length = 0;
	};
	
	Branch.prototype = {
		
		startNode : function( value ){
			if( value ){
				this._startNode = value;
				
			}
			
			return this._startNode;
		},
		
		endNode : function( value ){
			if( value ){
				this._endNode = value;
			}
			
			return this._endNode;
		},
		
		node : function( pos, node ){
			if( node ){
				// add the node to that position
				nodes.push( { pos: pos, node: node });
				return node;
			} else {
				// check if there is a node at that position
				var n = _(this._nodes).where( { pos : pos });
				if( n ) return n.node;
			}
		}
		
		tick : function(){
			_(this._nodes).each(function(node){
				node.tick();
			});
		}
	};
	
	return Branch;
	
});