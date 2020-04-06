var menuArea = document.getElementById("in-menu-area");
var menuAreaChildren = menuArea.childNodes;

menuArea.removeChild(menuAreaChildren[1]);

var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));
var companyHeaderW = parseInt($(companyHeader).css("width"));
var windowH = parseInt(window.innerHeight);

//This will be the options area
var optionsAreaW = companyHeaderW + 70;
$("#options-area").css("width", optionsAreaW + "px");

$("#search-title").css("margin-top", (companyHeaderH + 60) + "px");

//This will set the product area height
var productAreaH = windowH - (companyHeaderH + 60);
$("#products-area").css("height", productAreaH + "px");

//This will make the product cards in the product area, and it will
//use the variables declared outside because these variables will not change for the
//rest of the code
var productItems = document.getElementsByClassName("product-items");
var productItemsH = parseInt($(productItems[0]).css("height"));
var indProductArea = document.getElementsByClassName("ind-product-area");

var viewProd = document.getElementsByClassName("view-prod");
var viewProdW = parseInt($(viewProd[0]).css("width"));
var buyProd = document.getElementsByClassName("buy-prod");
var buyProdW = parseInt($(buyProd[0]).css("width"));

var indProductAreaW = viewProdW + buyProdW + 10;

for(var i = 0; i < indProductArea.length; i++)
{
	$(indProductArea[i]).css("width", indProductAreaW + "px");
}

var productImages = document.getElementsByClassName("product-image");
var productImagesW = parseInt($(productImages[0]).css("width"));

function styleProdCards(windowW)
{
	var productAreaW = windowW * 0.9;
	console.log(productAreaW);
	var productItemsW = productAreaW / 4;

	var divident = 4;

	if(indProductAreaW > productItemsW)
	{
		productItemsW = productAreaW / 3;
		divident = 3;
		if(indProductAreaW > productItemsW)
		{
			productItemsW = productAreaW / 2;
			divident = 2;
			if(indProductAreaW > productItemsW)
			{
				productItemsW = productAreaW;
				divident = 1;
			}
		}
	}

	var productItemLeft = 0;
	var productItemTop = 0;

	for(var i = 0; i < productItems.length; i++)
	{
		//This sets the position of the individual product cards
		$(productItems[i]).css("width", productItemsW + "px");

		if(i == 0)
		{
			$(productItems[i]).css("left", productItemLeft + "px");
			$(productItems[i]).css("top", productItemTop + "px");
			productItemLeft += productItemsW;
		}
		else if((i % divident != 0))
		{
			$(productItems[i]).css("left", productItemLeft + "px");
			$(productItems[i]).css("top", productItemTop + "px");
			productItemLeft += productItemsW;
		}
		else
		{
			productItemTop += productItemsH;
			productItemLeft = 0;
			$(productItems[i]).css("left", productItemLeft + "px");
			$(productItems[i]).css("top", productItemTop + "px");
			productItemLeft += productItemsW;
		}

		//This will position the individual product are in the center
		$(indProductArea[i]).css("margin-left", ((productItemsW / 2) - (indProductAreaW / 2)) + "px");

		//This will position the product image
		$(productImages[i]).css("margin-left", ((indProductAreaW / 2) - (productImagesW / 2)) + "px");
	}

	productItemTop += productItemsH;

	var difference = productAreaH - productItemsH;
	productItemTop += difference

	$("#in-product-area").css("height", productItemTop + "px");
}

//This will be the javascript for the options area
function styleOptions()
{
	var optionsTitle = document.getElementsByClassName("options-title");
	var optionsTitleH = parseInt($(optionsTitle[0]).css("height"))
	var titleText = document.getElementsByClassName("title-text");
	var titleTextH = parseInt($(titleText[0]).css("height"));

	for(var i = 0; i < optionsTitle.length; i++)
	{
		$(titleText[i]).css("margin-top", ((optionsTitleH / 2) - (titleTextH / 2)) + "px")
	}

	//This is the style for the search bar
	var searchBarArea = document.getElementById("search-bar-area");
	var searchBarAreaW = parseInt($(searchBarArea).css("width"));
	var searchBar = document.getElementById("search-bar");
	var searchBarH = parseInt($(searchBar).css("height"));
	var ref = document.getElementById("ref");
	var refW = parseInt($(ref).css("width"));
	$(searchBarArea).css("height", (searchBarH + 4) + "px");
	$(searchBar).css("width", (refW + 20) + "px");
	$("#search-button-opt").css("height", searchBarH + "px");
	$("#search-button-opt").css("width", searchBarH + "px");

	var optionsDisplayArea = document.getElementsByClassName("options-display-area");
	$(optionsDisplayArea[0]).css("height", (searchBarH + 34) + "px");

	$(searchBarArea).css("margin-top", (((searchBarH + 34) / 2) - ((searchBarH + 4) / 2)) + "px");

	//This is the type-area
	var typeAreaCheck = document.getElementById("type-area-checks");
	var typeAreaCheckH = parseInt($(typeAreaCheck).css("height"));

	$(optionsDisplayArea[1]).css("height", (typeAreaCheckH + 30) + "px");
	$(typeAreaCheck).css("margin-top", (((typeAreaCheckH + 30) / 2) - (typeAreaCheckH / 2)) + "px");

	//This is the price range area
	var radioArea = document.getElementById("radio-area");
	var radioAreaH = parseInt($(radioArea).css("height"));
	var numberInput = document.getElementsByClassName("number-input");
	var numberInputH = parseInt($(numberInput[0]).css("height"));
	var numberInputW = parseInt($(numberInput[0]).css("width"));
	var rangeArea = document.getElementById("range-area");
	var inRangeArea = document.getElementById("in-range-area");
	var and = document.getElementById("and");
	var andW = parseInt($(and).css("width"));

	$(rangeArea).css("height", (numberInputH + 16) + "px");
	$(inRangeArea).css("height", (numberInputH + 16) + "px");
	$(numberInput[0]).css("left", "30px");
	$(and).css("left", (numberInputW + 40) + "px");
	$(numberInput[1]).css("left", (numberInputW + andW + 50) + "px");

	var totalRangeHeight = (numberInputH + 16) + radioAreaH;

	$(optionsDisplayArea[2]).css("height", (totalRangeHeight + 30) + "px");
	$(radioArea).css("margin-top", (((totalRangeHeight + 30) / 2) - (totalRangeHeight / 2)) + "px");
}

//This is the options button
var optionsButton = document.getElementById("options-button");
var optionsButtonH = parseInt($(optionsButton).css("height"));

$(optionsButton).css("top",  ((companyHeaderH + 60) + ((productAreaH / 2) - (optionsButtonH / 2))) + "px");

//This will style the options
styleOptions();

//Initial display
var windowRW = parseInt(window.innerWidth); //This is the resize width, it is set to the initial width
styleProdCards(parseInt(window.innerWidth));

//This will be the options area
var optionsArea = document.getElementById("options-area");
var optionsAreaW = parseInt($(optionsArea).css("width"));

var optionsOpen = 0;

$(optionsButton).click(function() {
	$("#options-area").css("left", "0px");
	var windowWidthOpt = windowRW - optionsAreaW;
	var productWidthOpt = 0.9 * windowWidthOpt;

	var right = (windowWidthOpt / 2) - (productWidthOpt / 2);
	$("#products-area").css("width", productWidthOpt + "px");
	styleProdCards(windowWidthOpt);

	$("#products-area").css("right", right + "px");
	optionsOpen = 1;
});

var openCloseOpts = document.getElementsByClassName("open-close-opts");
var optDisplayArea = document.getElementsByClassName("options-display-area");

$(openCloseOpts[0]).click(function(){
	$(optDisplayArea[0]).css("height", "0px");
});

$(openCloseOpts[1]).click(function(){
	$(optDisplayArea[1]).css("height", "0px");
});

$(openCloseOpts[2]).click(function(){
	$(optDisplayArea[2]).css("height", "0px");
});

$(window).on("resize", function(){
	windowRW = parseInt(window.innerWidth);
	if(optionsOpen == 0)
	{
		styleProdCards(parseInt(window.innerWidth));
	}
	else
	{
		$("#options-area").css("left", "0px");
		var windowWidthOpt = windowRW - optionsAreaW;
		var productWidthOpt = 0.9 * windowWidthOpt;

		var right = (windowWidthOpt / 2) - (productWidthOpt / 2);
		$("#products-area").css("width", productWidthOpt + "px");
		$("#products-area").css("right", right + "px");
		styleProdCards(windowWidthOpt);
	}
});

