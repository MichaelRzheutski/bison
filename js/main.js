$(function () {
  /* Menu nav toggle */
  $('#nav_toggle').on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
  });

  // Reviews Slider
  let slider = tns({
    container: '.reviews-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    navPosition: 'bottom',
    navContainer: '.reviews-slider_nav',
    mouseDrag: true,
    arrowKeys: true,
    gutter: 50,
    edgePadding: 20,
    responsive: {
      600: {
        gutter: 50,
        items: 2,
      },
      1000: {
        gutter: 150,
      },
    },
  });
});
