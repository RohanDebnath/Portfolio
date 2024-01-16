// Sticky Navbar Coding 
window.onscroll = () => {
    // console.log('Scroll event triggered');
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

document.querySelectorAll('.imgBx').forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
        console.log('Active class toggled:', element.classList.contains('active'));
    });
});
