/*
*************************************************
jQuery Plugin Template
-
BaseWeb by Sebastian Nitu
Author: http://www.sebnitu.com
Repository: https://github.com/sebnitu/BaseWeb
*************************************************
*/
/*-------------------------------------------
	Plugin Name
---------------------------------------------*/
(function($) {
	
	$.fn.pluginName = function(options) {
				
		// Extend our default options with those provided.
		var opts = $.extend({}, $.fn.pluginName.defaults, options);
				
		return this.each(function () {
						
	  	// Save our object
	  	var $this = $(this);
						
	  	// Build element specific options
	  	// This lets me access options with this syntax: o.optionName
	  	var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
		
		});

	};
	
	$.fn.pluginName.defaults = {
		pauseOnHover : true
	};
	
})(jQuery);
/*-------------------------------------------
	Fin
---------------------------------------------*/