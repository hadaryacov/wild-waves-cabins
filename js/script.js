window.onscroll = function () {
  	if(window.scrollY > 200){
  		$('header').addClass('bold');
  	}else{
  		$('header').removeClass('bold');
  	}

  	var min = -5;
  	var max = 25;

  	var heroHeight = $('section.hero').height();
  	var startingPoint = 'translateX(-50%)translateY(-50%)';

  	var rotationNum = window.scrollY/heroHeight * (max-min) - 5;

  	$('section.hero h1').css('transform', startingPoint + 'rotate(' + rotationNum + 'deg)');
  	fullscreen();
}

function fullscreen(){
    $('section.hero').css({
        height: $(window).height()
    });

    $('section.gallery').css({
        height: $(window).height()
    });
}

$(document).ready(function($){
	fullscreen();
});