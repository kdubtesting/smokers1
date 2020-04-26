/*----------------------------------------------*/
//These are some GLOBAL VARIABLES, along with some initial
//styles for the menu
/*----------------------------------------------*/
//This will be the company header
var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));
var companyHeaderW = parseInt($(companyHeader).css("width"));
var companyHeaderBarrier = companyHeaderW + 60;

//This will style the menu area
var menuArea = document.getElementById("menu-area");
var menuAreaH = companyHeaderH + 60; //This is the menu area height for the rest of the website
$(menuArea).css("height", menuAreaH + "px"); //set the height

//This will position the company header vertically in the menu area
$(companyHeader).css("top", ((menuAreaH / 2) - (companyHeaderH / 2)) + "px");

//------------------------
//This will be the variables for the items in the menu area
//------------------------
//This is where the menu items area
var linksArea = document.getElementById("links-area");

//Schedule section
var scheduleSection = document.getElementById("schedule-section");
var openCloseTime = document.getElementById("open-close");
var timeDis = document.getElementById("time-display");
var chevron = document.getElementById("chevron");

//Search section
var searchSection = document.getElementById("search-section");
var searchSectionW = parseInt($(searchSection).css("width"));

//Search bar
var menuSearch = document.getElementById("menu-search");
var menuSearchW = parseInt($(menuSearch).css("width"));
var menuSearchH = parseInt($(menuSearch).css("height"));

//Search Button
var menuButton = document.getElementById("menu-search-button");
var menuButtonH = parseInt($(menuButton).css("height"));

//Menu Items
var menuOpts = document.getElementsByClassName("menu-opts");
var menuTexts = document.getElementsByClassName("menu-texts");
var menuTextsH = parseInt($(menuTexts[0]).css("height"));

//This is the toggle button for smaller screens
var menuOpenClose = document.getElementById("menu-open-close");

//This will be for determining the size of the menu, it never changes once initialized
var ogLength = 0;

//This will be for small lengths, because there will be an even smaller size
var smallLength = 0;

//This is the variable for the internal width of the window
var windowW = 0;

/*----------------------------------------------*/
/*----------------------------------------------*/
/*----------------------------------------------*/

//This is the function for the menu on everything larger then a tablet
function largeMenu()
{
	//Do this so that so the toggle is not present
	$(menuOpenClose).css("display", "none");

	//This will set the width for the menu opts + search area that will
	//never change for the site LOCAL VARIABLE
	var linksAreaW = 0;
	
	$(scheduleSection).css("width", "12em");
	$(scheduleSection).css("height", menuAreaH + "px");
	var scheduleSectionW = parseInt($(scheduleSection).css("width"));

	$(openCloseTime).css("margin-left", "15px");
	var openCloseTimeH = parseInt($(openCloseTime).css("height"));
	var openCloseTimeW = parseInt($(openCloseTime).css("width"));
	$(openCloseTime).css("margin-top", ((menuAreaH / 2) - (openCloseTimeH / 2)) + "px");

	$(timeDis).css("top", ((menuAreaH / 2) - (openCloseTimeH / 2)) + "px");
	$(timeDis).css("left", (openCloseTimeW + 20) + "px");

	var timeDisW = parseInt($(timeDis).css("width"));

	var chevronH = parseInt($(chevron).css("height"));
	var chevronW = parseInt($(chevron).css("width"));

	$(chevron).css("left", (openCloseTimeW + 20 + timeDisW + 5) + "px");
	$(chevron).css("top", ((menuAreaH / 2) - (chevronH / 2)) + "px");

	scheduleSectionW = timeDisW + openCloseTimeW + chevronW + 15 + 15 + 5 + 5;

	$(scheduleSection).css("width", scheduleSectionW + "px");

	linksAreaW += scheduleSectionW;

	//This will set the position styles for the search section
	$(searchSection).css("height", menuAreaH + "px");
	$(searchSection).css("width", "calc(15em + 1.45em + 10px + 60px)");
	$(searchSection).css("top",  "0px");
	$(searchSection).css("left", scheduleSectionW + "px");

	//This will set the position styles for the search bar
	$(menuSearch).css("top", ((menuAreaH / 2) - (menuSearchH / 2)) + "px");

	//This will set the position styles for the search button
	$(menuButton).css("top", ((menuAreaH / 2) - (menuButtonH / 2)) + "px");
	$(menuButton).css("right", "30px");

	//Once that is done, add the length of the search section to the total width
	//This will also be used to position the menu opts to the left of this object
	linksAreaW += searchSectionW;

	//Also, set the height of the link area
	$(linksArea).css("height", menuAreaH + "px");
	$(linksArea).css("right", "0em");

	//This will properly style the menu option blocks and size the links area
	for(var i = 0; i < menuOpts.length; i++)
	{
		//This will set the styles for the menu texts, specifically the margine top
		var menuTextsW = parseInt($(menuTexts[i]).css("width")); //This is needed, because each text is a different width
		$(menuTexts[i]).css("margin", "0px");
		$(menuTexts[i]).css("margin-top", ((menuAreaH / 2) - (menuTextsH / 2)) + "px");

		//This will set the style for the menu options areas
		$(menuOpts[i]).css("width", (menuTextsW + 60) + "px");
		$(menuOpts[i]).css("height", (menuAreaH) + "px");
		$(menuOpts[i]).css("left", linksAreaW + "px");
		$(menuOpts[i]).css("top", "0px");

		//This is used to set the actual size of the text, because without it, the text is the width
		//of the menu options block, and when it resizes, it will grow relatively to the size of the blocks
		//which gets bigger every resize, no matter what.
		var menuOptsW = parseInt($(menuOpts[i]).css("width")) - 60;

		$(menuTexts[i]).css("width", menuOptsW + "px");
		$(menuTexts[i]).css("margin-left", "30px");

		//This keeps track of the final size of the links area
		linksAreaW += (menuTextsW + 60);
	}

	//finally set the size of the links area + return that value to be used in ogLength
	$(linksArea).css("width", linksAreaW + "px");
	return linksAreaW;
}

function clickMenu(button, area)
{
	var i = 0;
	$(button).click(function(){
		if(i % 2 == 0)
		{
			$(area).css("right", "0em");
		}
		else
		{
			$(area).css("right", "-20em");
		}
		i += 1;
	});
}

//This function is for smaller screens
function smallMenu()
{
	//Do this so that so the toggle is present
	$(menuOpenClose).css("display", "block");
	var menuOpenCloseH = parseInt($(menuOpenClose).css("height"));
	$(menuOpenClose).css("top", ((menuAreaH / 2) - (menuOpenCloseH / 2)) + "px");
	
	//Set the static width and height for the links area, which will we a set width of 20em
	//and the full height of the screen
	$(linksArea).css("height", "100vh");
	$(linksArea).css("width", "20em");
	$(linksArea).css("right", "-20em");

	//This variable is used to position the elements from the top of the page
	//in the slide out menu LOCAL VARIABLE
	var menuOptsTop = menuAreaH;

	//This will properly style the menu options blocks as well as the text
	for(var i = 0; i < menuOpts.length; i++)
	{
		//This will set the styles for the menu texts area
		$(menuTexts[i]).css("margin", "30px");
		$(menuTexts[i]).css("margin-top", (((menuAreaH - 20) / 2) - (menuTextsH / 2)) + "px");

		//This will set the style for the menu options areas
		$(menuOpts[i]).css("width",  "20em");
		$(menuOpts[i]).css("text-align", "left");
		$(menuOpts[i]).css("height", (menuAreaH - 20) + "px");
		$(menuOpts[i]).css("left", "0px");
		$(menuOpts[i]).css("top", menuOptsTop + "px");

		//This keeps track of everything from the top
		menuOptsTop += (menuAreaH - 20);
	}

	//This happens at the end as oppose to the beginining in the last function
	//because in the order of apperance, this value is last
	$(searchSection).css("width", "20em");
	$(searchSection).css("height", (menuAreaH - 20) + "px");
	$(searchSection).css("top", menuOptsTop + "px");
	$(menuSearch).css("top", (((menuAreaH - 20) / 2) - (menuSearchH / 2)) + "px");
	$(menuButton).css("top", (((menuAreaH - 20) / 2) - (menuButtonH / 2)) + "px")
	$(menuButton).css("left", (menuSearchW + 30 + 10) + "px");

	//This will toggle the menu
	clickMenu(menuOpenClose, linksArea);
}

//This function will create and style the smallest menu
function smallestMenu()
{
	
}

//This is the loading function, it will set and call the correct menu
//depending on the screen size
$(window).on("load", function(){
	ogLength = largeMenu(); //give the global variable an initial value that never changes, also set the menu to initially be the large menu
	windowW = window.innerWidth; //This value will change as the program continues, this is it's initial value

	//This conditional checks the size to determine if the screen size warrants a large menu
	//or a small menu. If the condition is met, the small menu will be displayed instead
	if((windowW - ogLength) <= companyHeaderBarrier)
	{
		smallMenu();
	}
});

//This is the resizing function, it will change the menu as the window is resized
$(window).on("resize", function(){
	windowW = window.innerWidth; //check the inner width of the window as it is resizing

	//Just like in the loading function, this conditional will
	//check to see when the small menu is required as opposed to the large one.
	if((windowW - ogLength) <= companyHeaderBarrier)
	{
		smallMenu();
	}
	else
	{
		largeMenu();
	}
});
