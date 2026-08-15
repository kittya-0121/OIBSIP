alert("Welcome to Anushka's Portfolio!");
document.querySelector(".btn").addEventListener("click", function() {
    alert("Welcome to my About section!");
});
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Opening " + this.textContent + " section");
    });
});
document.querySelectorAll(".links a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Opening: " + this.textContent.trim());
    });
});
document.querySelector("footer p").innerHTML =
    "© " + new Date().getFullYear() + " Anushka Nale | Portfolio";