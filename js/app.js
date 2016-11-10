// Init functions
navScroll();
smoothScroll();
imgHover();
carousel();

/* Carousel for testimonials */
function carousel() {
  $("#testimonials-wrapper").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      autoPlay: true,
      paginationSpeed: 400,
      singleItem:true
  });
}

/* ****** Scroll Magic script to change navbar background color depending on window position ***** */
function navScroll() {
  // init controller
  height = window.innerHeight;
  var controller = new ScrollMagic.Controller();

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#intro"})
          .setClassToggle("#nav", "bg-sienna") // add class toggle
          .addTo(controller);
}

/* ****** Smooth Scrolling script to navigate through website from nav links ***** */
function smoothScroll() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
        return false;
      }
    }
    });
}

/* Features images fade with hover and click */
function imgHover() {
  // variable to store img location
  var img = $(".how-image");
  // Change image url based on the feature section div when a mouse enters or clicks the div
  $("#how-1").mouseenter(function(){
    img.fadeOut(200, function(){
      img.attr("src","images/features/Feature1@2x.jpg");
      img.fadeIn(200);
    });
  }).click(function(){
    img.fadeOut(200, function(){
      img.attr("src","images/features/Feature1@2x.jpg");
      img.fadeIn(200);
    });
  });
  $("#how-2").mouseenter(function(){
    img.fadeOut(200, function(){
      img.attr("src","images/features/Feature2@2x.jpg");
      img.fadeIn(200);
    });
  }).click(function(){
    img.fadeOut(200, function(){
      img.attr("src","images/features/Feature2@2x.jpg");
      img.fadeIn(200);
    });
  });
  $("#how-3").mouseenter(function(){
    img.fadeOut(200, function(){
      img.attr("src","images/features/Feature3@2x.jpg");
      img.fadeIn(200);
    });
  }).click(function(){
    img.fadeOut(200, function(){
      img.attr("src","images/features/Feature3@2x.jpg");
      img.fadeIn(200);
    });
  });
  $("#how-4").mouseenter(function(){
    img.fadeOut(200, function(){
      img.attr("src","images/features/Feature4@2x.jpg");
      img.fadeIn(200);
    });
  }).click(function(){
    img.fadeOut(200, function(){
      img.attr("src","images/features/Feature4@2x.jpg");
      img.fadeIn(200);
    });
  });
}
