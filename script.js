// Welcome message
// Show the button when scrolling

let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Scroll back to top

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}