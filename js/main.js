$(function() {
  // On Scroll Up Desktop Header JS
	var lastScrollTop = 0,
  offsetTopMenu = 0;
	$(window).scroll(function (event) {
		var st = $(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= offsetTopMenu)
			return;
		if (st > lastScrollTop) {
			// Down Scroll code
			$(".bg-logo-navbar-menu-desktop").css({
				"top":"-90px",
				"box-shadow":"none"
			});
		} else {
			// Up Scroll code
			$(".bg-logo-navbar-menu-desktop").css({
				"top": "0",
				"box-shadow": "0 5px 12px 1px rgba(35, 31, 32, 0.09)"
			});
		}
		lastScrollTop = st;
	});
});