$(document).scroll(function() {
  
  var text1Height = $('.a').offset().top - $(window).scrollTop();
  
  if (text1Height <= 200) {
			$('.parallax-group').css('position','fixed');
		}
});