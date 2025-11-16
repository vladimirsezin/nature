// Бургер меню
const burger = document.querySelector('.navbar__burger');
const navLinks = document.querySelector('.navbar__links');

burger.addEventListener('click', function() {
    
    this.classList.toggle('active');

    navLinks.classList.toggle('active');

    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});


document.querySelectorAll('.nav__link a').forEach(link => {
    link.addEventListener('click', function() {
      
        burger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = ''; 
    });
});


window.addEventListener('resize', function() {
    if (window.innerWidth > 640) {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});
