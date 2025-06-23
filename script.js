document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Popup functionality
    // We specifically target buttons with 'cta-button' for opening the popup.
    // The main contact form's submit button does NOT have 'cta-button' anymore.
    const popupOpeningButtons = document.querySelectorAll('.cta-button');
    const popup = document.getElementById('cta-popup');
    const closeButton = document.querySelector('.close-button');
    const popupForm = document.getElementById('popup-form');

    popupOpeningButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (popup) popup.style.display = 'block';
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            if (popup) popup.style.display = 'none';
        });
    }

    // Close popup if user clicks outside of the popup content
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            if (popup) popup.style.display = 'none';
        }
    });

    if (popupForm) {
        popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission (e.g., send data to a server or display a message)
            alert('Form submitted! (This is a placeholder)');
            // You would typically use FormData or similar to get form values:
            // const formData = new FormData(popupForm);
            // const name = formData.get('name');
            // console.log('Form data:', Object.fromEntries(formData));
            if (popup) popup.style.display = 'none';
            popupForm.reset();
        });
    }

    // Contact Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle contact form submission
            alert('Message sent! (This is a placeholder)');
            // Example:
            // const formData = new FormData(contactForm);
            // console.log('Contact form data:', Object.fromEntries(formData));
            contactForm.reset();
        });
    }
});
