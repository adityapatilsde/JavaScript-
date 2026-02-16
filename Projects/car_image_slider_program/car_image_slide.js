// IMAGE SLIDER PROGRAMM

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let interValId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider(){
       
    if(slides.length > 0){  
     slides[slideIndex].classList.add("displaySlide");
   interValId =  setInterval(nextSlide, 5000);
    }

}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;

    }
    else if(index < 0){
        slideIndex = slides.length -1 ;

    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(interValId);
    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide(){
   slideIndex++;
   showSlide(slideIndex);
}

//CODE 11

// Parent class
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        console.log(this.title + " by " + this.author);
    }
}

// Child class
class EBook extends Book {
    constructor(title, author, fileSize) {
        super(title, author);   // call parent constructor
        this.fileSize = fileSize;
    }

    download() {
        console.log("Downloading " + this.title + 
                    " (" + this.fileSize + "MB)");
    }
}

// Create object
let b1 = new EBook("JavaScript Basics", "Aditya", 5);

b1.getDetails();   // inherited method
b1.download();     // child method
