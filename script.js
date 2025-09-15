// Initialize Animate On Scroll (AOS)
AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
});

// Navbar scroll effect
document.addEventListener('scroll', () => {
    const nav = document.querySelector('#main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Gallery Modal Script
const galleryModal = document.getElementById('galleryModal');
galleryModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const triggerElement = event.relatedTarget;
  
  // Extract info from data-* attributes
  const imageSrc = triggerElement.getAttribute('src');
  const imageAlt = triggerElement.getAttribute('alt');
  
  // Update the modal's content.
  const modalImage = galleryModal.querySelector('#modalImage');
  const modalCaption = galleryModal.querySelector('#modalCaption');
  
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  modalCaption.textContent = imageAlt;
});