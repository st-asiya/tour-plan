const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  
  // Add effect
  effect: "fade",

  // Keyboard control parameters
  keyboard: {
    pageUpDown: true,
  },

});