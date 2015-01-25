$(document).ready(function() {
  $('.gallery-wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<i class='icon-left gallery-arrow'></i>",
    nextArrow: "<i class='icon-right gallery-arrow'></i>"
  });
});