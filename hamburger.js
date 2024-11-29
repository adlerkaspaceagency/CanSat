function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const cross = document.querySelector('.cross');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
    cross.classList.toggle('active'); // Toggle visibility of cross icon
}