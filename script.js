// Toggle Menu for Mobile
const menuIcon = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// Active Scroll Links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Simple Typing Effect
const typeText = document.querySelector('.typing-text');
const textLoad = () => {
    setTimeout(() => {
        typeText.textContent = "Full Stack Developer";
    }, 0);
    setTimeout(() => {
        typeText.textContent = "CS Student";
    }, 4000);
    setTimeout(() => {
        typeText.textContent = "Problem Solver";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);