
$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();
		});

// put class of exit on elements to make them navigate back to page-nav
			$(".exit").click(function(){

				$(this).toggleClass('active');
				$(".page-nav").fadeToggle();
			});

			// end hamburger menu
			$(document).ready(function() {
				$(window).scroll( function(){
					$('.fadein').each( function(i){
								var bottom_of_element = $(this).offset().top + $(this).outerHeight();
								var bottom_of_window = $(window).scrollTop() + $(window).height();
								if( bottom_of_window > bottom_of_element ){
									$(this).animate({'opacity':'1'},1000);
								}
						});
				});
		});

		// faqs


// epic gallery

    $('[data-fancybox="gallery"]').fancybox({
         loop: true,
           buttons: [
              "zoom",
             "slideShow",
             "thumbs",
             "close"
             ],
           animationEffect: "zoom",
        transitionEffect: "zoom-in-out",
         });



 });

// end accordian

$(document).ready(function() {
		$(window).scroll( function(){
			$('.fadeinone').each( function(i){
						var bottom_of_element = $(this).offset().top + $(this).outerHeight();
						var bottom_of_window = $(window).scrollTop() + $(window).height();
						if( bottom_of_window > bottom_of_element ){
							$(this).animate({'opacity':'1'},500);
						}
				});
		});
});

		$(document).ready(function() {
				$(window).scroll( function(){
					$('.fadeintwo').each( function(i){
								var bottom_of_element = $(this).offset().top + $(this).outerHeight();
								var bottom_of_window = $(window).scrollTop() + $(window).height();
								if( bottom_of_window > bottom_of_element ){
									$(this).animate({'opacity':'1'},1000);
								}
						});
				});
		});

				$(document).ready(function() {
						$(window).scroll( function(){
							$('.fadeinthree').each( function(i){
										var bottom_of_element = $(this).offset().top + $(this).outerHeight();
										var bottom_of_window = $(window).scrollTop() + $(window).height();
										if( bottom_of_window > bottom_of_element ){
											$(this).animate({'opacity':'1'},1500);
										}
								});
						});
				});

// slide in from right

 $(document).ready(function() {
		$(window).scroll( function(){
			$('.slideinright').each( function(i){
				var bottom_of_element = $(this).offset().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				if( bottom_of_window > bottom_of_element ){
						$(this).animate({'margin-left':'0px'},2500);
				}
				});
			});
	});


// on right end

// slide in from left

$(document).ready(function() {
$(window).scroll( function(){
$('.slideinleft').each( function(i){
var bottom_of_element_left = $(this).offset().top;
var bottom_of_window = $(window).scrollTop() + $(window).height();
if( bottom_of_window > bottom_of_element_left ){
$(this).animate({'margin-left':'0px'},2000);
}
});
});
});
