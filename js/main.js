$(document).ready(function(){

        var vHeight = $(window).height();
        $("section").height(vHeight);

        $( '.btn_all' ).click( function(e) {
          e.preventDefault();
          $( '.gnb' ).addClass( 'on' );
       });

        $( '.gnb_close' ).click( function(e) {
          e.preventDefault();
          $( '.gnb' ).removeClass( 'on' );
        });

        $("section").on("mousewheel", function(event, delta){
          event.preventDefault();
            if(delta>0){
            //마우스 휠 up
            var prev = $(this).prev().offset().top;
            $("html,body").stop().animate({"scrollTop":prev},
          700);
          }else if(delta<0){
            //마우스 휠 down
            var next = $(this).next().offset().top;
            $("html,body").stop().animate({"scrollTop":next},
          700);
          }
        });


     $('.scroll').click(function(){
       var offset = $(this).parent().next().offset().top;
       $("html,body").animate({"scrollTop":offset}, 1000);
     });

     $(".scroll_last").click(function(){

       var more=$("#more_info").height();
       var footer=$("#footer").height();
       var total_hei=more+footer;

       var about_off= $("#about_lotte_core_page").offset().top;

       $("html,body").animate({"scrollTop":about_off+total_hei}, 1000);

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

          $(".circle-nav a").click(function(e){

            e.preventDefault();

            $(".bg-sec").fadeOut(350);
            var txt=$(this).children("span").attr("value");
            $("."+txt).fadeIn(350);
          });


     });


     $(document).ready(function() {

         /* Every time the window is scrolled ... */
         $(window).scroll( function(){

             /* Check the location of each desired element */
             $('.hideme').each( function(i){

                 var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                 var bottom_of_window = $(window).scrollTop() + $(window).height();

                 /* If the object is completely visible in the window, fade it it */
                 if( bottom_of_window > bottom_of_object ){

                     $(this).stop().animate({'opacity':'1'},400);

                 }

             });

         });

         $(window).on("resize", function(){
           var totalWidth = $(window).width();
           if(totalWidth < 700){
             $("video").hide()
             $(".mobile_background").show()
           } else {
             $("video").show()
             $(".mobile_background").hide()
           }
         });

     });


     $(".navi_li").click(function(){

        var cindex = $(this).index();
        var offset= $("section").eq(cindex).offset().top;

        $("html,body").animate({"scrollTop":offset},500);

     });


    $(".hover").click(function(){
      $(".hover").removeClass("on");
      $(this).addClass("on");
    });

    $(window).on("scroll", function(){

      var scroll = $(this).scrollTop();

      for(var i = 0; i < $("section").length; i++){

        var index = $("section").eq(i).height();
        var offtop = $("section").eq(i).offset().top;
        var hei = offtop + index;

        if(scroll >= offtop && scroll < hei){
          $(".hover").eq(i).addClass("on");
        } else {
          $(".hover").eq(i).removeClass("on");
        }

      }

      var last_sec = $(".core").offset().top;

      if(scroll > last_sec){
        $(".navi").fadeOut();
      } else {
        $(".navi").fadeIn();
      }
   });


   $( '.logo' ).click( function() {
   	$( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
   });
