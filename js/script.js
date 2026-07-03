// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {
    menuBtn.onclick = () => {
        navbar.classList.toggle("active");
    };
}

// ===============================
// Close Mobile Menu on Link Click
// ===============================

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// ===============================
// Dark / Light Mode
// ===============================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    themeBtn.onclick = () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            themeBtn.classList.remove("fa-moon");
            themeBtn.classList.add("fa-sun");

        }else{

            themeBtn.classList.remove("fa-sun");
            themeBtn.classList.add("fa-moon");

        }

    }

}

// ===============================
// Sticky Header
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }else{

        header.style.boxShadow = "none";

    }

});

// ===============================
// Typing Effect
// ===============================

const typing = document.getElementById("typing");

const words = [
    "BCA Graduate",
    "Web Developer",
    "Frontend Developer",
    "JavaScript Learner",
    "Future Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    if(!typing) return;

    const current = words[wordIndex];

    if(isDeleting){

        typing.textContent = current.substring(0,charIndex--);

    }else{

        typing.textContent = current.substring(0,charIndex++);

    }

    let speed = 120;

    if(isDeleting) speed = 70;

    if(!isDeleting && charIndex === current.length){

        speed = 1500;
        isDeleting = true;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;
        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect, speed);

}

typeEffect();
// ==========================================
// Save Theme Preference
// ==========================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");

    if (themeBtn) {
        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");
    }
}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

    });

}

// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealElements = document.querySelectorAll(
".skill-box,.service-box,.project-card,.timeline-box,.certificate-box,.info-box"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach((element)=>{

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            element.style.opacity="1";
            element.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach((element)=>{

    element.style.opacity="0";
    element.style.transform="translateY(40px)";
    element.style.transition=".7s";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================================
// Back To Top Button
// ==========================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.background = "#00d9ff";
topButton.style.color = "#000";
topButton.style.fontSize = "22px";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ==========================================
// Active Navigation
// ==========================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link=>{

    if(link.href===window.location.href){

        link.classList.add("active");

    }

});

// ==========================================
// Contact Form
// ==========================================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been submitted.");

form.reset();

});

}

console.log("Portfolio Loaded Successfully 🚀");