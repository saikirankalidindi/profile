var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Data Scientist')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Python Developer')
    .pauseFor(2500)
    .start();
  
// After your content is fully loaded, hide the loading overlay
window.addEventListener('load', function () {
    var loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function () {
    var submitBtn = document.getElementById("submitBtn");
    var toast = document.getElementById("toast");

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission for demonstration purposes

        // Display the toast message
        toast.style.visibility = "visible";
        toast.style.opacity = "1";

        // Hide the toast after a delay
        setTimeout(function () {
            toast.style.opacity = "0";
            toast.style.visibility = "hidden";
        }, 3000); // Adjust the delay as needed (in milliseconds)
    });
});
