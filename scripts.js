document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.vertical-menu a');

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Show the home section by default
    showSection('home');
});

function toggleMenu() {
    const menu = document.querySelector('.vertical-menu');
    const mainContent = document.querySelectorAll('.content-section');
    const footerLeft = document.querySelector('.footer-left');
    const footerRight = document.querySelector('.footer-right');
    menu.classList.toggle('expanded');

    if (menu.classList.contains('expanded')) {
        mainContent.forEach(section => section.style.marginLeft = '200px');
        footerLeft.style.marginLeft = '200px';
        footerRight.style.justifyContent = 'space-between'; /* Align social links to the left and right */
    } else {
        mainContent.forEach(section => section.style.marginLeft = '80px');
        footerLeft.style.marginLeft = '80px';
        footerRight.style.justifyContent = 'flex-start'; /* Align social links to the start */
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
