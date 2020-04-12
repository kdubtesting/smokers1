//This will be the company header
var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));

/*This will position the view button to the middle of the screen*/
var viewButton = document.getElementById("view-store-button");
var viewButtonW = parseInt($(viewButton).css("width"));
var viewButtonH = parseInt($(viewButton).css("height"));
var viewButtonB = parseInt($(viewButton).css("bottom"));

$(viewButton).css("left", ((window.innerWidth / 2) - (viewButtonW / 2)) + "px");

//This will style the product area
var productArea = document.getElementById("product-area");
var productAreaH = window.innerHeight - companyHeaderH - 60 - viewButtonH - viewButtonB - 20
$(productArea).css("bottom", (((window.innerHeight / 2) - (productAreaH / 2)) - 5) + "px");
$(productArea).css("height", productAreaH + "px");

var productCarosel = document.getElementById("product-carosel");
var productCaroselH = parseInt($(productCarosel).css("height"));

function styleMainDescription()
{
	//This is some information about the style for the product description
	var productDescription = document.getElementsByClassName("product-description");
	var productDescriptionH = parseInt($(productDescription[0]).css("height"));

	//This will be some of the styles for the productCard
	var inProductDescription = document.getElementsByClassName("in-product-description");
	var inProductDescriptionH = parseInt($(inProductDescription[0]).css("height"));
	var inProductDescriptionW = parseInt($(inProductDescription[0]).css("width"));

	//This will be the same code for the product card creation when it comes to naming the product cards
	//This part is the product name section
	var productNames = document.getElementsByClassName("product-name");

	productNames[0].innerText = "Test Title 1";

	var productNamesW = parseInt($(productNames[0]).css("width"));
	var productNamesH = parseInt($(productNames[0]).css("height"));

	productNames[0].style.top = "1.5em";
	productNames[0].style.left = ((inProductDescriptionW / 2) - (productNamesW / 2)) + "px";

	var productNamesT = parseInt($(productNames[0]).css("top"));

	//This is the product price section
	var productPrices = document.getElementsByClassName("product-price")

	productPrices[0].innerText = "$$.$$";

	var productPricesW = parseInt($(productPrices[0]).css("width"));
	var productPricesH = parseInt($(productPrices[0]).css("height"));

	productPrices[0].style.top = (productNamesT + productNamesH + 5 + 5) + "px";
	productPrices[0].style.left = ((inProductDescriptionW / 2) - (productPricesW / 2) + "px");

	//This is the product label + the number input
	var productLabels = document.getElementsByClassName("amount-label"); 

	productLabels[0].innerText = "Select amount here";

	var productLabelsW = parseInt($(productLabels[0]).css("width"));
	var productLabelsH = parseInt($(productLabels[0]).css("height"));

	var productAmounts = document.getElementsByClassName("product-amount") 

	var productAmountsH = parseInt($(productAmounts[0]).css("height"));
	var productAmountsW = parseInt($(productAmounts[0]).css("width"));

	var selectionLeft = productLabelsW + productAmountsW + 10;

	productLabels[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5) + "px";
	productLabels[0].style.left = ((inProductDescriptionW / 2) - (selectionLeft / 2)) + "px";

	var productSelectionL = parseInt($(productLabels[0]).css("left")) + productLabelsW + 10;

	productAmounts[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 - 2) + "px";
	productAmounts[0].style.left = productSelectionL + "px";

	//This is the product buying button
	var productButtons = document.getElementsByClassName("product-button");

	var productButtonsW = parseInt($(productButtons[0]).css("width"));
	var productButtonsH = parseInt($(productButtons[0]).css("height"));

	productButtons[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productAmountsH + 5 + 5) + "px";
	productButtons[0].style.left = ((inProductDescriptionW / 2) - (productButtonsW / 2)) + "px";

	inProductDescription[0].style.height = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productAmountsH + 5 + 5 + productButtonsH + productNamesT) + "px";

	var inProductDescriptionH = parseInt($(inProductDescription[0]).css("height"));

	//This is the difference for the description height
	var differenceForText = productDescriptionH - inProductDescriptionH - 10;

	var productTextH = differenceForText;
	var productTexts = document.getElementsByClassName("product-text");

	console.log(productTextH);

	productTexts[0].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	var productTextsH = parseInt($(productTexts[0]).css("height"));

	console.log(productTextsH)

	if(productTextsH > productTextH)
	{
		productTexts[0].style.height = productTextH + "px";
		productTexts[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5) + "px";
		productLabels[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productTextH + 5 + 5) + "px";
		productAmounts[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productTextH + 5 + 5 - 2) + "px";
		productButtons[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productTextH + 5 + 5 + productAmountsH + 5 + 5) + "px";
		inProductDescription[0].style.height = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productTextH + 5 + 5 + productAmountsH + 5 + 5 + productButtonsH + productNamesT) + "px";
	}
	else
	{
		productTexts[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5) + "px";
		productLabels[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productTextsH + 5 + 5) + "px";
		productAmounts[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productTextsH + 5 + 5 - 2) + "px";
		productButtons[0].style.top = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productTextsH + 5 + 5 + productAmountsH + 5 + 5) + "px";
		inProductDescription[0].style.height = (productNamesT + productNamesH + 5 + 5 + productPricesH + 5 + 5 + productTextsH + 5 + 5 + productAmountsH + 5 + 5 + productButtonsH + productNamesT) + "px";
	}
}

function styleSideDescription()
{
	//This is the style for the product card
	var productCards = document.getElementsByClassName("product-card");
	var smallInstructions = document.getElementsByClassName("small-instructions");
	var smallInstructionsH = parseInt($(smallInstructions[0]).css("height"));

	$(productCards[0]).css("height", "calc(23.5em + " + smallInstructionsH + "px + 48px)");

	var productCardsH = parseInt($(productCards[0]).css("height"));

	$(productCards[0]).css("top", ((productCaroselH / 2) - (productCardsH / 2)) + "px");

	//This will be the side description v
	var sideDescriptions = document.getElementsByClassName("side-description");
	sideDescriptions[0].style.left = "calc(25em + 20px)";
	sideDescriptions[0].style.height = productCardsH + "px";
	sideDescriptions[0].style.width = "25em";
	sideDescriptions[0].style.top = ((productCaroselH / 2) - (productCardsH / 2)) + "px";

	var scrollDescription = document.getElementsByClassName("scroll-side-description");

	var productName = document.createElement("DIV");
}

styleSideDescription();



// /alert(productNamesW);





