document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Add pulse animation to main CTA buttons
    const mainCtaButtons = document.querySelectorAll('a[href="#offer"]');
    mainCtaButtons.forEach(button => {
        button.classList.add('pulse');
    });

    // Track button clicks
    document.querySelectorAll('a').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);
            // Here you would typically send this data to your analytics platform
        });
    });

    // Update year in footer if needed
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});