$(document).ready(function(){

        $( '.btn_all' ).click( function(e) {
          e.preventDefault();
          $( '.gnb' ).addClass( 'on' );
       });

        $( '.gnb_close' ).click( function(e) {
          e.preventDefault();
          $( '.gnb' ).removeClass( 'on' );
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

        
      });
