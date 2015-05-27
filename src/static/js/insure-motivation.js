jQuery(document).ready(function($){
	
	function goToByScroll(id){
	    // Remove "link" from the ID
	    id = id.replace("link", "");
	      // Scroll
	    $('html,body').animate({
	        scrollTop: $("#"+id).offset().top},
	        'slow');
	}
	
	$('.crazyhackerz > li > a').click(function(){
		goToByScroll($(this).attr('class'));		
	});
		
});	



/* -------------------- Check Browser --------------------- */

function browser() {
	
	//var isOpera = !!(window.opera && window.opera.version);  // Opera 8.0+
	//var isFirefox = testCSS('MozBoxSizing');                 // FF 0.8+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	    // At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !isSafari && testCSS('WebkitTransform');  // Chrome 1+
	//var isIE = /*@cc_on!@*/false || testCSS('msTransform');  // At least IE6

	function testCSS(prop) {
	    return prop in document.documentElement.style;
	}
	
	if (isSafari || isChrome) {
		
		return true;
		
	} else {
		
		return false;
		
	}
	
}

