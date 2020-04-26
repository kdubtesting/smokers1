/*-----------------------------------------*/
/*----------------------------------------*/
/*-----------------------------------------*/
//This will be some global variables and styles
/*-----------------------------------------*/
/*-----------------------------------------*/

//These are some global variables for the QUICK STORE TITLE and QUICK STORE DESCRIPTION	
var quickStoreTitle = document.getElementById("quick-store-title");
var quickStoreTitleH = parseInt($(quickStoreTitle).css("height")) + 10 + 10;
var quickStoreDescription = document.getElementById("quick-store-description");
var quickStoreDescriptionH = parseInt($(quickStoreDescription).css("height")) + 10;

//These are some styles for the VIEW BUTTON as well as some global variables
var viewButton = document.getElementById("view-store");
var viewButtonH = parseInt(viewButton.scrollHeight) + 4;

//These are some styles for the OPTIONS BUTTON as well as some global variables
var optionsButton = document.getElementById("options-button");
$(optionsButton).css("height", viewButtonH + "px");
$(optionsButton).css("width", viewButtonH + "px");

var optionsButtonR = parseInt($(optionsButton).css("right"));

//This will be the LEFT and RIGHT BUTTON
var rightClick = document.getElementById("right-click");
$(rightClick).css("height", viewButtonH + "px");
$(rightClick).css("width", viewButtonH + "px");
$(rightClick).css("right", (optionsButtonR + viewButtonH + 10) + "px");

var leftClick = document.getElementById("left-click");
$(leftClick).css("height", viewButtonH + "px");
$(leftClick).css("width", viewButtonH + "px");
$(leftClick).css("right", (optionsButtonR + viewButtonH + 10 + viewButtonH + 10) + "px");

//These are some styles for the OPTIONS SECTION and the global variable
var optionsSection = document.getElementById("options-section");
var optionsSectionH = parseInt($(optionsSection).css("height"));

//This will be the COMPANY HEADER styles and global variables
var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));
var menuH = companyHeaderH + 60;


//This will be the QUICK STORE SECTION styles and global variables
var quickStoreSection = document.getElementById("quick-store-section");
var quickStoreSectionH = window.innerHeight - menuH - 60;
var quickStoreSectionW = parseInt($(quickStoreSection).css("width"));

$(quickStoreSection).css("height", quickStoreSectionH + "px");
$(quickStoreSection).css("bottom", "40px");

//this will be the styles for the SLIDER AREA as well as global variables
var sliderArea = document.getElementById("slider-area");
var sliderH = quickStoreSectionH - optionsSectionH - quickStoreTitleH - quickStoreDescriptionH;
$(sliderArea).css("height", sliderH + "px");

//This will create the in slider area
var inSlider = document.createElement("DIV");
inSlider.id = "in-slider-area";
var inSliderW = 0; //It is initially that, but that will change as items are added to the slider

sliderArea.appendChild(inSlider);

//this is the TOTAL SLIDER WIDTH variable, it keeps track of how long the interior of the slider
//area is, especially when items are added.
//It will initially be 10 pixels because it accounts for the left positioning
var totalSliderWidth = 13;

//This variable is the actual PRODUCT CARD array, that will hold the unique divs, it is usefull
//for later styles that need to access the children of this product card
var productCardsArr = new Array();

//This is generic value of the width for the card, it will
//be set when the card is created. Otherwise the card will resize to a smaller size
var productCardMaxWidth = 0;

//This will be the minimum width, it is created as the cards are created,
//and it will be based on the interior parts of the product description
var productCardMinWidth = 48; //3 em of padding 

//This will be some global values product image
var productImgH = 0; //The height will be the same as the width
var productImgT = 0;

//This global variable will be used when the screen is resizing vertically
var resizeCardHeight = 0;

//These global variables will hold the text that will be added to the product cards
//These are the product names
var productNamesArr = ["Cigarette 1", "Cigar 1", "Bong 1", "Cigarette 2", "Bong 2", "Cigar 3"];

//These are the product prices
var productPricesArr = ["$$.$$", "$$$.$$", "$$$$.$$", "$.$$", "$$$$$$.$$", "$$$$.$$"];

/*-----------------------------------------*/
/*----------------------------------------*/
/*-----------------------------------------*/
/*-----------------------------------------*/
/*-----------------------------------------*/

/*------------------------------------------*/
//This function will create the styles and functionality for the quantity section
/*------------------------------------------*/
function qtySectionFunc(qtySection)
{
	//Create the qty label
	var qtyLabel = document.createElement("LABEL");
	qtyLabel.className = "qty-label";
	qtyLabel.for = "qty-home-input";
	qtyLabel.innerText = "qty: ";

	qtySection.appendChild(qtyLabel);

	//Create the qty input
	var qtyInput = document.createElement("INPUT");
	qtyInput.className = "qty-input";
	qtyInput.type = "number";
	qtyInput.name = "qty-home-input";
	qtyInput.min = 1;
	qtyInput.value = 1;

	qtySection.appendChild(qtyInput);

	//Declare the quantity height here because the tallest object will have
	//been implemented here
	var qtySectionH = parseInt(qtySection.scrollHeight);

	//This will be the plus & minus buttons for the qty
	var qtyPlus = document.createElement("DIV");
	qtyPlus.className = "qty-plus";

	qtyPlus.style.height = (qtySectionH - 6) + "px";
	qtyPlus.style.width = (qtySectionH - 6) + "px";
	qtyPlus.style.right = (qtySectionH + 2) + "px";

	var qtyMinus = document.createElement("DIV");
	qtyMinus.className = "qty-minus";

	qtyMinus.style.height = (qtySectionH - 6) + "px";
	qtyMinus.style.width = (qtySectionH - 6) + "px";
	qtyMinus.style.right = "3px";

	qtySection.appendChild(qtyPlus);
	qtySection.appendChild(qtyMinus);

	//This will be some functionality for the plus & minus buttons
	//as well as the input area

	$(qtyPlus).on("mousedown", function(e){
		e.preventDefault();
		qtyInput.value = parseInt(qtyInput.value) + 1;
	});

	$(qtyMinus).on("mousedown", function(e){
		e.preventDefault();
		if(qtyInput.value > 1 && qtyInput.value != "")
		{
			qtyInput.value = parseInt(qtyInput.value) - 1;
		}
	});

	$(qtyInput).on("mouseleave", function(){
		if(this.value == "" || this.value <= 0)
		{
			this.value = 1;
		}
	});

	//This will be some styles for the qty section, because
	//everything here will have already been added, so the final
	//height and width should be made

	qtySectionMT = parseInt($(qtySection).css("margin-top"));
	qtySectionMB = parseInt($(qtySection).css("margin-bottom"));

	qtySectionTH = qtySectionH + qtySectionMT + qtySectionMB; 

	/*----------------------------------------------*/

	return qtySectionTH;
}

/*------------------------------------------*/
//This function will create the content in the description area
/*------------------------------------------*/
function createDescriptionItems(productDesc, item)
{
	//Create a break element
	var br = document.createElement("BR");

	//Create the product name
	var productName = document.createElement("DIV");
	productName.className = "product-name\n";
	productName.innerText = productNamesArr[item];

	productDesc.appendChild(productName);

	//grab some styles from the product name
	var productNameH = parseInt(productName.scrollHeight);
	var productNameMT = parseInt($(productName).css("margin-top"));
	var productNameMB = parseInt($(productName).css("margin-bottom"));

	var productNameTH = productNameH + productNameMT + productNameMB;

	productDesc.appendChild(br);

	/*----------------------------------------------*/

	//Create a break element
	var br = document.createElement("BR");

	//Create the product price
	var productPrice = document.createElement("DIV");
	productPrice.className = "product-price";
	productPrice.innerText = productPricesArr[item];

	productDesc.appendChild(productPrice);

	//grab some styles from the product name
	var productPriceH = parseInt(productPrice.scrollHeight);
	var productPriceMT = parseInt($(productPrice).css("margin-top"));
	var productPriceMB = parseInt($(productPrice).css("margin-bottom"));

	var productPriceTH = productPriceH + productPriceMT + productPriceMB;

	productDesc.appendChild(br);

	/*----------------------------------------------*/

	//Create a break element
	var br = document.createElement("BR");

	//Create the qty section
	var qtySection = document.createElement("DIV");
	qtySection.className = "qty-section";

	productDesc.appendChild(qtySection);

	productDesc.appendChild(br);

	//This function will handle all the seperate qtysection functions and styles
	var qtySectionTH = qtySectionFunc(qtySection);

	//Create the product button
	var productButton = document.createElement("BUTTON");
	productButton.className = "product-button";
	productButton.innerText = "Buy";

	productDesc.appendChild(productButton);

	//grab some styles from the product name
	var productButtonH = parseInt($(productButton).css("height"));
	var productButtonMT = parseInt($(productButton).css("margin-top"));
	var productButtonMB = parseInt($(productButton).css("margin-bottom"));

	var productButtonTH = productButtonH + productButtonMT + productButtonMB;

	/*----------------------------------------------*/

	var descH = productNameTH + productPriceTH + qtySectionTH + productButtonTH;

	$(productDesc).css("height", descH + "px");

	/*----------------------------------------------*/
	//This section will be the minimum width that the card can size to, based
	//on the width of the content
	var largestWidth = 0;
	for(var i = 0; i < productDesc.childNodes.length; i++)
	{
		var itemW = parseInt($(productDesc.childNodes[i]).css("width"));
		if(itemW >= largestWidth)
		{
			largestWidth = itemW;
		}
	}

	productCardMinWidth = (largestWidth + 48);

	return descH;
}

/*------------------------------------------*/
//This function will create the generic, and largest productCard
/*------------------------------------------*/
function createMaxProductCard(productArr, parentArea, parentHeight, item)
{
	//parentArea === sliderArea
	//parentHeight === sliderH
	//item === exact item to be created

	/*----------------------------------------*/

	//Create the product card
	var productCard = document.createElement("DIV");
	productCard.className = "product-card";

	parentArea.appendChild(productCard);

	productCardMaxWidth = parseInt($(productCard).css("width"));
	$(productCard).css("left", totalSliderWidth + "px");
	totalSliderWidth += (productCardMaxWidth + 13);
	inSliderW += (productCardMaxWidth + 13);

	$(inSlider).css("width", inSliderW + "px");

	//Create the product image
	var productImage = document.createElement("DIV");
	productImage.className = "product-image";

	productCard.appendChild(productImage);

	//These variables from the product image are referenced to create the product card
	//height desired
	var productImageH = parseInt($(productImage).css("height"));
	var productImageT = parseInt($(productImage).css("top"));

	productImgH = productImageH;
	productImgT = productImageT;

	//create the product description
	var productDescription = document.createElement("DIV");
	productDescription.className = "product-description";

	productCard.appendChild(productDescription);

	var productDescriptionH = createDescriptionItems(productDescription, item);

	//This is the styles for the product card, as well as declaring the global variable
	//for the max height of the product card
	var productCardMaxWidth = parseInt($(productCard).css("width"));
	var productCardH = productImageH + (2 * productImageT) + productDescriptionH;

	$(productCard).css("height", productCardH + "px");

	//This will save the created div in the 
	productArr[item] = productCard
}

function moveSliderOpts(totalSliderWidth, leftButton, rightButton,  productCards, productWidth)
{
	//Call this function to properly style the directional buttons
	//clickStyles(currentCardPosition, leftButton, rightButton);


}

function clickStyles(currentPos, leftButton, rightButton)
{
}

moveSliderOpts(totalSliderWidth, leftClick, rightClick, productCardsArr, productCardMaxWidth);

//This will size the window properly on the load
$(window).on("load", function(){

	for(var i = 0; i < productNamesArr.length; i++)
	{
		createMaxProductCard(productCardsArr, inSlider, sliderH, i);
	}

	var sizedRight = false;
	var productCardH = parseInt($(productCardsArr[0]).css("height"));
	var productImage = productCardsArr[0].childNodes[0];
	var productImageW = parseInt($(productImage).css("width"));
	var productImageT = parseInt($(productImage).css("top"));
	var minCardH = 0;

	while(sizedRight == false)
	{
		if(sliderH > minCardH)
		{
			if(productCardH >= sliderH)
			{
				
				productImageW = productImageW - 48;

				var productDescription = productCardsArr[0].childNodes[1];
				var productDescriptionH = parseInt($(productDescription).css("height"));
				if(productImageW < productCardMinWidth)
				{
					console.log("this ran");
					productImageW = productCardMinWidth
					console.log(productImageW);
					console.log(productImageW + 48);

					productCardH = productImageW + (2 * productImageT) + productDescriptionH;
					minCardH = productCardH;
					console.log(minCardH);
				}
				else
				{
					productCardH = productImageW + (2 * productImageT) + productDescriptionH;
				}
			}
			else
			{
				sizedRight = true;
			}
		}
		else
		{
			console.log("we have run into a problem")
			sizedRight = true;
		}
	}


	var newLeft = 13;
	inSliderW = 13;
	for(var i = 0; i < productCardsArr.length; i++)
	{
		var productCard = productCardsArr[i];

		productImage = productCardsArr[i].childNodes[0];

		$(productImage).css("width", productImageW + "px");
		$(productImage).css("height", productImageW + "px");

		console.log(productImageW);


		var productDescription = productCardsArr[i].childNodes[1];
		var productDescriptionH = parseInt($(productDescription).css("height"));
		$(productDescription).css("width", productImageW + "px");

		var productCardW = productImageW + 48;

		productCardH = productImageW + (2 * productImageT) + productDescriptionH;

		$(productCard).css("height", productCardH + "px");
		$(productCard).css("width", productCardW + "px");

		$(productCard).css("left", newLeft + "px");
		$(inSlider).css("width", inSliderW + "px");
		inSliderW += (productCardW + 13);
		newLeft += (productCardW + 13);

		var productCardTop = (sliderH / 2) - (productCardH / 2);
		$(productCard).css("top", productCardTop + "px");
	}

	$(inSlider).css("width", inSliderW + "px");
	
});