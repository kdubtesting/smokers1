//This is the company header, and this will be used as a reference
//for the rest of the sizing in the menu
var companyHeader = document.getElementById("company-header");
var chW = parseInt($(companyHeader).css("width")); //company header width
var chH = parseInt($(companyHeader).css("height")); //company header height

//This is the menu background, just incase anything needs to slide
//from behind the menu
var menuBackground = document.getElementById("menu-background");

menuBackground.style.height = (chH + 60) + "px";

//This will be setting the height and width of the menu area
var menuArea = document.getElementById("menu-area");
var inMenuArea = document.getElementById("in-menu-area");
menuArea.style.height = (chH + 60) + "px";
inMenuArea.style.height = (chH + 60) + "px";

var inSearchArea = document.getElementById("in-search-area");
var menuSearch = document.getElementById("menu-search");
var msH = parseInt($(menuSearch).css("height")); //menu search height
var msW = parseInt($(menuSearch).css("width")); //menu search width

$(inSearchArea).css("width", (msW + msH + 70) + "px");
$(inSearchArea).css("height", (msH + 4) + "px");
$("#search-area").css("height", (chH + 60) + "px");
$("#search-area").css("width", (msW + msH + 70) + "px");
$(menuArea).css("width", (msW + msH + 70) + "px");
$(inMenuArea).css("width", (msW + msH + 70) + "px");
$("#search-button").css("width", (msH + 4) + "px");
$(menuSearch).css("left", "30px");
$("#search-button").css("right", "30px");

$("#search-area").on("mouseenter", function(){
	$(this).css("background-color", "#8C313A");
});

$("#search-area").on("mouseleave", function(){
	$(this).css("background-color", "#A6333F");
});

$(inSearchArea).css("margin-top", (((chH + 60) / 2) - ((msH + 4) / 2)) + "px");

var linkArea = document.getElementById("link-area");
$(linkArea).css("left", (msW + msH + 70) + "px");
$(linkArea).css("height", (chH + 60) + "px");

var linkAreaLength = 0;
var blockLeft = 0;
var menuBlock = document.getElementsByClassName("menu-block");
var menuText = document.getElementsByClassName("menu-text");

for(var i = 0; i < menuText.length; i++)
{
	var mtW = parseInt($(menuText[i]).css("width"));
	linkAreaLength += mtW + 60;
	menuBlock[i].style.width = (mtW + 60) + "px";
	menuBlock[i].style.height = (chH + 60) + "px";
	menuBlock[i].style.left = blockLeft + "px";
	blockLeft += mtW + 60;
	var mtH = parseInt($(menuText).css("height"));
	menuText[i].style.marginTop = (((chH + 60) / 2) - (mtH / 2)) + "px"
}

for(var i = 0; i < menuBlock.length; i++)
{
	$(menuBlock[i]).on("mouseenter", function(){
		$(this).css("background-color", "#8C313A");
	});

	$(menuBlock[i]).on("mouseleave", function(){
		$(this).css("background-color", "#A6333F");
	});
}

$("#link-area").css("width", linkAreaLength + "px");
$("#in-link-area").css("width", linkAreaLength + "px");
$(menuArea).css("width", (msW + msH + 70 + linkAreaLength) + "px");
$(inMenuArea).css("width", (msW + msH + 70 + linkAreaLength) + "px");




