$(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  setTimeout(function(){
    $('header,section,footer').addClass('block-visible');
  }, 200);
  
  $(".main-slider").slick({
    slidesToShow: 3,
    infinite: true,
    dots: true,
    arrows: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "90px",
  });
});
