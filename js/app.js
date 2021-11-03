/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll("section");
const sectionsCount = allSections.length;
const navBar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}


function addSections() {
    var fragment = document.createDocumentFragment();

    for (let section of allSections) {

        let sectionName = section.getAttribute("data-nav");
        let newNavTab = document.createElement("li");
        newNavTab.innerHTML = sectionName;
        newNavTab.addEventListener("click", () => {
            section.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        });
        navBar.appendChild(newNavTab);
        fragment.appendChild(navBar);

    }
    fragment.appendChild(navBar);

    document.body.appendChild(fragment);
}

// Set sections as active

function observingCallback(allSections) {

    // allSections.forEach(section => {
    //     if (section.classList.contains("your-active-class")) {
    //         section.classList.remove("your-active-class");
    //     }
    // });

    allSections.forEach(section => {
        if (section.isIntersecting) {
            // active section 
            let activeSection = section.target.getAttribute("data-nav");
            activeSection.target.classList.add("your-active-class");
        }
    });
}


let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(observingCallback, options);

allSections.forEach((section) => {
    observer.observe(section);
});