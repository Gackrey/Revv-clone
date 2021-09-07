// Jquery for moving carousel 

$(".owl-one").owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    360: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".owl-two").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    360: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-three").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  dots: false,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$(".owl-four").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
