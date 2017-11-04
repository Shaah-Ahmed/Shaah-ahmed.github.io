// Page load event handler and scroll position finder enabler 

window.addEventListener("DOMContentLoaded", false);


// Function to add class after page load - I love kittypie <3
window.onload = function animate() {


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

        setTimeout(carousel, 8000); // Change Interval
    };


};