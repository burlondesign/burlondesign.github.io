jQuery("#carousel").owlCarousel({
  autoplay: false,
  // loop: true,
  // rewind: true, /* use rewind if you don't want loop */
  margin: 20,
  // animateOut: 'fadeOut',
  // animateIn: 'fadeIn',
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  items: 1,
  dots: false
});
$( ".owl-prev").html('<img src="assets/img/chevron-left.svg">');
$( ".owl-next").html('<img src="assets/img/chevron-right.svg">');

$(".sidebar-toggle").on("click",function () {
  $("#sidebar").toggleClass('active');
})

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".fadein")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).offset().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
})