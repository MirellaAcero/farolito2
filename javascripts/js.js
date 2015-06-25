/* --------- HOVER CIRCLE -------- */

$('.circle-externo').hover(function() {
	$(".text-externo").toggleClass('hidden');
	$(".text-interno").toggleClass("hidden");
});


/* --------- SCROLL MENU --------- */

$(window).scroll(function(){
	var position = $(this).scrollTop();
	if (position > 658) {
		$(".menu-scroll").fadeIn();
	}
	else if (position < 658) {
		$(".menu-scroll").fadeOut();
	} 
});

/* ---------- SCROLL TOP ----------- */

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        	}, 1000);
        			return false;
      }
    }
  });
});

/* --------- OVERLAY INGRESO --------- */

$('.btn-ingresa').click(function(){
	$('.overlay').fadeIn();
	$('#modal').fadeIn();
});
$('#close').click(function(){
	$('.overlay').fadeOut();		
	$('#modal').fadeOut();
	return false;
});

