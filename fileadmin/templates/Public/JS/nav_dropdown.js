/* Dropdown */
var obj = null;

function checkHover() {
	if (obj) {
		obj.find('.level2').fadeOut('fast');	
	} //if
}
/* /Dropdown */


$(function() {

    /* Pageslide */
    var navToggle = ['<a class="nav-open icon-menu" href="#dropdown-nav"></a>'].join("");
    $(".header-container header.wrapper").append(navToggle)
    /* Button zur Einblenden des Hauptmenüs wird per JavaScript erstellt und in den Header eingefügt */
    
    $(".nav-open").pageslide();
    /* /Pageslide */

    
    /* Dropdown */
    if ($(window).width() >= 768){
		$('#dropdown-nav .ifsub').hover(function() {
	      if (obj) {
			    obj.find('.level2').fadeOut('fast');
			    obj = null;
		    } //if
		    $(this).find('.level2').fadeIn('fast');
		    $(this).find('>a').addClass('inpath');
	    }, function() {
		    obj = $(this);
		    $(this).find('>a').removeClass('inpath');
		    setTimeout(
			    "checkHover()",
			    400);
	    });
	}
    /* /Dropdown */


    /* Fixed Navi */
	if ($(window).width() >= 768){
		var top = $('#dropdown-nav').offset().top;
		$(window).scroll(function() {
			if($(this).scrollTop() > top) {
				$('#dropdown-nav').addClass('fixed');
			} else {
				$('#dropdown-nav').removeClass('fixed');
			}
		});
	}
	/* /Fixed Navi */

});