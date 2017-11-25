// Function to add class after page load - I love kittypie <3
// window.onload = function animate() {


var x = document.getElementsByClassName("hero");
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "flex";

    setTimeout(carousel, 9000); // Change Interval
};


// };


// ================================================================
// Waypoints
// ================================================================


var waypoint1 = new Waypoint({
    element: document.getElementById('cd'),
    handler: function (direction) {
        if (direction === "down") {
            document.getElementById("content-text").classList.add('animated')
            document.getElementById("content-text").classList.add('fadeInRight')

            document.getElementById("content-header").classList.add('animated')
            document.getElementById("content-header").classList.add('fadeInLeft')

        } else {
            document.getElementById("igloo").classList.remove('animated')
            document.getElementById("igloo").classList.remove('fadeInUp')
        }
    },
    offset: "55%"
}, );

var waypoint2 = new Waypoint({
    element: document.getElementById('cd'),
    handler: function (direction) {
        if (direction === "up") {
            document.getElementById("content-text").classList.remove('animated')
            document.getElementById("content-text").classList.remove('fadeInRight')

            document.getElementById("content-header").classList.remove('animated')
            document.getElementById("content-header").classList.remove('fadeInLeft')

        }
        
    },
    offset: "90%"
}, );

var waypoint3 = new Waypoint({
    element: document.getElementById('cd'),
    handler: function (direction) {
        if (direction === "down") {
            document.getElementById("igloo").classList.add('animated')
            document.getElementById("igloo").classList.add('fadeInUp')
        }
        else {
            document.getElementById("tester").classList.remove('animated')
            document.getElementById("tester").classList.remove('fadeInUp')  
        }
    },
    offset: "10%"
}, );


var waypoint4 = new Waypoint({
    element: document.getElementById('handshake'),
    handler: function (direction) {
        if (direction === "down") {
            document.getElementById("tester").classList.add('animated')
            document.getElementById("tester").classList.add('fadeInUp')
        }
        else {
            console.log("up") // Use this to remove quote section   
        }
    },
    offset: "20%"
}, );


// =====================================================================
// GALLERY
// ====================================================================

function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }

  var sliderIndex = 1;
  showSlides(sliderIndex);
  
  function plusSlides(n) {
    showSlides(sliderIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(sliderIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
   
    if (n > slides.length) {sliderIndex = 1}
    if (n < 1) {sliderIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[sliderIndex-1].style.display = "flex";
    
  }

//   ================================================================