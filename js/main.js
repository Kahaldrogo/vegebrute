

/* first slider */
//.not(".slick-initialized")
$('.slider-one').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next"
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })