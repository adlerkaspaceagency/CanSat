const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Event listener to open lightbox when an image is clicked
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        showLightbox(e.target.src);
    }
});

// Show lightbox with the selected image
function showLightbox(imgSrc) {
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
}

// Close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Filter gallery images based on category
function filterImages(category) {
    const images = document.querySelectorAll('.gallery img');

    images.forEach((img) => {
        if (category === 'all' || img.dataset.category === category) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}
