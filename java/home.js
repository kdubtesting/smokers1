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

/*This is the product carosel styles*/
var productCarosel = document.getElementById("product-carosel");
var productCaroselH = parseInt($(productCarosel).css("height"));

productCarosel.removeChild(productCarosel.childNodes[0]);


//These are some global variables that will fill the different sections
//with text or just different styles
var productNameArr = ["Cigarette 1", "Cigar 1", "Bong 1", "Cigarette 2", "Bong 2", "Bong 3"];
var productPriceArr = ["$$.$$", "$$$.$$", "$$$$.$$", "$.$$", "$$$.$$", "$$$$$.$$"];
var productTextArr = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."];

//This is the function to create the different product cards
var productCardLeft = 10;

function createProductCards(item)
{
	//This will create the prdouct card
	var productCard = document.createElement("DIV");
	productCard.className = "product-card";

	productCarosel.appendChild(productCard);

	var productCardW = parseInt($(productCard).css("width"));

	$(productCard).css("left", productCardLeft + "px");

	productCardLeft += (10 + productCardW);

	//This will create the product image
	var productImage = document.createElement("DIV");
	productImage.className = "product-image";

	productCard.appendChild(productImage);

	//This is the product description
	var productDescription = document.createElement("DIV");
	productDescription.className = "product-description";

	//append this here so that I can use the width and height
	productCard.appendChild(productDescription);

	var productDescriptionH = parseInt($(productDescription).css("height"));
	var productDescriptionW = parseInt($(productDescription).css("width"));

	//This is the inside of the product description
	var inDesc = document.createElement("DIV");
	inDesc.className = "in-desc";
	var inDescH = 0;

	productDescription.appendChild(inDesc);

	//This is the product name
	var productName = document.createElement("H3");
	productName.className = "product-name";
	productName.innerText = productNameArr[item];

	inDesc.appendChild(productName);
	var productNameW = parseInt($(productName).css("width"));
	var productNameH = parseInt($(productName).css("height"));

	$(productName).css("left", ((productDescriptionW / 2) - (productNameW / 2)) + "px");
	$(productName).css("top", "24px");

	inDescH += (24 + productNameH + 5 + 24);

	$(inDesc).css("height", inDescH + "px");

	//This is the product price
	var productPrice = document.createElement("H4");
	productPrice.className = "product-price";
	productPrice.innerText = productPriceArr[item];

	inDesc.appendChild(productPrice);

	inDescH -= 24;

	var productPriceW = parseInt($(productPrice).css("width"));
	var productPriceH = parseInt($(productPrice).css("height"));

	$(productPrice).css("left", ((productDescriptionW / 2) - (productPriceW / 2)) + "px");
	$(productPrice).css("top", (inDescH + 5));


	inDescH += (5 + productPriceH + 5 + 24);
	$(inDesc).css("height", inDescH + "px");

	//This is the product label

	var productLabel = document.createElement("LABEL")
	productLabel.className = "product-label";
	productLabel.for = "product-label";
	productLabel.innerText = "Select Amount Here";

	inDesc.appendChild(productLabel);

	inDescH -= 24;

	var productLabelW = parseInt($(productLabel).css("width"));
	var productLabelH = parseInt($(productLabel).css("height"));

	$(productLabel).css("top", (inDescH + 5) + "px");

	$(inDesc).css("height", inDescH + "px");

	//This the product amount

	var productAmount = document.createElement("INPUT");
	productAmount.className = "product-amount";
	productAmount.type = "number";
	productAmount.name = "product-amount";
	productAmount.placeholder = "1";
	productAmount.min = "1";

	inDesc.appendChild(productAmount);

	var productAmountH = parseInt($(productAmount).css("height")) + 1;
	var productAmountW = parseInt($(productAmount).css("width"));

	$(productAmount).css("top", (inDescH + 3) + "px");

	inDescH += (5 + productAmountH + 5 + 24);
	$(inDesc).css("height", inDescH + "px");

	//This will be the left padding they share
	var selectLeft = productLabelW + productAmountW;
	var totalProductLeft = ((productDescriptionW / 2) - (selectLeft / 2))

	$(productLabel).css("left", totalProductLeft + "px");

	var inputLeft = totalProductLeft + productLabelW + 10;

	$(productAmount).css("left", inputLeft + "px");

	//This is theproduct buying button
	var productButton = document.createElement("BUTTON");
	productButton.className = "product-button";
	productButton.innerText = "buy";

	inDesc.appendChild(productButton);

	inDescH -= 24;

	var productButtonW = parseInt($(productButton).css("width"));
	var productButtonH = parseInt($(productButton).css("height"));

	$(productButton).css("left", ((productDescriptionW / 2) - (productButtonW / 2)) + "px");
	$(productButton).css("top", (inDescH + 5) + "px");

	inDescH += (5 + productButtonH + 24);
	$(inDesc).css("height", inDescH + "px");

	//---------------------------------
	//This product text is added at the end because it sizes to the rest of the 
	//product of the remaining description
	//---------------------------------

	var textAreaH = productDescriptionH - inDescH - 10;

	//This is will be the text area

	var textArea = document.createElement("DIV");
	textArea.className = "text-area";
	$(textArea).css("height", textAreaH + "px");

	inDescH = 0;

	//This will be the top up to the text
	inDescH = (24 + productNameH + 5 + 5 + productPriceH + 5 + 5);

	$(textArea).css("top", inDescH + "px");

	inDesc.appendChild(textArea);

	//This is the product text
	var productText = document.createElement("P");
	productText.className = "product-text";
	productText.innerText = productTextArr[item];

	textArea.appendChild(productText);

	var productTextH = parseInt($(productText).css("height"));

	if(productTextH > textAreaH)
	{
		var shadow = document.createElement("DIV");
		shadow.className = "overflow-shadow";
		textArea.appendChild(shadow);

		var readMore = document.createElement("BUTTON");
		readMore.className = "read-more";
		readMore.innerText = "Read More";

		textArea.appendChild(readMore);
		var readMoreW = parseInt($(readMore).css("width"));

		$(readMore).css("left", ((productDescriptionW / 2) - (readMoreW / 2)) + "px");	
	}
	else
	{
		textAreaH = productTextH;
		$(textArea).css("height", textAreaH + "px");
	}

	//This will size the rest of the product card that is left

	inDescH += textAreaH + 8;

	$(productLabel).css("top", inDescH + "px");
	$(productAmount).css("top", (inDescH - 2) + "px");

	inDescH += (5 + productAmountH);

	$(productButton).css("top", inDescH + "px");

	console.log(productCard.childNodes);


	inDescH += (5 + productButtonH + 24);

	$(inDesc).css("height", inDescH + "px");
	$(inDesc).css("top", ((productDescriptionH / 2) - (inDescH / 2)) + "px")
}

var productCaroselChildren = productCarosel.childNodes;
for(var i = 0; i < productNameArr.length; i++)
{
	createProductCards(i);
	$(productCaroselChildren[i]).on("mouseenter", function(){
		var productCardW = parseInt($(this).css("width"));
		productCardW += 10;
		var productCardH = parseInt($(this).css("height"));
		productCardH += 10;
		var productCardL = parseInt($(this).css("left"));
		productCardL -= 5;
		var productCardT = parseInt($(this).css("top"));
		productCardT -= 5;
		$(this).css("width", productCardW + "px");
		$(this).css("height", productCardH + "px");
		$(this).css("left", productCardL + "px");
		$(this).css("top", productCardT + "px");
		$(this).css("box-shadow", "0 0 5px rgba(0,0,0,0.7)");
		//--------------
		var cardImage = this.childNodes[0];
		var cardImageW = parseInt($(cardImage).css("width")) + 10;
		var cardImageH = parseInt($(cardImage).css("height")) + 10;

		$(cardImage).css("height", cardImageH + "px");
		$(cardImage).css("width", cardImageW + "px");
		//---------------	
		var cardDescription = this.childNodes[1];
		var cardDescriptionT = parseInt($(cardDescription).css("top")) + 10;
		var cardDescriptionL = parseInt($(cardDescription).css("left")) + 5;

		$(cardDescription).css("top", cardDescriptionT + "px");
		$(cardDescription).css("left", cardDescriptionL + "px");
	});

	$(productCaroselChildren[i]).on("mouseleave", function(){
		var productCardW = parseInt($(this).css("width"));
		productCardW -= 10;
		var productCardH = parseInt($(this).css("height"));
		productCardH -= 10;
		var productCardL = parseInt($(this).css("left"));
		productCardL += 5;
		var productCardT = parseInt($(this).css("top"));
		productCardT += 5;
		$(this).css("width", productCardW + "px");
		$(this).css("height", productCardH + "px");
		$(this).css("left", productCardL + "px");
		$(this).css("top", productCardT + "px");
		$(this).css("box-shadow", "0 0 3px rgba(0,0,0,0.2)");
		//--------------
		var cardImage = this.childNodes[0];
		var cardImageW = parseInt($(cardImage).css("width")) - 10;
		var cardImageH = parseInt($(cardImage).css("height")) - 10;

		$(cardImage).css("height", cardImageH + "px");
		$(cardImage).css("width", cardImageW + "px");
		//---------------	
		var cardDescription = this.childNodes[1];
		var cardDescriptionT = parseInt($(cardDescription).css("top")) - 10;
		var cardDescriptionL = parseInt($(cardDescription).css("left")) - 5;

		$(cardDescription).css("top", cardDescriptionT + "px");
		$(cardDescription).css("left", cardDescriptionL + "px");
	});
}



/*function checkWindowSizeH()
{

}*/



/*
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
	//This is the product cards height
	var productCards = document.getElementsByClassName("product-card");
	productCards[0].style.height = "27em";
	var productCardsH = parseInt($(productCards[0]).css("height"));
	productCards[0].style.top = ((productCaroselH / 2) - (productCardsH / 2)) + "px";

	//This will be the side description 
	var sideDescriptions = document.getElementsByClassName("side-description");
	sideDescriptions[0].style.left = "calc(25em + 20px)";
	sideDescriptions[0].style.height = productCardsH + "px";
	sideDescriptions[0].style.width = "25em";
	sideDescriptions[0].style.top = ((productCaroselH / 2) - (productCardsH / 2)) + "px";

	var buttonSection = document.getElementsByClassName("button-section");
	var buttonSectionH = parseInt($(buttonSection[0]).css("height"));

	var descriptionScroll = document.getElementsByClassName("description-scroll");
	var descriptionScrollH = productCardsH - buttonSectionH;
	$(descriptionScroll[0]).css("height", descriptionScrollH + "px");
	
}

styleSideDescription();

var productCards = document.getElementsByClassName("product-card");

var clickCurrent = 0;

for(var i = 0; i < productCards.length; i++)
{
	$(productCards[i]).on("mouseenter", function(){
		if(!(window.clickCurrent % 2))
		{
			var productCardH = parseInt($(this).css("height")) + 10;
			var productCardW = parseInt($(this).css("width")) + 10;
			var productCardL = parseInt($(this).css("left")) - 5;
			var productCardT = parseInt($(this).css("top")) - 5;
			$(this).css("height", productCardH + "px");
			$(this).css("width", productCardW + "px");
			$(this).css("left", productCardL + "px");
			$(this).css("top", productCardT + "px");
		}
	});

	$(productCards[i]).on("mouseleave", function(){
		if(!(window.clickCurrent % 2))
		{
			var productCardH = parseInt($(this).css("height")) - 10;
			var productCardW = parseInt($(this).css("width")) - 10;
			var productCardL = parseInt($(this).css("left")) + 5;
			var productCardT = parseInt($(this).css("top")) + 5;
			$(this).css("height", productCardH + "px");
			$(this).css("width", productCardW + "px");
			$(this).css("left", productCardL + "px");
			$(this).css("top", productCardT + "px");
		}
	});

	$(productCards[i]).on("click", function(){
		window.clickCurrent += 1;
	});

}*/


//styleSideDescription();



// /alert(productNamesW);





