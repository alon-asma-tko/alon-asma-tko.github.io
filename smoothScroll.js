//smoothScroll.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*Reference:
Stack Overflow. (2011, October 10). Smooth scrolling when clicking an anchor link [Online forum post]. 
Stack Overflow. https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
*/