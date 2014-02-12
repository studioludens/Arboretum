// 
//  RenderSettings.js
//  Arboretum
//  
//  Created by Alexander Rulkens on 2014-02-12.
//  Copyright 2014 Studio Ludens. All rights reserved.
// 

define(['three'], function(THREE){
	return {

		/**
		Settings for camera
		**/
		cameraSettings : {
			fov: 45,
			near: 0.01,
			far: 100,

			//position: new THREE.Vector3( 11.435, 9.773, 35.647),
			position: new THREE.Vector3( 0, 15, 35),
			target: new THREE.Vector3( 0, 1.5, -10.0)
		},

		/**
		Settings for the effects
		**/
		effectSettings : {

			ssao : {
				type: "SSAO",
				enabled: false,
				onlyAO: false,
				lumInfluence: .0,
				fogEnabled: 1,
				fogNear: 1,
				fogFar: 10

			},

			horizontalBlur : {
				type: "HorizontalBlur",
				enabled: false,
				blurX: 10,
				blurY: 10
			},

			verticalBlur : {
				type: "VerticalBlur",
				enabled: false,
				blurX: 10,
				blurY: 10
			},

			bloom : {
				type: "Bloom",
				enabled: false
			}
		},


		/**
		Settings for the material model
		**/
		modelMaterialSettings : {
			ambient: "#000000",
			specular: "#505050",
			color: "#ff7f9d",
			shininess: 3.0,
			bumpScale: 0.045,
			reflectivity: .04
		},


		/**
		Settings for the lights in the scene
		**/
		lightsSettings : [
			{
				name: "Ambient",
				type: "Ambient",
				visible: true,
				color: "#ffffff"

			},
			{
				name: "Directional",
				type: "Directional",
				visible: true,
				color: "#FFFFFF",
				intensity: 0.5,
				position: new THREE.Vector3(-40.0, 49.0, 21.0),

				// shadows
				castShadow: true,
				//shadowCameraVisible: true,

				shadowCameraLeft : -20,
				shadowCameraRight : 20,
				shadowCameraTop : 20,
				shadowCameraBottom : -20,

				shadowCameraNear : 10.0,
				shadowCameraFar : 200.0,
				shadowCameraFOV : 500.0,

				shadowMapWidth : 1024,
				shadowMapHeight : 1024,

				//shadowBias : -0.005,
				shadowBias : 0,
				shadowDarkness : 0.0
			},
			{
				name: "Hemisphere",
				type: "Hemisphere",
				visible: true,
				color: "#f7d7df",
				groundColor: "#FFFFFF",
				intensity: 1.4,

				position: new THREE.Vector3(12, 6.0, 50.0),

			},

			/** SPOT 1 **/
			{
				name: "Spot 1",
				type: "Spot",
				visible: true,
				color: "#EEEEFF",
				intensity: 1.0,
				position: new THREE.Vector3(100, 10.0, -37.0),
				distance: 0.0,
				exponent: 0.0,

				// shadows
				castShadow: false,
				//shadowCameraVisible: true,

				shadowCameraNear : 10.0,
				shadowCameraFar : 200.0,
				shadowCameraFOV : 500.0,

				shadowMapWidth : 1024,
				shadowMapHeight : 1024,

				shadowDarkness : 0.5

			}

		]

	};
});