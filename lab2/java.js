// function cssParallax(cont, el, radiusVal){
//   $(cont).mousemove(function(event) {
      
//       cx = Math.ceil($(window).width() / 2.0);
//       cy = Math.ceil($(window).height() / 2.0);
//       dx = event.pageX - cx;
//       dy = event.pageY - cy;
      
//       tiltx = (dy / cy);
//       tilty = - (dx / cx);
//       radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
//       degree = (radius * radiusVal);

//       $(el, cont).css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
//       $(el, cont).css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
//   });
// }


$(document).ready(function() {
  cssParallax('.parallax-container', '.parallax-base', 20);
  cssParallax('.parallax-container.first', '.parallax-base', 20);
});
$(document).ready(function(){
  var vid = $("#vid").get(0);
  var lastScrollTop = 0;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
         // downscroll code
         vid.currentTime = vid.currentTime+1,5;
         console.log(vid.currentTime);
     } else {
        // upscroll code
        vid.currentTime = vid.currentTime-0.2;
        console.log(vid.currentTime);
     }
     lastScrollTop = st;
  });
});
