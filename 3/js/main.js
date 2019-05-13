//Burger by Andrey Shevchuk, shevchuk-studio.pw, office@shevchuk-studio.pe, skype: andrew.shevchuk2
function burger()
{
	if($('#burger').is(':visible'))
	{ 
		$("#burgerOverlay").fadeOut();
		$("#burger").animate({right: '-'+$(this).width()+'px',}, 300, function() {$(this).css('display',"none")});
	}else
	{	$("#burgerOverlay").fadeIn();
		$("#burger").css('display',"block").animate({right: '0px'}, 300);
	}
}

$(document).ready(function() 
{
	$("#burger .navigation li a").click(function() 
	{
		$("#burger .navigation li a").removeClass('active');
		$(this).addClass('active');
		return false;
	});			
});			