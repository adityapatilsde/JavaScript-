const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
      //  Toggle mobile menu visibility
      document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked on the site

menuCloseButton.addEventListener("click" , () => menuOpenButton.click
());

// Initialize Swiper
const swiper = new Swiper('.swiper-wrapper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
