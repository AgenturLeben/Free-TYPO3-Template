/*if(!Modernizr.svg) {
  $('img[src$="svg"]').attr('src', function() {  
    return $(this).attr('src').replace('.svg', '.png');
  });
}*/

$(function() {

    $( ".csc-form-element-textarea textarea" ).click(function() {
	  //$( ".js .csc-form-element" ).css( "display", "block" );
	  $( ".js .csc-form-element" ).slideDown();
	});

});