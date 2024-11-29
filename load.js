window.onload = function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById("themeButton").innerText = "Light"; 
    }
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
    
    // Save the selected language to localStorage
    localStorage.setItem('language', language);
}