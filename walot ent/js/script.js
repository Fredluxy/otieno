// Simple JavaScript for interactivity

// Alert on form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Smooth scrolling for navigation (optional)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // For same page anchors, but since pages are separate, maybe not needed
        // This is basic, can be enhanced
    });
});

// Add some dynamic content or effects if needed
console.log('Walot Enterprise website loaded successfully!');

function showMessage(){
    document.getElementById("demo").innerHTML =
    "Walot Enterprise is trusted for quality, reliability, and fast service delivery!";
}
function showWelcome(){
    document.getElementById("welcomeMsg").innerHTML =
    "Welcome to Walot Enterprise! We are ready to power your world ⚡";
}
<script src="js/script.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(showSlide, 3000);
});
</script>