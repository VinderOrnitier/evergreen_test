$(document).ready(function() {

	// Menu toggle
	$( ".mobile-nav-toggle" ).on("click", function() {
			$( ".mobil-nav" ).toggleClass("is-open");
			$( "header .menu ul" ).toggleClass("mobil-nav");
	});

	// Background slider
	$("header").backstretch([
		"img/top-bg.png",
		"img/img-2.jpg",
		"img/img-3.jpg"
		], {duration: 5000, fade: 750});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	
});

	// Preloader
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

	// Form validation
(function($,W,D)
{
	var validFormJ = {}; validFormJ

	validFormJ.UTIL =
	{
		setupFormValidation: function()
		{
			$("#register-form").validate({
				rules: {
					number1: "required",
					number2: "required",
					number1: {
						required: true,
						number: true,
						maxlength: 9
					},
					number2: {
						required: true,
						number: true,
						maxlength: 9
					},
					agree: "required"
				},
				submitHandler: function(form) {
					form.submit();
				}
			});
		}
	}

	//when the dom has loaded setup form validation rules
	$(D).ready(function($) {
		validFormJ.UTIL.setupFormValidation();
	});

})(jQuery, window, document);