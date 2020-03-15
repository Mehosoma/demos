
	

	( function( view ){ "use strict";
		
		// public
		
		view.setSize = setSize;
		view.getCanvas = getCanvas;	
		view.setTexture = setTexture;
		view.setButtonsColor =  setButtonsColor;
		view.setValues = setValues;

		// private
			
		const TEXTURE_LOADER = new THREE.TextureLoader();
		const TEXTURES = {};		
		const MATERIAL = new THREE.MeshPhongMaterial( { map:null, shininess:1, color:0xFFFFFF, side:THREE.DoubleSide } );
		const BUTTONS_MATERIAL = new THREE.MeshPhongMaterial( { shininess:1, color:0xFFFFFF, side:THREE.DoubleSide } );

		var ssaoEnabled = true;
		var canvasWidth = 100;
		var canvasHeight = 100;
		var renderer, camera, scene, group, gridHelper, controls, loader, composer, ssaoPass, fxaaPass;
		var textureURL;
		var values = {};
		var loaders = {};
		
		init();


		function getCanvas()
		{
			return renderer.domElement;
		}
		
		function setSize( w, h )
		{
			canvasWidth = w;
			canvasHeight = h;

			if( renderer && composer )
			{

				camera.aspect = canvasWidth / canvasHeight;
				camera.updateProjectionMatrix();
				
				//
				
				
				var box = new THREE.Box3( new THREE.Vector3( -25, -20, -15 ), new THREE.Vector3( 25, 30, 15 ) );
				
				var size = box.getSize( new THREE.Vector3() );
				var center = box.getCenter( new THREE.Vector3() );

				var maxSize = Math.max( size.x, size.y, size.z );
				var fitHeightDistance = maxSize / ( 2 * Math.atan( Math.PI * camera.fov / 360 ) );
				var fitWidthDistance = fitHeightDistance / camera.aspect;
				var distance = Math.max( fitHeightDistance, fitWidthDistance );

				var direction = controls.target.clone()
					.sub( camera.position )
					.normalize()
					.multiplyScalar( distance );
				
				controls.minDistance = controls.maxDistance = distance * 1.75;
				controls.target.copy( center );

				camera.near = distance / 100;
				camera.far = distance * 100;
				camera.updateProjectionMatrix();

				camera.position.copy( controls.target ).sub( direction );

				controls.update();
				
				controls.minDistance -= 100;
				
				
				//
				
				fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( canvasWidth );
				fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( canvasHeight );
				
				composer.setSize( canvasWidth, canvasHeight );
				renderer.setSize( canvasWidth, canvasHeight );	
			}
		}
		
		function setValues( values )
		{
			for( var i in values )
			{
				checkValue( values[ i ], i );
			}
		}
		
		function checkValue( value, name )
		{
			if( values[ name ] != value )
			{
				values[ name ] = value;	
				load( name );
			}
		}
		
		function load( name )
		{
			console.log( name, values[ name ] );
			var object = group.getObjectByName( name );
			var loader = loaders[ name ];
				
				if( object )
				{
					object.traverse( function( child ) 
					{
						if( child instanceof THREE.Mesh ) 
						{
							child.geometry.dispose();
							child.material = null;
							child = null;
						}
					} );
					
					group.remove( object );
				}
				
				if( !loader )
				{
					loader = new THREE.OBJLoader();
					loader.crossOrigin = "";
					loader.name = name;
					loaders[ name ] = loader;
				}
				
			if( values[ name ] != null ) loader.load( values[ name ], onOBJLoaderComplete.bind( loader ) );
		}
		
		function onOBJLoaderComplete( object )
		{
			object.name = this.name;
			object.traverse( function( child ) 
			{
				if( child instanceof THREE.Mesh ) 
				{
					if( object.name.toLowerCase().indexOf( "buttons" ) != -1 ) child.material =  BUTTONS_MATERIAL
					else child.material = MATERIAL;
				}
			} );

			group.add( object );

			
			//console.log( this.name );
		}
		
		function setButtonsColor( color )
		{
			BUTTONS_MATERIAL.color.set( color );
			BUTTONS_MATERIAL.needsUpdate = true;
		}
		
		function setTexture( url, isColor = false )
		{
			
			if( isColor )
			{
				textureURL = null;
				
				MATERIAL.map = null;
				MATERIAL.color.set( url );
				MATERIAL.needsUpdate = true;
			}
			else 
			{
				if( textureURL != url )
				{
					textureURL = url;
					
					var texture = TEXTURES[ textureURL ];
	
					if( !texture )
					{
						texture = TEXTURE_LOADER.load( textureURL );
						//texture.minFilter = THREE.LinearFilter;
						//texture.magFilter = THREE.LinearFilter;
						texture.wrapS = THREE.RepeatWrapping;
						texture.wrapT = THREE.RepeatWrapping;
						texture.repeat.set( 128, 128 );
						texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
						
						TEXTURES[ textureURL ] = texture;
					}
					
					MATERIAL.color.set( "#FFFFFF" );
					MATERIAL.map = texture;
					MATERIAL.needsUpdate = true;
				}
			}
		}

		function init()
		{
			renderer = new THREE.WebGLRenderer( { antialias:true, preserveDrawingBuffer:true } );
			renderer.setSize( canvasWidth, canvasHeight );
			renderer.setClearColor( 0xFFFFFF );
			//renderer.domElement.style.border = "solid 1px #CCC";

			camera = new THREE.PerspectiveCamera( 55, canvasWidth / canvasHeight, 1, 1500 );
			camera.position.set( 0, -100, 50 );
		
			var light = new THREE.DirectionalLight( 0x888888 );
				light.position.set( .25, .8, .5 );
				
			var	light2 = new THREE.DirectionalLight( 0x444444 );
				light2.position.set( -.25, -.5, -.5 );

			gridHelper = new THREE.GridHelper( 250, 100, 0xCCCCCC, 0xCCCCCC );
			gridHelper.position.y = -127;
			
			group = new THREE.Object3D();
			group.position.y = gridHelper.position.y;
			group.scale.set( 30, 30, 30 );
			
			scene = new THREE.Scene();
			scene.add( camera );	
			scene.add( new THREE.AmbientLight( 0x888888 ) );
			scene.add( light );
			scene.add( light2 );
			scene.add( group );
			//scene.add( gridHelper );

			controls = new THREE.OrbitControls( camera, renderer.domElement );
			controls.autoRotate = false;
			controls.enablePan = false;
			controls.enableKeys = false;
			controls.maxDistance = controls.minDistance = 100;
			controls.minPolarAngle = Math.PI / 180 * 90;
			controls.maxPolarAngle = Math.PI / 180 * 90;
			controls.update();
			
			controls.maxDistance = 200;
			controls.minDistance = 25;
			controls.minPolarAngle = Math.PI / 180 * 45;
			controls.maxPolarAngle = Math.PI / 180 * 120;
			
			var renderPass = new THREE.RenderPass( scene, camera );
				renderPass.renderToScreen = false;
			
			fxaaPass = new THREE.ShaderPass( THREE.FXAAShader );
			fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( canvasWidth );
			fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( canvasHeight );
			fxaaPass.renderToScreen = false;
	
			ssaoPass = new THREE.SSAOPass( scene, camera, canvasWidth, canvasHeight );
			//ssaoPass.output = 0; // THREE.SSAOPass.OUTPUT.SSAO; // SSAO // Default
			ssaoPass.kernelRadius = 8; // 4
			ssaoPass.kernelSize = 64; // 16
			ssaoPass.minDistance = 0.001; // 0.00001
			ssaoPass.maxDistance = 0.15; // 0.2
			ssaoPass.renderToScreen = true;
			
			composer = new THREE.EffectComposer( renderer );
			composer.addPass( renderPass );
			composer.addPass( fxaaPass );			
			composer.addPass( ssaoPass );
			
			render();
		}
		
		function render() 
		{
			if( !ssaoEnabled ) renderer.render( scene, camera );
			else composer.render();
			
			requestAnimationFrame( render );
		}

	}( this.View = this.View || {} ));