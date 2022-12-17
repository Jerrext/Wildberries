const main=document.getElementById('main')

const slayder= document.createElement('div')
slayder.classList.add("adaptivn-slayder")
main.appendChild(slayder)

const prev = document.createElement('a')
prev.classList.add('prev')
prev.innerText="❮"
slayder.appendChild(prev)

const next = document.createElement('a')
next.classList.add('next')
next.innerText="❯"
slayder.appendChild(next)


const kadr= document.createElement("div")
kadr.classList.add("kadr")
main.appendChild(kadr)


const images = [
'https://images.wbstatic.net/bners1/big_new__22.jpg',
    'https://images.wbstatic.net/bners1/big_brand_17_12_22.jpg',
    'https://images.wbstatic.net/bners1/big_cosmetics1.jpg',
    'https://images.wbstatic.net/bners1/big_toys.jpg',
    'https://images.wbstatic.net/bners1/big_inditexx_14_11_22.jpg',
];

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;

    const div = document.createElement('div');
    div.className = 'parag';
    div.append(img);

    slayder.append(div);
});

const span =[1,2,3,4,5];

span.forEach(src => {

    const spans = document.createElement('span');
    spans.className = 'point-kadr';
    kadr.appendChild(spans)

});


let timer = 0;
makeTimer(); 
function makeTimer(){
   clearInterval(timer) 
   timer = setInterval(function(){
     slideIndex++;
     showSlides(slideIndex);
   },2000);
 }

 let slideIndex = 1;
 showSlides(slideIndex);

next.addEventListener('onclick', function () {
  showSlides(slideIndex += 1);
  makeTimer();
})

prev.addEventListener('onclick',function(){
    showSlides(slideIndex -= 1);
    makeTimer();  
})

span.addEventListener('onclick',function(n) {
  showSlides(slideIndex = n);
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
  dots[slideIndex - 1].className += " deystvuyus";
}
