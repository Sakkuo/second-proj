const slides = document.querySelectorAll(".info__slides img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slideCount = document.querySelector(".slide-count");

let currentSlide = 0;
slideCount.textContent = `0${currentSlide + 1}`;

for (let i = 1; i < slides.length; i++) {
  slides[i].style.display = "none"
}

const showSlide = (n) => {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[currentSlide].style.display = "block";
  slideCount.textContent = `0${currentSlide + 1}`;
}


prevButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});




