const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const servicesOpenButton = document.querySelector("#services-open-button");
const servicesCloseButton = document.querySelector("#services-close-button");

servicesOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
servicesCloseButton.addEventListener("click", () => servicesOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => servicesOpenButton.click());
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//Load more About Section

function toggleContent() {
  console.log("TEST");
  
  var extraContent = document.getElementById("extraContent");
  var button = document.querySelector(".loadMore");

  if (extraContent.style.display === "none" || extraContent.style.display === "") {
      extraContent.style.display = "block";
      button.style.display = "none";
  }
}

//alert message for email form
function handleSubmit(event) {
  alert("Thank you! Your message has been sent.");
  // The form will still submit after this alert
}
