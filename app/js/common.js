'use strict';

(function() {

	let slider = document.querySelector('.testimonials__slider');
  let sliderDots = slider.querySelector('.testimonials__dots');
  let defaultSliderIndex = 0;

	function removeActiveSlide() {
    let slides = slider.querySelectorAll('.testimonials__text');
    for (let value of slides){
      if (value.classList.contains('testimonials__text--show')){
        value.classList.remove('testimonials__text--show')
      }
    }
  }

  function removeDot() {
    let dots = slider.querySelectorAll('.testimonials__dot');
    for (let value of dots){
      if(value.classList.contains('testimonials__dot--active')){
        value.classList.remove('testimonials__dot--active');
      }
    }
  }
  
  function findActiveIndex(){
	  let dots = slider.querySelectorAll('.testimonials__dot');
    dots.forEach(function (item,i) {
      if(item.classList.contains('testimonials__dot--active')){
        defaultSliderIndex = i;
      }
    })
  }

  function showSlide(index){
    let slide = slider.querySelectorAll('.testimonials__text')[index];
    slide.classList.add('testimonials__text--show');
  }

  sliderDots.addEventListener('click',function (event) {
    let target = event.target;
    if(target.classList.contains('testimonials__dot')){
      removeDot();
      target.classList.add('testimonials__dot--active');
      findActiveIndex();
      removeActiveSlide();
      showSlide(defaultSliderIndex);
    }
  });
})();
