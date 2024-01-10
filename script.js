let menu = document.querySelector('#menu-icon');
let navlist =document.querySelector('.navlistt');

menu.onclick =() => {
   menu.classList.toggle('bx-x');
   navlist.classList.toggle('open');
};
const sr = ScrollReveal({
   distance : '65px',
   duration: 2600,
   delay: 450,
   reset: true
});
sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});

$(document).ready(function() {
   // Show and animate the logo on page load
   $(".logo").slideDown(1000); // Adjust animation duration as needed
 });