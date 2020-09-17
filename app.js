// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', ()=>{
    // old method -> ok can use simple and easy but not dynamic
    // linksContainer.classList.toggle('show-links')

    // get the height of the parent div, links-container
    const containerHeight = linksContainer.getBoundingClientRect().height;

    // get height of links in links-container
    const linksHeight = links.getBoundingClientRect().height;

    // now set height of links to the parent div if links-container height =0
    // default state
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }

    else{
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
const navBar = document.getElementById('nav');
const topLinkButton = document.querySelector('.top-link');

// this is a window event
window.addEventListener('scroll', () => {
    const navBarHeight = navBar.getBoundingClientRect().height;
    const verticalScrollHeight = window.pageYOffset;

    if (verticalScrollHeight > navBarHeight) {
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }

    if (verticalScrollHeight > 500) {
        topLinkButton.classList.add('show-link');
    } else {
        topLinkButton.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
