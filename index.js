$(document).ready(function(){

       
        $('.owl-carousel').owlCarousel({
            margin: 30,
            nav : true,
            items:1,
            responsiveClass : true,
            rewind : false,
            autoplay:false,
            loop: false,
            autoplayTimeout:3000,
            dots : false,
            responsive: {
                0: {
                    items: 1,
                    
                    
                },
                600: {
                    items: 1,
                
                    
                },
                1000: {
                    items: 1
                },
                1200:{
                    items :3,

                }
            }
        });
        
        $( ".owl-prev").html('<img class="arrow-img" src="images/chevron (1).png" alt="" />');
        $( ".owl-next").html('<img class="arrow-img" src="images/chevron.png" alt="" />');
});


  $(document).ready(function () {
        $(".hamburger").click(function () {
          $(".navul").css("display", "block");
          $(".navul").css("background-color", "white");
          $(".navbar-row").css("background-color", "white");
          $(".carousel-inner").css("display", "none");
          $("#nav").css("position","relative");
          $("#form").css("color","black");
          $(".logo-img").css("filter","invert(1)");
          $("i.fas.fa-search").css("filter","invert(1)");
          $("i.fas.fa-shopping-cart").css("filter","invert(1)");
          $(".hamburger").css("display","none");
          $(".cross").css("display","block");
          $(".opt").css("opacity","0.5");
          $(".opt").css("pointer-events","none");
          $(".owl-carousel").trigger("stop.owl.autoplay"); 


        });
      });



       $(document).ready(function () {
        $(".cross").click(function () {
          $(".navul").css("display", "none");
          $(".navul").css("background-color", "grey");
          $(".navbar-row").css("background-color", "transparent");
          $(".carousel-inner").css("display", "block");
          $("#nav").css("position","absolute");
          $("#form").css("color","white");
          $(".logo-img").css("filter","unset");
          $("i.fas.fa-search").css("filter","unset");
          $("i.fas.fa-shopping-cart").css("filter","unset");
          $(".hamburger").css("display","block");
          $(".cross").css("display","none");
          $(".opt").css("opacity","unset");
          $(".opt").css("pointer-events","unset");
          // $(".owl-carousel").trigger("play.owl.autoplay"); 
          


        });
      });


       $(document).ready(function () {
        $("#icon2").click(function () {

            $("#icon2").css("display", "none");
            $("#form").css("display", "block");

 
 });
      });

