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

//Initial display
styleProdCards(parseInt(window.innerWidth));

$(window).on("resize", function(){
	console.log(window.innerWidth);
	styleProdCards(parseInt(window.innerWidth));
});

