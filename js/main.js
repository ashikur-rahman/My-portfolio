// Preloader

  $(window).load(function(){
        $('.loader').fadeOut();    
        $('#preloader').delay(350).fadeOut('slow');    
        $('body').delay(350);   

    });



$(document).ready(function(){
	$('#designer-section').mouseover(function(){
		$('#developer-section').show('slow');
		$('#designer-section').hide('slow');
	});
	$('#developer-section').mouseover(function(){
		$('#developer-section').hide('slow');
		$('#designer-section').show('slow');

	});

	//open page
    $('#about-page').on('click', function() {
    	$('#about').removeClass('hide');
//$('#sec_box').show("slow");
          
 $('#about').slideToggle(function(event){

 	// event.preventDefault();
 });


            $(".tabs-menu a").click(function (event) {
                event.preventDefault();
                $(this).parent().addClass("current");
                $(this).parent().siblings().removeClass("current");
                var tab = jQuery(this).attr("href");
                $(".tab-content").not(tab).css("display", "none");
                
            });


    	

     
    });

  




});

