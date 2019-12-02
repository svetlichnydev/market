$(function () {

  var mixer = mixitup('.products__inner');

  $(".feature__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev">left</button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next">right</button>',
  });

  
  $(".followers__inner").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev">left</button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next">right</button>',
  });

  $(".rate").rateYo({
    starWidth: "16px",
    readOnly: true,
    rating: 4.5,
    spacing: "4px"
  });
  $(".rate-small").rateYo({
    starWidth: "12px",
    readOnly: true,
    rating: 4.5,
    spacing: "4px"
  });
});