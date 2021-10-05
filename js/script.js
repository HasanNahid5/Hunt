$(function () {
    'use strict'

    // banner slider

    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-arrow-left prevArr"></i>',
        nextArrow: '<i class="fas fa-arrow-right nextArr"></i>',
    });

    // portfolio slider

    $('.port_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // service slider

    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        prevArrow: '<i class="fas fa-chevron-up prev_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-down next_arr"></i>',

    });

// testimonial slider


$('.test_text_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.test_img_slider'
  });
  $('.test_img_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.test_text_slider',
    arrows:true,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    centerPadding: '0px',
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<i class="fas fa-chevron-up prev_arr"></i>',
    nextArrow: '<i class="fas fa-chevron-down next_arr"></i>',
  });
          

    //portfolio lightbox

    $('.venobox').venobox({
        border: '5px',
    });

})