 

 $(window).on('load',function(){
        $('.preloader').addClass('complete')
    })
$(function(){
	
  




     $('#cover').hover(function() {
        
        $('#coverquote').text('A random generic quote on whatever the client wants!');
        $('#coverdescription').hide();
        $(this).css('background-image','url(medicine2.jpeg)');
        
    }, function() {
        $('#coverquote').text('Company Name');
        $('#coverdescription').show();
        $(this).css('background-image','url(block.jpg)');
    });





});