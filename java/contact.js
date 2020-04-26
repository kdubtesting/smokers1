/*---------------------------*/
/*---------------------------*/
//These will be some of the global variables
/*---------------------------*/
/*---------------------------*/

//These are some of the variables for the contact area
var contactArea = document.getElementById("contact-area");

//These are some of the variables for the other contact area
var otherContact = document.getElementById("other-contact");
var mapArea = document.getElementById("map-area");

//These are some of the variables for the other form area
var formArea = document.getElementById("form-area");

/*---------------------------*/
/*---------------------------*/
/*---------------------------*/
/*---------------------------*/

//This will load the styles for the contact page
$(window).on("load", function()
{
	//This will be the contact area
	var contactAreaH = window.innerHeight - menuAreaH;
	$(contactArea).css("height", contactAreaH + "px");
	$(contactArea).css("top", menuAreaH + "px");

	//This will style the other contacts area
	var otherContactW = parseInt($(otherContact).css("width"));
	var mapAreaW = parseInt($(mapArea).css("width"));

	$(mapArea).css("left", ((otherContactW / 2) - (mapAreaW / 2)) + "px");

});