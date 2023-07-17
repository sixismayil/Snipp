$(".owl-carousel").owlCarousel({
  nav: true,
  //   loop: true,
  //   navText: [
  //     "<div class='nav-button owl-prev'>‹</div>",
  //     "<div class='nav-button owl-next'>›</div>",
  //   ],
  autoPlay: 3000,
  items: 1, // THIS IS IMPORTANT
  //   responsive: {
  //     480: { items: 1 }, // from zero to 480 screen width 4 items
  //     768: { items: 2 }, // from 480 screen widthto 768 6 items
  //     1024: {
  //       items: 3, // from 768 screen width to 1024 8 items
  //     },
  //   },
  navigationText: [
    "<span class='ti-arrow-left'></span>",
    "<span class='ti-arrow-right'></span>",
  ],
});
