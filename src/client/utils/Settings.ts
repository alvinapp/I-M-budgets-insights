export const sliderSettings = {
  mobileFirst: true,
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3,
  speed: 300,
  slidesToScroll: 1,
  initialSlide: 0,
  swipe: true,
  swipeToSlide: true,
  className: "account_slider",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
      },
    },
  ],
};
