//This will be the company header
var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));
var companyHeaderW = parseInt($(companyHeader).css("width"));
var companyHeaderBarrier = companyHeaderW + 60;

//This will style the menu area
var menuArea = document.getElementById("menu-area");
var menuAreaH = companyHeaderH + 60;
$(menuArea).css("height", menuAreaH + "px");

//This will position the company header vertically in the menu area
$(companyHeader).css("top", ((menuAreaH / 2) - (companyHeaderH / 2)) + "px");

//This will be the instantiation of items that never changes during any of the 
//function calls
var linksArea = document.getElementById("links-area");
var searchSection = document.getElementById("search-section");
var menuOpts = document.getElementsByClassName("menu-opts");
var menuTexts = document.getElementsByClassName("menu-texts");

//This is the function for the menu on everything larger then a tablet
function largeMenu()
{
	var linksAreaW = 0;
	$(linksArea).css("height", menuAreaH + "px");

	for(var i = 0; i < menuOpts.length; i++)
	{
		//This will set the styles for the menu texts area
		var menuTextsW = parseInt($(menuTexts[i]).css("width"));
		var menuTextsH = parseInt($(menuTexts[i]).css("height"));
		$(menuTexts[i]).css("margin", "0px");
		$(menuTexts[i]).css("margin-top", ((menuAreaH / 2) - (menuTextsH / 2)) + "px");

		//This will set the style for the menu options areas
		$(menuOpts[i]).css("width", (menuTextsW + 60) + "px");
		$(menuOpts[i]).css("height", (menuAreaH) + "px");
		$(menuOpts[i]).css("left", linksAreaW + "px");
		$(menuOpts[i]).css("top", "0px");

		var menuOptsW = parseInt($(menuOpts[i]).css("width")) - 60;

		$(menuTexts[i]).css("width", menuOptsW + "px");
		$(menuTexts[i]).css("margin-left", "30px");

		//This keeps track of the final size of the links area
		linksAreaW += (menuTextsW + 60);
	}

	$(linksArea).css("width", linksAreaW + "px");
	return linksAreaW;
}

largeMenu();

function smallMenu()
{
	$(linksArea).css("height", "100vh");
	$(linksArea).css("width", "20em");
	var menuOptsTop = 0;

	for(var i = 0; i < menuOpts.length; i++)
	{
		//This will set the styles for the menu texts area
		var menuTextsW = parseInt($(menuTexts[i]).css("width"));
		var menuTextsH = parseInt($(menuTexts[i]).css("height"));
		$(menuTexts[i]).css("margin", "30px");
		$(menuTexts[i]).css("margin-top", ((menuAreaH / 2) - (menuTextsH / 2)) + "px");

		//This will set the style for the menu options areas
		$(menuOpts[i]).css("width",  "20em");
		$(menuOpts[i]).css("text-align", "left");
		$(menuOpts[i]).css("height", (menuAreaH) + "px");
		$(menuOpts[i]).css("left", "0px");
		$(menuOpts[i]).css("top", menuOptsTop + "px");

		//This keeps track of everything from the top
		menuOptsTop += menuAreaH;
	}
}

$(window).on("resize", function(){
	var ogLength = largeMenu();
	var windowW = window.innerWidth;
	if((windowW - ogLength) <= companyHeaderBarrier)
	{
		smallMenu();
	}
	else
	{
		ogLength = largeMenu();
	}
});
