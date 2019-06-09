jQuery(function($){

	$(document).ready(function(){
		$('#sl1,#sl2').slick({
			  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1300,
  arrows: false,
			adaptiveHeight: true,
			mobileFirst:true,
		});
	});

});

