// toggle
let menutoggle = document.querySelector(".toggle");
menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
};

// counter
$(".counter").counterUp({ time: 2000 });

// carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:500,

  });
});

// animation
new WOW().init();

var rellax = new Rellax('.rellax', {
  breakpoints:[320, 768, 1201]
});

//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 