var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));
var windowH = parseInt(window.innerHeight);

//This will set the product area height
var productAreaH = windowH - (companyHeaderH + 60);
var productAreaW = parseInt($("#products-area").css("width"));

$("#products-area").css("height", productAreaH + "px");

//This will set the height and width of the 
//multiple product cards
var productItems = document.getElementsByClassName("product-items");
var productItemsW = productAreaW / 4; //This is the initial size, afterwards it will be 3, then 2, then finally 1
var productItemsH = productItemsW + 80;

var counter = 1;
var divident = 4;
var positionLeft = 0;
var positionTop = 0;

for(var i = 0; i < productItems.length; i++)
{
	productItems[i].style.height = productItemsH + "px";
	productItems[i].style.width = productItemsW + "px";
	productItems[i].style.left = (positionLeft % productAreaW) + "px";
	positionLeft += productItemsW;
	if(((i % divident) / 4) == 0 && (i != 0))
	{
		positionTop += productItemsH;
	}
	productItems[i].style.top = positionTop + "px";
}

positionTop += productItemsH;

var differencePA = productAreaH - productItemsH;

positionTop += differencePA;

$("#in-product-area").css("height", positionTop + "px");

//Above is all the product cards sized to the product area
//I need to add a resizing function so that as the size gets smaller
//The internals don't get crushed

//This is the options area
var optionsButtonH = parseInt($("#options-button").css("height"));
var optionsButtonTop = (productAreaH / 2) - (optionsButtonH / 2);
$("#options-button").css("top", (optionsButtonTop + companyHeaderH + 60) + "px");

//This is the styling for the store options
var windowW = parseInt(window.innerWidth);
var optionsDisplayW = windowW - productAreaW - 90;
$("#options-display").css("width", optionsDisplayW + "px");
var optionsDisplayH = parseInt($("#options-display").css("height"));
var optionsDisplayTop = (productAreaH / 2) - (optionsDisplayH / 2);
$("#options-display").css("top", (optionsDisplayTop + companyHeaderH + 60) + "px");

var optsSearchAreaW = optionsDisplayW;
var searchBarH = parseInt($("#opt-search").css("height"));
$("#opts-search-area-block").css("height", (searchBarH + 8) + "px");
$("#opts-search-area-block").css("width", optsSearchAreaW + "px");
var searchBarW = optsSearchAreaW - 80 - searchBarH;
$("#opt-search").css("width", searchBarW + "px");

$("#search-opts-button").css("width", (searchBarH+4) + "px");
$("#search-opts-button").css("height", (searchBarH+4) + "px");



