window.onload = function() {
    // Apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.querySelector("html").setAttribute("data-theme", savedTheme);

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const themeButton = document.querySelector("[data-theme-toggle]");
        if (themeButton) themeButton.innerText = "Light";
    }

    // Apply saved language
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    // Update images for initial theme
    updateThemeOnHtmlEl({ theme: savedTheme });
};

function setLanguage(language) {
    // Update text content for elements with language attributes
    const textElements = document.querySelectorAll('[data-lang-en]');
    textElements.forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${language}`);
    });

    // Update image sources based on the language and theme
    const imageElements = document.querySelectorAll('[data-img-en]');
    const isDarkTheme = document.querySelector("html").getAttribute("data-theme") === "dark";

    imageElements.forEach(img => {
        const baseSrc = img.getAttribute(`data-img-${language}`);
        if (isDarkTheme) {
            // Replace filename for dark mode
            img.src = baseSrc.replace(/(\.png)$/, '-dark$1');
        } else {
            img.src = baseSrc;
        }
    });

    // Save the selected language to localStorage
    localStorage.setItem('language', language);
}
