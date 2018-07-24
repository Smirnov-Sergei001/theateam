var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;


function nextSlide() {
  goToSlide(currentSlide+1);
 }
 function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
 }
  var next = document.getElementById('next');
  next.onclick = function() {

    nextSlide();
   };
 function goToRoom(){
  slides[currentSlide].className = 'slide';
  currentSlide =1;
  slides[currentSlide].className = 'slide showing';
 
 }
 var room = document.getElementById('room');
 room.onclick = function(){
   goToRoom();
 };
 
 function goToMobile(){
  slides[currentSlide].className = 'slide';
  currentSlide =2;
  slides[currentSlide].className = 'slide showing';
 }
  var mobile = document.getElementById('mobile');
  mobile.onclick = function(){
    goToMobile();
  }

  function goToOriginal(){
    slides[currentSlide].className = 'slide';
    currentSlide =0;
    slides[currentSlide].className = 'slide showing';
  }
  var original = document.getElementById('original');
  original.onclick = function(){
    goToOriginal();
  }