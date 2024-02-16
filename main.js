// SELECT ELEMENTS FIRST

const sideBar = document.querySelector(".links ul");
const menuBtn = document.querySelector(".menu");
const menuTop = document.querySelector(".top");
const menuMid = document.querySelector(".mid");
const menuBottom = document.querySelector(" .bottom");

// ADD FUNCTION AND EVENTS

menuBtn.addEventListener("click", openSideBar);

function openSideBar() {
    sideBar.classList.toggle("show-side-bar");
    if (sideBar.classList.contains("show-side-bar")) {
        menuTop.classList.add("show");
        menuMid.classList.add("hide");
        menuBottom.classList.add("show");
    } else {
        menuTop.classList.remove("show");
        menuMid.classList.remove("hide");
        menuBottom.classList.remove("show");
    };
};

// SLIDES FUNCTION 
// SELECT ELEMENTS

const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// SET VALUE TO COUNTER

let counter = 0;


// CREATE FUNCTIONS 

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

prevBtn.addEventListener("click", function () {
    counter--;
    getSlide();
});


nextBtn.addEventListener("click", function () {
    counter++;
    getSlide();
});
function getSlide() {
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    if (counter === slides.length -1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "flex";
    }
    if (counter !== 0) {
        prevBtn.style.display = "flex"
    } else {
         prevBtn.style.display = "none"
    }
   
};


// CREATE FUNCTION FOR QUESTION TEXT

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", function () {
        question.classList.toggle("show-reply");
    });
});

// CREATE FUNCTION FOR ANIMATION SECTIONS

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-sections")
        } else {
            entry.target.classList.remove("show-sections")
        };
    });
});

const sections = document.querySelectorAll(".hidden");

sections.forEach((section) => observer.observe(section));

// THIS IS FOR IDEA SECTION

const btns = document.querySelectorAll(".tab-btn");
const sectionIdea = document.querySelector(".section-idea");
const contents = document.querySelectorAll(".content");


sectionIdea.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove active class froM all btns 
        btns.forEach((btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        contents.forEach((content) => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});




























































































    





















   


























