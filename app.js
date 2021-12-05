// set copyright year
const copyrightYearUI = document.querySelector('.copyright-year');

const year = new Date().getFullYear();

copyrightYearUI.textContent = year;

// 4 smooth scrolling
// THIS ONE IS COPY FROM W3 SCHOOL WEB SITE

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// navigation links .active on scroll

const navigationLinks = document.querySelectorAll('nav a');

const sections = document.querySelectorAll("section");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    console.log(current); }
  }); 

  navigationLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    } 
    
});
}