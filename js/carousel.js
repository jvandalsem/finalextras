// Carousel from W3 Schools
$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
  $(".item5").click(function(){
    $("#myCarousel").carousel(4);
  });
  $(".item6").click(function(){
    $("#myCarousel").carousel(5);
  });

  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});
// Sticky Navigation
window.addEventListener('scroll', stickyNavbar)
var navbar = document.getElementById("navcontainer");
function stickyNavbar() {
  if (window.pageYOffset >= navbar.offsetTop) {
    navbar.classList.add('stickyNav')
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  }
  else {
    navbar.classList.remove('stickyNav');
    document.body.classList.remove('stickyNav');
  }
}
