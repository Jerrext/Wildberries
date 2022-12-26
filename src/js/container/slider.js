import {images} from "../store.js"

const main=document.getElementById('main')

const sliderSection = document.createElement("section")
sliderSection.classList.add("slider")
main.appendChild(sliderSection)

const sliderContainer = document.createElement("div")
sliderContainer.classList.add("container")
sliderSection.appendChild(sliderContainer)

const slayder= document.createElement('div')
slayder.classList.add("adaptivn-slayder")
sliderContainer.appendChild(slayder)

const prev = document.createElement('button')
prev.classList.add('prev')
prev.innerText="❮"
slayder.appendChild(prev)

const next = document.createElement('button')
next.classList.add('next')
next.innerText="❯"
slayder.appendChild(next)

const kadr= document.createElement("div")
kadr.classList.add("kadr")
sliderContainer.appendChild(kadr)

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;

    const div = document.createElement('div');
    div.className = 'parag';
    div.append(img);

    slayder.append(div);
});

const span =[1,2,3,4,5];

for (let i = 0; i < span.length; i++) {
  const spans = document.createElement('span');
  spans.className = 'point-kadr';
  kadr.appendChild(spans)
  spans.addEventListener("click", (n) => {
    slideIndex = i + 1
    showSlides(slideIndex);
  })
}
let timer = 0;
makeTimer(); 
function makeTimer(){
   clearInterval(timer) 
   timer = setInterval(function (){
     slideIndex++;
     showSlides(slideIndex);
   },3000);
 }

 let slideIndex = 1;
 showSlides(slideIndex);

next.addEventListener('click', function () {
  showSlides(slideIndex += 1);
  makeTimer();
})

prev.addEventListener('click',function(){
    showSlides(slideIndex -= 1);
    makeTimer();  
})

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
  dots[slideIndex - 1].classList.add("deystvuyus"); 
}
let hover = document.querySelector(".adaptivn-slayder");

hover.addEventListener("mouseover",function(){
  window.clearInterval(timer);
}); 
hover.addEventListener("mouseout",function(){
  makeTimer()
});
