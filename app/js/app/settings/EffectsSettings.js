define({

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
});