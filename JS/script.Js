// Image Slider
const portfolioImages = document.querySelectorAll('.portfolio-box img');
let currentIndex = 0;

// Set initial state
portfolioImages.forEach((img, index) => {
    img.style.opacity = index === currentIndex ? 1 : 0;
    img.style.transition = 'opacity 1s'; // Smooth transition
});

function slideImages() {
    portfolioImages[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % portfolioImages.length;
    portfolioImages[currentIndex].style.opacity = 1;
}

setInterval(slideImages, 5000); // Auto-slide every 5 seconds

// Contact Form Handling
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Data processing (e.g., send data to an API or save to a database)
    // Example: simulate data processing with a timeout
    setTimeout(() => {
        alert('Data submitted successfully!');
        contactForm.reset(); // Clear the form
    }, 1000);
});
