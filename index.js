const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
    mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
});


// Select carousel and items
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0; // Track the current slide

// Function to show the next slide
function showNextSlide() {
    // Remove the 'active' class from the current item
    items[currentIndex].classList.remove('active');

    // Update the current index
    currentIndex = (currentIndex + 1) % items.length;

    // Add the 'active' class to the new item
    items[currentIndex].classList.add('active');

    // Move the carousel
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 5 seconds
setInterval(showNextSlide, 5000);