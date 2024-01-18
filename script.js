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
document.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    
    document.getElementById('progress-bar').style.width = scrolled + '%';
});

// Scroll Section Active Link 

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header .navbar a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');
let header = document.querySelector('header');

window.onscroll = () => {
    let top = window.scrollY;

    if (top > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Menu icon Navbar

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Remove menu icon navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// Dark Mode

let darkModeIcon=document.querySelector('#darkMode-icon');
darkModeIcon.onclick=()=>{
    darkModeIcon.classList.toggle('bx-sun')
    document.body.classList.toggle('dark-mode');
}

// Scoll Reveal
ScrollReveal({ 
    reset: true ,
    distence:'80px',
    duration:2000,
    delay:200
});

// ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
// ScrollReveal().reveal('.home-img img',{origin:'bottom'});