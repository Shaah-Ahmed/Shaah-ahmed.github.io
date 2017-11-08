
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
            document.getElementById("content-header").style.display = "flex";
            document.getElementById("content-text").style.display = "flex";
        } else {
            document.getElementById("igloo").style.display = "none";
        }
    },
    offset: "55%"
}, );

var waypoint2 = new Waypoint({
    element: document.getElementById('cd'),
    handler: function (direction) {
        if (direction === "up") {
            
            document.getElementById("content-header").style.display = "none";
            document.getElementById("content-text").style.display = "none";
        } 
    },
    offset: "90%"
}, );

var waypoint2 = new Waypoint({
    element: document.getElementById('cd'),
    handler: function (direction) {
        if (direction === "down") {
            document.getElementById("igloo").style.display = "flex";
        } 
    },
    offset: "10%"
}, );




// =====================================================================

