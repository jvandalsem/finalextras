// Only release Modal on first email click
$('#caretDown').one('click', function(){
  $('#emailModal').css('display', 'block');
  $("#exitModal").click(function() {
    $('#emailModal').css('display', 'none');
  })
})

// Email dropdown
var emailExpand = $('#caretDown')[0]
emailExpand.addEventListener('click', emailDropdown)
function emailDropdown(){
  if ($('#emailDropdown').css('display') === 'none'){
    $('#emailDropdown').animate({height: 'toggle'}, 'slow')
    $('#emailDropdown').css({'display': 'grid'});
    $('#emailDropdown').css({'border-bottom': '1px solid #bbb'});
  }
  else{
    $('#emailDropdown').animate({height: 'toggle'}, 'slow')
  }
}

// Email form validation
function validateForm() {
  var senderAddress = document.forms["emailForm"]["_replyto"].value;
  var emailSubject = document.forms['emailForm']['subject'].value;
  if (!senderAddress.includes('umich.edu')){
    alert("Please use a valid University of Michigan email address.");
    return false;
  }
  if (emailSubject.length >= 80){
    alert("Please keep the email subject to less than 80 characters.")
    return false;
  }
  else{
    return true;
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
