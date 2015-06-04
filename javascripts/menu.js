/*------------------------------------------------ Menu movil------------------------------------------------------------*/

$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('.men').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.men').animate({
				left: '-100%'
			});
		}
 
	});
 
};