let toggleBtn = document.querySelector('.js-nav-open');
let closeBtn = document.querySelector('.js-nav-close');
let nav = document.querySelector('.js-nav');

toggleBtn.addEventListener('click', function() {
    nav.classList.add('active');
    closeBtn.classList.add('active');
    this.classList.add('active');
    this.setAttribute("aria-label", "open menu");
    this.setAttribute("aria-expanded", "false");
});
closeBtn.addEventListener('click', function() {
    nav.classList.remove('active');
    closeBtn.classList.remove('active');
    toggleBtn.classList.remove('active');
    this.setAttribute("aria-expanded", "true");
    this.setAttribute("aria-label", "Close menu");
});