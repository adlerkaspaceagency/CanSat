window.onload = function() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
};

function setLanguage(language) {
    // Update text content for elements with language attributes
    const textElements = document.querySelectorAll('[data-lang-en]');
    textElements.forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${language}`);
    });
    
    // Update image sources for elements with image attributes
    const imageElements = document.querySelectorAll('[data-img-en]');
    imageElements.forEach(img => {
        img.src = img.getAttribute(`data-img-${language}`);
    });

    // Update href attributes for elements with href attributes
    const linkElements = document.querySelectorAll('[data-href-en]');
    linkElements.forEach(link => {
        link.href = link.getAttribute(`data-href-${language}`);
    });
    
    // Save the selected language to localStorage
    localStorage.setItem('language', language);
}
