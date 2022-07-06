const preloader = document.querySelector(".preloader")
window.addEventListener('load', (event) => {
    setTimeout(() => {
        preloader.classList.add('fullyloaded')
    }, 2500);
});