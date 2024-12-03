function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  // Determine the current theme setting based on local storage and system preference
  if (localStorageTheme !== null) {
      return localStorageTheme;
  }

  if (systemSettingDark.matches) {
      return "dark";
  }

  return "light";
}

function updateButton({ buttonEl, isDark }) {
  // Update the button text and aria-label based on the current theme
  const newCta = isDark ? "Light" : "Dark";
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

function updateThemeOnHtmlEl({ theme }) {
  // Update the theme setting on the HTML tag
  document.querySelector("html").setAttribute("data-theme", theme);

  // Update image sources based on the current theme and language
  const currentLanguage = localStorage.getItem('language') || 'en';
  const isDarkTheme = theme === "dark";
  const imageElements = document.querySelectorAll('[data-img-en]');

  imageElements.forEach(img => {
      const darkAttr = isDarkTheme ? `data-img-dark-${currentLanguage}` : `data-img-${currentLanguage}`;
      img.src = img.getAttribute(darkAttr);
  });
}

// On page load:
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// Determine the current theme setting
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

// Update the theme setting and button text according to current settings
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

// Add an event listener to toggle the theme on button click
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});
