// 1. Matn yozilish effekti (Typed.js)
const typed = new Typed('.typing-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Freelancer'],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});

// 2. Tungi/Kunduzgi rejim (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// 3. Tilt effekti (VanillaTilt allaqachon HTMLda data-tilt orqali ishlaydi)
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});
