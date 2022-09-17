$('.header__menu-button').click(() => {
  $('.header__menu').slideToggle();
  $('.header__menu-button').toggle();
  $('.header__menu-button-close').toggle();
});

$('.header__menu-button-close').click(() => {
  $('.header__menu').slideToggle();
  $('.header__menu-button').toggle();
  $('.header__menu-button-close').toggle();
});