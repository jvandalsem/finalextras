// Typewriter intro
var titleName = document.getElementById('titleName');
$(document).ready(function() {
  var typewriter = new Typewriter(titleName, {
    loop: false,
    delay: 90
  });
  typewriter.typeString('Hello!').start().pauseFor(200).typeString('My name is Jack Van Dalsem.').pauseFor(800).typeString(' Welcome to my project portfolio.');
});


// Sticky Navigation
window.addEventListener('scroll', stickyNavbar)
var navbar = document.getElementById("navcontainer");

function stickyNavbar() {
  if (window.pageYOffset >= navbar.offsetTop) {
    navbar.classList.add('stickyNav')
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  } else {
    navbar.classList.remove('stickyNav');
    document.body.classList.remove('stickyNav');
  }
}
