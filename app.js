$(document).ready(function() {
	const $hamburger = $('.header .nav-bar .nav-list .hamburger');
	const $mobileMenu = $('.header .nav-bar .nav-list ul');
	const $menuItems = $('.header .nav-bar .nav-list ul li a');
	const $header = $('.header.container');
  
	$hamburger.on('click', function() {
	  $hamburger.toggleClass('active');
	  $mobileMenu.toggleClass('active');
	});
  
	$(document).on('scroll', function() {
	  var scroll_position = $(window).scrollTop();
	  if (scroll_position > 50) {
		$header.css('background-color', '#0a300b');
	  } else {
		$header.css('background-color', 'transparent');
	  }
	});
  
	$menuItems.on('click', function() {
	  $hamburger.toggleClass('active');
	  $mobileMenu.toggleClass('active');
	});
  });
  