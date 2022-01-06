document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const navBrand = document.querySelector(".navbar-brand");
    const navLink = document.querySelectorAll(".nav-link");
    const toggle = document.querySelector(".navbar-toggler");
    const heightTop = window.pageYOffset;

    if (heightTop >= 70) {
      nav.classList.add("bg-white");
      nav.classList.add("shadow");
      navBrand.classList.remove("text-white");
      navLink.forEach((el) => {
        el.classList.remove("text-white");
      });
      toggle.classList.remove("text-white");
      toggle.classList.add("text-dark");
    } else {
      nav.classList.remove("bg-white");
      nav.classList.remove("shadow");
      navBrand.classList.add("text-white");
      navLink.forEach((el) => {
        el.classList.add("text-white");
      });
      toggle.classList.add("text-white");
      toggle.classList.remove("text-dark");
    }
  });

  // slick carousel
  $(".product-img-list").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 300,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
