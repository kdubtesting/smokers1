//This is the company header, and this will be used as a reference
//for the rest of the sizing in the menu
var companyHeader = document.getElementById("company-header");
var chW = parseInt($(companyHeader).css("width")); //company header width
var chH = parseInt($(companyHeader).css("height")); //company header height
var chBarier = chW + 60;

//This is the menu background, just incase anything needs to slide
//from behind the menu
var menuBackground = document.getElementById("menu-background");

menuBackground.style.height = (chH + 60) + "px";

var menuButton = document.getElementById("menu-button");
var menuButtonH = parseInt($(menuButton).css("height"));

$(menuButton).css("top", (((chH + 60) / 2) - (menuButtonH / 2)) + "px");

var refLW = 0;
var refLH = 0;

var refSW = 0;
var refSH = 0;

/*function menuStyleSmall()
{
	$("#menu-button").css("display", "block");
	$("#menu-area").css("z-index", "100");
	$("#menu-area").css("width", "20em");
	var menuBlock = document.getElementsByClassName("menu-block");
	for(var i = 0; i < menuBlock.length; i++)
	{
		$(menuBlockH[i]).css("height", "4em");
		$(menuBlockH[i]).css("width", "20em");
		$(menuBlockH[i]).css("text-align", "left");
	}
	var menuBlockH = parseInt($(menuBlock[0]).css("height"));

	var menuBlockTop = chH + 60;

	var menuText = document.getElementsByClassName("menu-text");
	var menuTextH = parseInt($(menuText[0]).css("height"));

	for (var i = 0; i < menuBlock.length; i++)
	{
		$(menuBlock[i]).css("top", menuBlockTop + "px");
		menuBlockTop += menuBlockH;
		$(menuText[i]).css("margin-top", ((menuBlockH / 2) - (menuTextH / 2)) + "px");
		$(menuText[i]).css("margin-left", "30px");
	}

	var searchBar = document.getElementById("menu-search");
	var searchBarH = parseInt($(searchBar).css("height"));
	var searchBarW = parseInt($(searchBar).css("width"));
	var searchTop = menuBlockTop + ((menuBlockH / 2) - (searchBarH / 2));
	$(searchBar).css("top", searchTop + "px");

	var searchButton = document.getElementById("search-button");
	$(searchButton).css("height", "31px");
	$(searchButton).css("width", "31px");

	var searchButtonL = searchBarW + 40 + 15;

	$(searchButton).css("left", searchButtonL + "px");
	$(searchButton).css("top", searchTop + "px");

	var clickMenu = 0;

	$(menuButton).click(function(){
		if(clickMenu % 2 == 0)
		{
			$("#menu-area").css("right", "0px");
		}
		else{
			$("#menu-area").css("right", "-20em");
		}
		clickMenu++;
	});
*/

function menuStyling(e)
{
	var menuArea = document.getElementById("menu-area");
	var menuButton = document.getElementById("menu-button");
	var searchBar = document.getElementById("menu-search");
	var searchBarW = parseInt($(searchBar).css("width"));
	var menuBlocks = document.getElementsByClassName("menu-block");
	var menuText = document.getElementsByClassName("menu-text");
	if(e == 0)
	{
		//This will be the regular style
		$(menuButton).css("display", "none");
		$(menuArea).css("height", (chH + 60) + "px");
		$(menuArea).css("top", "0px");
		$(menuArea).css("right", "0px");
		$(menuArea).css("box-shadow", "none");

		for(var i = 0; i < menuBlocks.length; i++)
		{
			$(menuBlocks[i]).css("height", "auto");
			$(menuBlocks[i]).css("width", "auto");
			$(menuBlocks[i]).css("top", "0px");
		}

		var menuBlocksLength = 0;
		var menuBlockMarginLeft = searchBarW + 80 + 40.1;

		for(var i = 0; i < menuBlocks.length; i++)
		{
			$(menuBlocks[i]).css("height", (chH + 60) + "px");
			$(menuBlocks[i]).css("text-align", "center");
			$(menuBlocks[i]).css("background-color", "#A6333F")
			var wordLength = parseInt($(menuText[i]).css("width"));
			var menuBlockIndL = wordLength + 60;
			console.log(menuBlockIndL);
			$(menuBlocks[i]).css("width", menuBlockIndL + "px");
			$(menuBlocks[i]).css("margin-left", menuBlockMarginLeft + "px");
			menuBlockMarginLeft += menuBlockIndL;
			var wordHeight = parseInt($(menuText[i]).css("height"));
			$(menuText[i]).css("margin-top", (((chH + 60) / 2) - (wordHeight / 2)) + "px");
			$(menuText[i]).css("margin-left", "0px");
			menuBlocksLength += menuBlockIndL;
		}

		$(searchBar).css("top", (((chH + 60) / 2) - (30.1 / 2)) + "px");

		$("#search-button").css("width", "30.1px");
		$("#search-button").css("height", "30.1px");
		$("#search-button").css("left", (30 + searchBarW + 20 + 10) + "px");
		$("#search-button").css("top", (((chH + 60) / 2) - (30.1 / 2)) + "px");

		for(var i = 0; i < menuBlocks.length; i++)
		{
			$(menuBlocks[i]).on("mouseenter", function(){
				$(this).css("box-shadow", "0 0 5px rgba(0,0,0,0.4)");
			});

			$(menuBlocks[i]).on("mouseleave", function(){
				$(this).css("box-shadow", "none");
			});
			
		}

		$(menuArea).css("width", (menuBlocksLength + searchBarW + 80 + 40.1) + "px");
		refLW = parseInt($(menuArea).css("width"));
		refLH = parseInt($(menuArea).css("height"));
	}
	else
	{
		//This is the smaller style
		$(menuButton).css("display", "block");
		$(menuArea).css("width", "20em");
		$(menuArea).css("height", "100vh");
		$(menuArea).css("box-shadow", "0 0 5px rgba(0,0,0,0.4)");

		refSW = parseInt($(menuArea).css("width"));
		refSH = parseInt($(menuArea).css("height"));

		for(var i = 0; i < menuBlocks.length; i++)
		{
			$(menuBlocks[i]).css("height", "4em");
			$(menuBlocks[i]).css("width", "20em");
			$(menuBlocks[i]).css("text-align", "left");
			$(menuBlocks[i]).css("margin-left", "0px");
		}
		var menuBlockH = parseInt($(menuBlocks[0]).css("height"));

		var menuBlockTop = chH + 60;

		var menuTextH = parseInt($(menuText[0]).css("height"));

		for (var i = 0; i < menuBlocks.length; i++)
		{
			$(menuBlocks[i]).css("top", menuBlockTop + "px");
			menuBlockTop += menuBlockH;
			$(menuText[i]).css("margin-top", ((menuBlockH / 2) - (menuTextH / 2)) + "px");
			$(menuText[i]).css("margin-left", "30px");
		}

		var searchBarH = parseInt($(searchBar).css("height"));
		var searchTop = menuBlockTop + ((menuBlockH / 2) - (searchBarH / 2));
		$(searchBar).css("top", searchTop + "px");

		var searchButton = document.getElementById("search-button");
		$(searchButton).css("height", "31px");
		$(searchButton).css("width", "31px");

		var searchButtonL = searchBarW + 40 + 15;

		$(searchButton).css("left", searchButtonL + "px");
		$(searchButton).css("top", searchTop + "px");

		var clickMenu = 1;

		$(menuButton).click(function(){
			if(clickMenu % 2 == 0)
			{
				$("#menu-area").css("right", "0px");
			}
			else{
				$("#menu-area").css("right", "-20em");
			}
			clickMenu++;
		});
	}
}

//menuStyleSmall();

/*
function menuStyleLarge()
{
	
	var searchBar = document.getElementById("menu-search");
	var searchBarW = parseInt($(searchBar).css("width"));

	var menuBlocks = document.getElementsByClassName("menu-block");
	var menuText = document.getElementsByClassName("menu-text");
	var menuBlocksLength = 0;
	var menuBlockMarginLeft = searchBarW + 80 + 40.1;

	for(var i = 0; i < menuBlocks.length; i++)
	{
		$(menuBlocks[i]).css("height", (chH + 60) + "px");
		$(menuBlocks[i]).css("text-align", "center");
		$(menuBlocks[i]).css("background-color", "#A6333F")
		var wordLength = parseInt($(menuText[i]).css("width"));
		var menuBlockIndL = wordLength + 60;
		console.log(menuBlockIndL);
		$(menuBlocks[i]).css("width", menuBlockIndL + "px");
		$(menuBlocks[i]).css("margin-left", menuBlockMarginLeft + "px");
		menuBlockMarginLeft += menuBlockIndL;
		var wordHeight = parseInt($(menuText[i]).css("height"));
		$(menuText[i]).css("margin-top", (((chH + 60) / 2) - (wordHeight / 2)) + "px");
		$(menuText[i]).css("margin-left", "0px");
		menuBlocksLength += menuBlockIndL;
	}

	$(searchBar).css("top", (((chH + 60) / 2) - (30.1 / 2)) + "px");

	$("#search-button").css("width", "30.1px");
	$("#search-button").css("height", "30.1px");
	$("#search-button").css("left", (30 + searchBarW + 20 + 10) + "px");
	$("#search-button").css("top", (((chH + 60) / 2) - (30.1 / 2)) + "px");


	$("#menu-area").css("width", (menuBlocksLength + searchBarW + 80 + 40.1) + "px");
}
*/

menuStyling(0);
menuStyling(1);

var windowWI = window.innerWidth;
var diffLI = chW + 60;
var diffRI = windowWI - refLW;
if(diffRI <= diffLI)
{
	menuStyling(1);
}
else
{
	menuStyling(0);
}

$(window).resize(function(){
	var windowW = window.innerWidth;
	var diffL = chW + 60;
	var diffR = windowW - refLW;
	if(diffR <= diffL)
	{
		menuStyling(1);
	}
	else
	{
		menuStyling(0);
	}
});





