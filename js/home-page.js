$(function() {
  // Hamburger Menu and Navbar Menu JS
  $(".burger-menu").click(function() {
    $("body").toggleClass("overflow-y-hidden");
    $(".fixed-navbar-menu-desktop").toggleClass("active");
    $(".logo-desktop").toggleClass("active");
    $(".navbar-menu-desktop").toggleClass("active");
  });
  // About Section JS
  var aboutSecHomeOffset = $(".bg-about-home").offset().top - 500;
  $(window).scroll(function() {
    var windScllTop = $(window).scrollTop();
    if (aboutSecHomeOffset < windScllTop) {
      $(".about-heading-home").addClass("active");
      $(".about-desc-home").addClass("active");
    } else {
      $(".about-heading-home").removeClass("active");
      $(".about-desc-home").removeClass("active");
    }
  });
  // Extra Information Section JS
  var extraInfoSecHomeOffset = $(".bg-extra-info-home").offset().top - 300;
  $(window).scroll(function() {
    var windScllTop = $(window).scrollTop();
    if (extraInfoSecHomeOffset < windScllTop) {
      $(".extra-info-img-1").addClass("active");
      $(".extra-info-img-2").addClass("active");
      $(".extra-info-home").addClass("active");
    } else {
      $(".extra-info-img-1").removeClass("active");
      $(".extra-info-img-2").removeClass("active");
      $(".extra-info-home").removeClass("active");
    }
  });
  // Services Section JS
  var servicesSecHomeOffset = $(".bg-our-services-home").offset().top - 500;
  $(window).scroll(function() {
    var windScllTop = $(window).scrollTop();
    if (servicesSecHomeOffset < windScllTop) {
      $(".bg-our-services-home").addClass("active");
    } else {
      $(".bg-our-services-home").removeClass("active");
    }
  });
  // Our Approaches Section JS
  $('.our-approaches-tab-listing > li > a').click(function(event){
		event.preventDefault(); // stop browser to take action for clicked anchor
		// get displaying tab content jQuery selector
		var active_oa_tab_selector = $('.our-approaches-tab-listing > li.active > a').attr('href');
		// find actived navigation and remove 'active' css
		var actived_oa_nav = $('.our-approaches-tab-listing > li.active');
		actived_oa_nav.removeClass('active');
		// add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
		// hide displaying tab content
		$(active_oa_tab_selector).removeClass('active');
		$(active_oa_tab_selector).addClass('hide');
		// show target tab content
		var target_oa_tab_selector = $(this).attr('href');
		$(target_oa_tab_selector).removeClass('hide');
		$(target_oa_tab_selector).addClass('active');
  });
  // Footer Section JS
  var footerSecHomeOffset = $(".bg-footer-home").offset().top - 700;
  $(window).scroll(function() {
    var windScllTop = $(window).scrollTop();
    if (footerSecHomeOffset < windScllTop) {
      $(".bg-footer-home").addClass("active");
    } else {
      $(".bg-footer-home").removeClass("active");
    }
  });
});
$(window).on("load", function() {
  // Banner JS
  $(".banner-info-home").addClass("active");
});