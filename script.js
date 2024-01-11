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
sr.reveal('.hero-text',{delay:300, origin:'left'});
sr.reveal('.hero-img',{delay:300, origin:'right '});

$(document).ready(function() {
   // Show and animate the logo on page load
   $(".logo").slideDown(1000); // Adjust animation duration as needed
 });

 function playSubmitSound() {
   var audio = document.getElementById("submitSound");
   audio.play();
}
