$(document).ready(function(){

    // user dropdown js start

    $('.user-image').click(function() {
      $('.user-drop-menu').slideToggle();
    });
    // user dropdown js End
    $('.ps_slider').slick({
      // centerMode: true,
      // centerPadding: '60px',
      infinite: false,
      slidesToShow: 4.5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

    $('.scrollTo').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });
  

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $("header").addClass("sticky");
    }
    else{
      $("header").removeClass("sticky");
    }
  }); 
   
});