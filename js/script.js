$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // Scroll Back To Top Script Here
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

  // Menu Bar Script Here
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // Typing Animation Script Here
var typed = new Typed(".typing",{
  strings: ["Developer", "Blogger", "Designer", "Freelancer", "Keyboardist"],
  typeSpeed: 200,
  backSpeed: 60,
  loop: true
});

  // Owl Carousel Script Here
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
