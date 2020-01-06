$( document ).ready( function()
{
	// -----------------------------------------------------------------------------
	//	console.log( 'ready' );
	// -----------------------------------------------------------------------------
	
	function onWindowResize()
	{
		var e = $( '.canvas-div' ).first();
		
		//console.log( e.width(), e.height() );
		View.setSize( e.width(), e.height() );
	}
	
	function onButtonsColorChange()
	{
		colorClick( $( this ) );
		
		//console.log( 'onButtonsColorChange: ' + $( '.color-box.active' ).first().data( 'color' ) );	
		View.setButtonsColor( $( '.color-box.active' ).first().data( 'color' ) );
	}

	function onTextureChange()
	{
		innerBoxClick( $( this ) );
		
		//console.log( 'onTextureChange: ' + $( '#TEXTURE > .inner-box.active' ).first().data( 'texture' ) );
		View.setTexture( $( '#TEXTURE > .inner-box.active' ).first().data( 'texture' ), false );
	}

	function onChange()
	{
		innerBoxClick( $( this ) );
		
		var fit = $( '#FIT > .inner-box.active' ).first().data( 'value' );	
		var collar = $( '#COLLAR > .inner-box.active' ).first().data( 'obj' );
		var front = $( '#FRONT > .inner-box.active' ).first().data( 'obj' );
		var frontBottom = $( '#FRONT_BOTTOM > .inner-box.active' ).first().data( 'value' );
		var back = $( '#BACK > .inner-box.active' ).first().data( 'obj' );
		var sleeve = $( '#SLEEVE > .inner-box.active' ).first().data( 'value' );
		var leftSleeve = null;
		var rightSleeve = null;
		var cuff = $( '#CUFF > .inner-box.active' ).first().data( 'obj' );
		var leftCuff = null;
		var rightCuff = null;
		var leftPocket = $( '#LEFT_POCKET > .inner-box.active' ).first().data( 'obj' ) || null;
		var rightPocket = $( '#RIGHT_POCKET > .inner-box.active' ).first().data( 'obj' ) || null;
		var leftButtons = null;
		var rightButtons = null;
		
		
		if( fit == 'Slim' )
		{
			back = 'obj/Fit/Slim/Direct/Back/' + back;
			front = 'obj/Fit/Slim/' + frontBottom + '/' + front;
		}
		else if( fit == 'Regular' )
		{
			back = 'obj/Fit/Regular/Direct/Back.obj';
			front = 'obj/Fit/Regular/' + frontBottom + '/' + front;
		}
		
		if( sleeve == 'Long' )
		{
			leftSleeve = 'obj/Sleeves/Long.obj';
			rightSleeve = null;
			
			leftCuff = 'obj/Sleeves/L_Cuffs/' + cuff;
			rightCuff = 'obj/Sleeves/R_Cuffs/' + cuff;
			
			if( cuff.indexOf( 'Sloping' ) != -1 )
			{
				leftButtons = 'obj/Sleeves/L_Cuffs/Buttons_2.obj';
				rightButtons = 'obj/Sleeves/R_Cuffs/Buttons_2.obj';
			}
			else 
			{
				leftButtons = 'obj/Sleeves/L_Cuffs/Button.obj';
				rightButtons = 'obj/Sleeves/R_Cuffs/Button.obj';
			}
		}
		else if( sleeve == 'Safari' )
		{
			leftSleeve = 'obj/Sleeves/Safari.obj';
			leftCuff = null;
			leftButtons = 'obj/Sleeves/Safari_Buttons.obj';
			
			rightSleeve = null;
			rightCuff = 'obj/Sleeves/R_Cuffs/' + cuff;
			
			if( cuff.indexOf( 'Sloping' ) != -1 )
			{
				rightButtons = 'obj/Sleeves/R_Cuffs/Buttons_2.obj';
			}
			else 
			{
				rightButtons = 'obj/Sleeves/R_Cuffs/Button.obj';
			}
		}
		else if( sleeve == 'Short' )
		{
			leftSleeve = 'obj/Sleeves/Short.obj';
			leftCuff = 'obj/Sleeves/Short_Bar.obj';	
			leftButtons = 'obj/Sleeves/Short_Pat\'s_Buttons_Parallel.obj';
			
			rightSleeve = 'obj/Sleeves/Short_Pat\'s.obj';
			rightCuff = null;
			rightButtons = null;
		}
		
		
		// UpdateUI
		
		$( '.back-hid' ).css( 'display', ( fit == 'Slim' ? '' : 'none' ) );
		$( '.bottom-hid' ).css( 'display', ( fit == 'Regular' ? '' : 'none' ) );	
		$( '.mangets' ).css( 'display', sleeve == 'Short' ? 'none' : '' );


		/*console.log( 'fit:' + fit );
		console.log( 'collar:' + collar );
		console.log( 'sleeve:' + sleeve );
		console.log( 'cuff:' + cuff );
		console.log( 'leftPocket:' + leftPocket );
		console.log( 'rightPocket:' + rightPocket );
		console.log( 'front:' + front );
		console.log( 'back:' + back );*/
		
		View.setValues
		(
			{
				
				standup:'obj/Collars/Stand-Up.obj',
				collar:'obj/' + collar,
				frontButtons:'obj/Collars/Front_Button.obj',
				
				coquette:'obj/Fit/Coquette.obj',
				front:front,
				back:back,

				leftSleeve:leftSleeve,
				leftButtons:leftButtons,
				leftCuff:leftCuff,
				
				rightSleeve:rightSleeve,
				rightButtons:rightButtons,
				rightCuff:rightCuff,
				
				leftPocket:leftPocket,
				rightPocket:rightPocket	
				
			}
		);
	}

	function innerBoxClick( e )
	{
		e.closest( '.inner-block' ).find( '.inner-box' ).removeClass( 'active' );
		e.closest( '.inner-block' ).find( 'p' ).removeClass( 'active' );
		e.addClass( 'active' );
		e.find( 'p' ).addClass( 'active' );
	}
	
	function colorClick( e )
	{
		e.closest( '.color-block' ).find( '.color-box' ).removeClass( 'active' );
		e.addClass( 'active' );
	}

	// -----------------------------------------------------------------------------
	// SetupUI
	// -----------------------------------------------------------------------------
	
	// buttonsColor
	$( '.color-box' ).each( function()
	{
		var e = $( this );
			e.css( 'background-color', e.data( 'color' ) );
			e.click( onButtonsColorChange );
	} );
	
	// texture	
	var texturesHTML = '';
	
	
	[
		'02011452.JPG',
		'02011426.JPG',
		'02011427.JPG',
		'02011428.JPG',
		'02011429.JPG',
		'02011431.JPG',
		'02011432.JPG',
		'02011434.JPG',
		'02011435.JPG',
		'02011436.JPG',
		'02011437.JPG',
		'02011438.JPG',
		'02011440.JPG',
		'02011442.JPG',
		'02011443.JPG',
		'02011444.JPG',
		'02011446.JPG',
		'02011447.JPG',
		'02011449.JPG',
		'02011450.JPG',
		
		'02011454.JPG',
		'02011457.JPG',
		'02011458.JPG',
		'02011459.JPG',
		'02011460.JPG',
		'02011462.JPG',
		'02011463.JPG',
		'02011464.JPG',
		'02011465.JPG',
		'02011466.JPG',
		'02011467.JPG',
		'02011468.JPG',
		'02011469.JPG',
		'02011470.JPG',
		'02011471.JPG',
		'02011473.JPG',
		'02011474.JPG',
		'02011475.JPG',
		'02011476.JPG',
		'02011477.JPG',
		'02011478.JPG',
		'02011479.JPG',
		'02011480.JPG',
		'02011482.JPG',
		'02011483.JPG',
		'02011484.JPG',
		'02011485.JPG',
		'02011486.JPG',
		'02011487.JPG',
		'02011488.JPG',
		'02011489.JPG',
		'02011491.JPG',
		'02011493.JPG',
		'02011494.JPG',
		'03011401.JPG',
		'03011402.JPG',
		'06011401.JPG',
		'06011402.JPG',
		'06011403.JPG',
		'06011404.JPG',
		'06011405.JPG',
		'06011406.JPG',
		'06011407.JPG',
		'06011409.JPG'
		
	].forEach( function( value, index )
	{
		texturesHTML += '<div class="inner-box' + ( index == 0 ? ' active' : '' ) + 
					'" data-texture="textures/' + value + 
					'"><p class="active">' + value + '</p></div>';
					
	} );

	$( '#TEXTURE' ).append( texturesHTML );
	$( '#TEXTURE > .inner-box' ).each( function()
	{
		var e = $( this );
			e.css( 'background-image', 'url( ' + e.data( 'texture' ) + ' )' );
			e.click( onTextureChange );
	} );

	// parts
	$( '.inner-box' ).not( '#TEXTURE > .inner-box' ).each( function()
	{
		$( this ).click( onChange );
	} );
	
		// -----------------------------------------------------------------------------

		// tabs
		$( document ).on( 'click','.menu li', function()
		{
			var e = $( this );
			
			$( '.menu' ).addClass( 'active' );
			$( '.menu li' ).removeClass( 'active' );
			e.addClass( 'active' );
			$( '.menu .tab' ).removeClass( 'active' );
			$( '.menu .tab' ).eq( e.index() ).addClass( 'active' );
			$( '.img-block' ).addClass( 'active' );
			$( '.menu .close' ).addClass( 'close-active' );

		} );
		
		$( document ).on( 'click','.menu .close', function()
		{
			$( '.menu' ).removeClass( 'active' );
			$( '.menu li' ).removeClass( 'active' );
			$( '.menu .tab' ).removeClass( 'active' );
			$( '.img-block' ).removeClass( 'active' );
			$( '.menu .close' ).removeClass( 'close-active' );

		} );
		
		/*	???	
			// list
			$( document ).on( 'click', '.menu .list .list-title', function()
			{
				var e = $( this );
				
				if( !e.parent().hasClass( 'active' ) )
				{
					$( '.menu .list' ).removeClass( 'active' );
				}
				
				e.parent().toggleClass( 'active' );
				
				console.log( 'list' );
			} );
			
			// list-title
			$( document ).on( 'click','.menu .list .list-box', function()
			{	
				var e = $( this );
				var list = e.closest( '.list' );
					list.find( '.list-title span' ).text( e.find( 'span' ).text() );
					
				$( '.menu .list' ).removeClass( 'active' );
				
				console.log( 'list-title' );
			} );
			
			// radio
			$( document ).on( 'click','.menu label', function()
			{
				var e = $( this );
					e.closest( '.checkbox-block' ).find( 'label' ).removeClass( 'active' );
					e.addClass( 'active' );
				
				console.log( 'radio' );
			} );


			// inner-tab
			$( document ).on( 'click','.menu .inner-tab', function()
			{
				var e = $( this );
					e.closest( '.inner-tabs' ).find( '.inner-tab' ).removeClass( 'active' );
					e.addClass( 'active' );
					e.closest( '.inner-tab-block' ).find( '.inner-tab-box' ).removeClass( 'active' );
					e.closest( '.inner-tab-block' ).find( '.inner-tab-box' ).eq( e.index() ).addClass( 'active' );
				
				console.log( 'inner-tab' );
			} );
			
			// txt-block
			$( document ).on( 'click','.menu .txt-box', function()
			{
				var e = $( this );
					e.closest( '.txt-block' ).find( '.txt-box' ).removeClass( 'active' );
					e.addClass( 'active' );
				
				console.log( 'txt-block' );
			} );
			
			// inner-pug
			$( document ).on( 'click','.menu .inner-pug', function()
			{
				var e = $( this );
					e.closest( '.inner-pugs' ).find( '.inner-pug' ).removeClass( 'active' );
					e.addClass( 'active' );
				
				console.log( 'inner-pug' );
			} );
		*/
		
	// -----------------------------------------------------------------------------
	
	$( '.canvas-div' ).first().append( View.getCanvas() );
	
	$( window ).resize( onWindowResize );
	
	onTextureChange();
	onButtonsColorChange();
	onChange();	
	onWindowResize();

} );