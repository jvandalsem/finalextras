// Projects Accordion
var accordionElem = $('#projectAccordion').find('div.projectItem');
console.log(accordionElem)
Array.from(accordionElem).forEach((project) => {
  project.addEventListener('click', expandAccord);
})
function expandAccord(project){
  var projectContent = project.path[2].children[1];
  if ($(projectContent).css('display') === 'none'){
    $(projectContent).animate({height: 'toggle'}, 'slow');
    $(projectContent).css({'display': 'grid'});
  }
  else if ($(projectContent).css('display') === 'grid') {
    $(projectContent).css('display', 'none');
  }
}
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
