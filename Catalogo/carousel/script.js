$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<i class=""></i>',
  prevArrow: '<i class=""></i>',
})

$(document).ready(() => {

  $('#hamburger-menu').click(() => {

      $('#hamburger-menu').toggleClass('active')

      $('#nav-menu').toggleClass('active')

  })