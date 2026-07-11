// Welcome message
window.onload = function () {
    console.log("Welcome to Kalro Farm Website!");
};

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Button click message
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", function () {
        alert("Welcome to Kalro Farm! Explore our livestock, poultry, and farming services.");
    });
}