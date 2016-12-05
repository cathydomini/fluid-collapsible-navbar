
    
"use strict";


/**********************************************************************************
/* When use click the icon, the top nav will show or hide. The text inside the button will
/* changed as well.
**********************************************************************************/
  
$( document ).ready(function() {
	$(document).on("click","#expandable, #seeLink",function( event ){
		var topNavEle = $("#musTopnav");

		 event.preventDefault();		

	   if  (topNavEle.hasClass("responsive")){
            topNavEle.removeClass("responsive");
            $("#expandable").html("☰");
            $("#expandable").attr('aria-label', 'click to expand the navigation'); //accessibility
            $("#seeLink").attr('aria-label', 'click to expand the navigation');
            $("#seeLink").text("See More");
               
	    }else{    

	    	topNavEle.addClass("responsive");	
	    	$("#expandable").html("×"); 
	    	$("#expandable").attr('aria-label', 'click to hide the navigation');
	    	$("#seeLink").attr('aria-label', 'click to hide the navigation');
	    	$("#seeLink").text("See Less");
	    	
	    }
	  
	});

});