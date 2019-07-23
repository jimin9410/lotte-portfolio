$(document).ready(function(){

        $( '.btn_all' ).click( function(e) {
          e.preventDefault();
          $( '.gnb' ).addClass( 'on' );
       });

        $( '.gnb_close' ).click( function(e) {
          e.preventDefault();
          $( '.gnb' ).removeClass( 'on' );
        });
      });

      $('.btn_familysite').click(function(){
          $(this).css('display', 'none');
          $('.btn_familysite_cl').css('display', 'block');
          $('.familysite_area').css('display', 'block').stop().animate({height:$('.familysite_area ul').height() + 20},300);
          $('.familysite_area li a').eq(0).focus();
          return false;
        });
        $('.btn_familysite_cl').click(function(){
          $(this).css('display', 'none');
          $('.btn_familysite').css('display', 'block');
          $('.familysite_area').stop().animate({height:0},300);
          setTimeout(function() {
            $('.familysite_area').css('display', 'none');
              }, 500);
          return false;
        });
        $('.familysite_area li:first-child a').keydown(function(e){
          var isShift = window.event.shiftKey ? true : false;
          if(isShift && (e.keyCode == 9)){
            $('.btn_familysite_cl').focus();
            return false;
          }
        });
        $('.btn_familysite_cl').keydown(function(e){
          var isShift = window.event.shiftKey ? true : false;
          if(event.keyCode == 9){
            $('.familysite_area li a').eq(0).focus();
            return false;
          }
        });


        $( window ).scroll( function() {
        	if ( $( this ).scrollTop() > 200 ) {
        		$( '.top' ).fadeIn();
        	} else {
        		$( '.top' ).fadeOut();
        	}
        } );

        $( '.top' ).click( function() {
        	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        	return false;
        } );




        $window = $(window);
  $window.scroll(function() {
    $scroll_position = $window.scrollTop();
      if ($scroll_position > 300) {
          $('#header').addClass('sticky');
          header_height = $('#header').innerHeight();
          $('body').css('padding-top' , header_height);
      } else {
          $('body').css('padding-top' , '0');
          $('.your-header').removeClass('sticky');
      }
   });
