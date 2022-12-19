$(function () {
  const drOpen = document.querySelector('#open');
  const drClose = document.querySelector('#close');

  drOpen.addEventListener('click', () => {
    $('#dr').addClass('drawer-active');
    $("#dr").removeClass("drawer");
    $("body").addClass("ovf-hdn");
  })

  drClose.addEventListener('click', () => {
    $("#dr").addClass("drawer");
    $("#dr").removeClass("drawer-active");
    $("body").removeClass("ovf-hdn");
  })

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

  $('a[href^="#"').on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top-50,
      },
      {
        duration: 600, // по умолчанию «400»
        easing: "swing", // по умолчанию «swing»
      }
    );

    $("#dr").addClass("drawer");
    $("#dr").removeClass("drawer-active");
    $("body").removeClass("ovf-hdn");
    
    return false;
  });

  let button = $('.up-btn');
    
  $(window).on('scroll', () => {
  if ($(this).scrollTop() >= 500){
     button.fadeIn();
  } else {
     button.fadeOut();
    }
  });
  
});

//