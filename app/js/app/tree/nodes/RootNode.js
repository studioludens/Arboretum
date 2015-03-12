// 
//  RootNode.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-11.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 
define( ['tree/nodes/Node'],
    function( Node ){

        var RootNode = function(){
        };

        RootNode.prototype = new Node();

        _(RootNode.prototype).extend({

        });

        return RootNode;
    });