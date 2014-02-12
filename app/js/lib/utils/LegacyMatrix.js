/**
legacy matrix functions

convert from glMatrix.js types to THREE.js types
and back

TODO: implement Quaternions
**/

var LegMat = {
	
	/**
	convert THREE.Vector2 to a vec2
	**/
	threeToVec2: function( v ){
		return vec2.create( [ v.x, v.y ] );
	},

	/**
	convert vec2 to THREE.Vector2
	**/
	vec2ToThree: function( v ){
		return new THREE.Vector2( v[0], v[1] );
	},
	
	/**
	convert THREE.Vector3 to a vec3
	**/
	threeToVec3: function( v ){
		return vec3.create( [ v.x, v.y, v.z ] );
	},

	/**
	convert vec3 to THREE.Vector3
	**/
	vec3ToThree: function( v ){
		return new THREE.Vector3( v[0], v[1], v[2] );
	},
	
	/**
	convert THREE.Matrix3 to a mat3
	**/
	threeToMat3: function( m ){
		return mat3.create(
				m.elements[0], m.elements[3], m.elements[6], 
				m.elements[1], m.elements[4], m.elements[7],
				m.elements[2], m.elements[5], m.elements[8]
			);
	},

	/**
	convert mat3 to THREE.Matrix3
	**/
	mat3toTree: function( m ){
		return new THREE.Matrix3( 
							m[0], m[3], m[6], 
							m[1], m[4], m[7],
							m[2], m[5], m[8]
							);
	},
	
	/**
	convert THREE.Matrix4 to a mat4
	**/
	threeToMat4: function( m ){
		return mat4.create( 
						m.elements[0], m.elements[4], m.elements[8], m.elements[12], 
						m.elements[1], m.elements[5], m.elements[9], m.elements[13], 
						m.elements[2], m.elements[6], m.elements[10], m.elements[14], 
						m.elements[3], m.elements[7], m.elements[11], m.elements[15]
					);
	},

	/**
	convert mat4 to THREE.Matrix4
	**/
	mat4toThree: function( m ){
		return new THREE.Matrix4( 
							m[0], m[4], m[8], m[12], 
							m[1], m[5], m[9], m[13], 
							m[2], m[6], m[10], m[14], 
							m[3], m[7], m[11], m[15]
							);
	}

	
	
}
