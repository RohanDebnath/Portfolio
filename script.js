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
document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.getElementById('cursor');

    window.addEventListener('scroll', function () {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const scrollPercentage = (scrolled / scrollHeight) * 100;

        updateCursor(scrollPercentage);
    });

    function updateCursor(percentage) {
        cursor.style.display = 'block';
        cursor.textContent = Math.round(percentage) + '%';
        cursor.style.top = `${percentage - 20}%`; // Adjust the positioning as needed
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const customCursor = document.getElementById('custom-cursor');

//     document.addEventListener('mousemove', function (e) {
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;

//         customCursor.style.display = 'block';
//         customCursor.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px)`;
//     });

//     window.addEventListener('scroll', function () {
//         const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//         const scrolled = window.scrollY;
//         const scrollPercentage = (scrolled / scrollHeight) * 100;

//         updateCursorSize(scrollPercentage);
//     });

//     function updateCursorSize(percentage) {
//         const cursorSize = Math.min(10 + percentage, 100); // Size change hoache akhane
//         customCursor.style.width = `${cursorSize}px`;
//         customCursor.style.height = `${cursorSize}px`;
//     }
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const customCursor = document.getElementById('custom-cursor');

//     document.addEventListener('mousemove', function (e) {
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;

//         customCursor.style.display = 'block';
//         customCursor.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px)`;
//     });

//     window.addEventListener('scroll', function () {
//         const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//         const scrolled = window.scrollY;
//         const scrollPercentage = (scrolled / scrollHeight) * 100;

//         updateCursorColor(scrollPercentage);
//     });

//     function updateCursorColor(percentage) {
//         const hue = (percentage / 100) * 120; // Adjust the maximum hue value as needed
//         customCursor.style.border = `2px solid hsl(${hue}, 100%, 50%)`;
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        customCursor.style.display = 'block';
        customCursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
    });

    window.addEventListener('scroll', function () {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const scrollPercentage = (scrolled / scrollHeight) * 50;

        updateCursorShape(scrollPercentage);
    });

    function updateCursorShape(percentage) {
        const circleRadius = Math.min(percentage, 50); // Adjust the maximum radius as needed
        const cursorSize = 10 + circleRadius; // Adjust the initial size as needed
        customCursor.style.width = `${cursorSize}px`;
        customCursor.style.height = `${cursorSize}px`;
    }
});
