
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

prev.onclick = () => {minusSlide()}
next.onclick = () => (plusSlide())

let slideIndex = 1;

showSlides(slideIndex);




function plusSlide() {

  showSlides(slideIndex += 1);

}




function minusSlide() {

  showSlides(slideIndex -= 1);  

}




function currentSlide(n) {

  showSlides(slideIndex = n);

}




function showSlides(n) {

  let i;

  let slides = document.getElementsByClassName("parag");

  let dots = document.getElementsByClassName("point-kadr");

  if (n > slides.length) {

  slideIndex = 1

  }

  if (n < 1) {

  slideIndex = slides.length

  }

  for (i = 0; i < slides.length; i++) {

  slides[i].style.display = "none";

  }

  for (i = 0; i < dots.length; i++) {

  dots[i].className = dots[i].className.replace("deystvuyus", "");

  }

  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " deystvuyus";

}