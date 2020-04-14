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
var productCardsArr = new Array();

//This is the function to create the different product cards
var productCardLeft = 10;
var smallSize = 0;
var smallHeight = 0;

function heightChangeFunction(wH, productCards)
{
	window.productAreaH = wH - window.companyHeaderH - 60 - window.viewButtonH - window.viewButtonB - 20;
	$(window.productArea).css("height", productAreaH);
	$(window.productArea).css("bottom", (((wH / 2) - (window.productAreaH / 2)) - 5) + "px");
	window.productCaroselH = parseInt($(window.productCarosel).css("height"));

	//This will change the sizes of the product cards, and the description in the different cards
	for(var i = 0; i < window.productNameArr.length; i++)
	{
		if(window.smallSize == 0)
		{
			//This changes the product card styles
			$(productCards[i]).css("height", (0.9 * window.productCaroselH) + "px");
			$(productCards[i]).css("top", (0.05 * window.productCaroselH) + "px");
			//Product children a.k.a. description area
			var productChildren = productCards[i].childNodes[1];

			var descriptionAreaH = parseInt($(productChildren).css("height"));
			var descriptionAreaW = parseInt($(productChildren).css("width"));
			var inDescH = parseInt($(productChildren.childNodes[0]).css("height"));

			var inDescChildren = productChildren.childNodes[0].childNodes;

			//This include the padding around the on top and on the bottom of the text
			var productNameH = parseInt($(productChildren.childNodes[0].childNodes[0]).css("height")) + 24 + 5; //This include the padding around the 
			var productPriceH = parseInt($(productChildren.childNodes[0].childNodes[1]).css("height")) + 5 + 5 + 5; //This also includes the top margin for the text area
			var productLabelH = parseInt($(productChildren.childNodes[0].childNodes[2]).css("height")) + 5 + 5 + 5; //This include the bottom padding of the text area
			var productButtonH = parseInt($(productChildren.childNodes[0].childNodes[4]).css("height")) + 5 + 24;

			if(inDescH < descriptionAreaH)
			{
				$(productChildren.childNodes[0]).css("top", ((descriptionAreaH / 2) - (inDescH / 2)) + "px");
			}
			else if(inDescH >= descriptionAreaH) 
			{
				$(productChildren.childNodes[0]).css("height", descriptionAreaH + "px");
				var remainingTextAreaH = descriptionAreaH - productNameH - productPriceH - productLabelH - productButtonH;
				var textAreaChildren = productChildren.childNodes[0].childNodes[5].childNodes.length;
				var productTextH = parseInt($(productChildren.childNodes[0].childNodes[5].childNodes[0]).css("height"));
				if((productTextH > remainingTextAreaH) && (textAreaChildren != 3))
				{
					var shadow = document.createElement("DIV");
					shadow.className = "overflow-shadow";
					productChildren.childNodes[0].childNodes[5].appendChild(shadow);

					var readMore = document.createElement("BUTTON");
					readMore.className = "read-more";
					readMore.innerText = "Read More";

					productChildren.childNodes[0].childNodes[5].appendChild(readMore);
					var readMoreW = parseInt($(readMore).css("width"));

					$(readMore).css("left", ((descriptionAreaW / 2) - (readMoreW / 2)) + "px");
				}
				if((remainingTextAreaH < 70) && (textAreaChildren == 3))
				{
					window.smallSize = 1;
					$(productCards[i].childNodes[1].childNodes[0]).css("display", "none");
				}
				else
				{
					$(productChildren.childNodes[0].childNodes[5]).css("height", remainingTextAreaH + "px");
					var textAreaT = parseInt($(productChildren.childNodes[0].childNodes[5]).css("top"));
					textAreaT += (remainingTextAreaH + 5 + 5);
					$(productChildren.childNodes[0].childNodes[2]).css("top", textAreaT + "px");
					$(productChildren.childNodes[0].childNodes[3]).css("top", (textAreaT - 2) + "px");
					textAreaT += (productLabelH + 5 + 5 + 5 - 24);
					$(productChildren.childNodes[0].childNodes[4]).css("top", textAreaT + "px");
				}
			}
		}
		else
		{
			$(productCards[i].childNodes[1].childNodes[0]).css("display", "none");
			var productChildrenLength = productCards[i].childNodes[1].childNodes.length;
			
			if(productChildrenLength == 1)
			{
				var whatToDo = document.createElement("DIV");
				whatToDo.className = "whatToDo";

				productCards[i].childNodes[1].appendChild(whatToDo);

				/*var whatToDoH = parseInt(whatToDo.scrollHeight);

				var productImageH = parseInt($(productCards[i].childNodes[0]).css("height")) + parseInt($(productCards[i].childNodes[0]).css("top"));

				$(productCards[i]).css("height", (productImageH + whatToDoH) + "px");

				$(productCards[i].childNodes[1]).css("height", whatToDoH + "px");
				*/
				var toDoText = document.createElement("DIV");
				toDoText.className = "toDoText";
				toDoText.innerText = "Hover of the product for more information";

				whatToDo.appendChild(toDoText);

				var whatToDoH = parseInt(whatToDo.scrollHeight);
				var productImageH = parseInt($(productCards[i].childNodes[0]).css("height")) + parseInt($(productCards[i].childNodes[0]).css("top"));
				console.log(parseInt($(productCards[i].childNodes[0]).css("height")));
				console.log(parseInt($(productCards[i].childNodes[0]).css("top")))
				$(productCards[i]).css("height", (productImageH + whatToDoH) + "px");
				window.smallHeight = productImageH + whatToDoH;
				$(productCards[i]).css("top", ((window.productCaroselH / 2) - (smallHeight / 2)) + "px");
			}
			$(productCards[i]).css("top", ((window.productCaroselH / 2) - (smallHeight / 2)) + "px");
		}
	}
}

$(window).on("resize", function(){
	heightChangeFunction(window.innerHeight, productCardsArr);
});

function createProductCards(item)
{
	//This will create the prdouct card
	var productCard = document.createElement("DIV");
	productCard.className = "product-card";

	productCardsArr[item] = productCard;

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





