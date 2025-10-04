// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider
    initSlider();
    
    // Initialize video controls
    initVideoControls();
    
    // Set up WhatsApp button
    setupWhatsAppButton();
});

// Slider functionality
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Function to show a specific slide
    function showSlide(n) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Calculate the actual slide index (handles wrapping)
        currentSlide = (n + slideCount) % slideCount;
        
        // Add active class to current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Next slide function
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Previous slide function
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Event listeners for navigation buttons
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto slide change (every 5 seconds)
    setInterval(nextSlide, 5000);
}

// Video controls functionality
function initVideoControls() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        const container = video.closest('.video-container');
        const playPauseBtn = container ? container.querySelector('#playPauseBtn') : null;
        const expandBtn = container ? container.querySelector('#expandBtn') : null;
        
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', function() {
                if (video.paused) {
                    video.play();
                    this.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    video.pause();
                    this.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
        }
        
        if (expandBtn) {
            expandBtn.addEventListener('click', function() {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.mozRequestFullScreen) { /* Firefox */
                    video.mozRequestFullScreen();
                } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) { /* IE/Edge */
                    video.msRequestFullscreen();
                }
            });
        }
        
        // Update play/pause button when video ends
        video.addEventListener('ended', function() {
            if (playPauseBtn) {
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    });
}

// WhatsApp button setup
function setupWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    if (whatsappBtn) {
        // Add click event to open WhatsApp with predefined message
        whatsappBtn.addEventListener('click', function(e) {
            const message = "Hello, I'm interested in Pyramids Apartments. Can you provide more information?";
            const encodedMessage = encodeURIComponent(message);
            this.href = `https://wa.me/2348037965233?text=${encodedMessage}`;
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});