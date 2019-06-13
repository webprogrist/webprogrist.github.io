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
			responsive: [
				{
					breakpoint: 961,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						autoplay: true,
						autoplaySpeed: 1300,
						arrows: false,

					}

				},
				{
					breakpoint: 482,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						autoplay: true,
						autoplaySpeed: 1300,
						arrows: false,

					}

				},
				{
					breakpoint: 320,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: true,
						autoplaySpeed: 1300,
						arrows: false,

					}

				}

			]


		});
	});

});

