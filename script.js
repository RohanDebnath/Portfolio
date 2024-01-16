// Sticky Navbar Coding 
window.onscroll = () => {
    // console.log('Scroll event triggered');
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
