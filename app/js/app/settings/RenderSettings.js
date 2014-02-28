// 
//  RenderSettings.js - default settings for the RenderController
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-12.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 

define(['three', 
		'renderPlugins/CameraPlugin',
		'renderPlugins/LightsPlugin',
		'renderPlugins/StatsPlugin',
		'renderPlugins/SceneGeometryPlugin'], 
		
function( THREE, CameraPlugin, LightsPlugin, StatsPlugin, SceneGeometryPlugin ){

	return {
		
		domElement : 'webgl',
		
		renderer : {
			shadowMapEnabled : true,
			shadowMapSoft : true,
			shadowMapCullFace : THREE.CullFaceBack,
			shadowMapType : THREE.PCFSoftShadowMap,

			physicallyBasedShading : true
		},
		
		plugins : [
			CameraPlugin,
			LightsPlugin,
			StatsPlugin,
			SceneGeometryPlugin
		]
		
	};
});