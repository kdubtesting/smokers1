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

$(quickStoreSection).css("height", quickStoreSectionH + "px");
$(quickStoreSection).css("bottom", "40px");

//this will be the styles for the SLIDER AREA as well as global variables
var sliderArea = document.getElementById("slider-area");
var sliderH = quickStoreSectionH - optionsSectionH - quickStoreTitleH - quickStoreDescriptionH;
$(sliderArea).css("height", sliderH + "px");

//this is the TOTAL SLIDER WIDTH variable, it keeps track of how long the interior of the slider
//area is, especially when items are added.
//It will initially be 10 pixels because it accounts for the left positioning
var totalSliderWidth = 10;

//This variable is the actual PRODUCT CARD array, that will hold the unique divs, it is usefull
//for later styles that need to access the children of this product card
var productCardsArr = new Array();

//This is the generic max height for the product card,
//It will never get bigger then the height found when the
//createMaxProductCard function is called
var productCardMaxHeight = 0;

//This global variable for the TOP position value
//for the max product card height, but it should work
//for all product card height
var productCardTop = 0;

/*-----------------------------------------*/
/*----------------------------------------*/
/*-----------------------------------------*/
/*-----------------------------------------*/
/*-----------------------------------------*/

/*------------------------------------------*/
//This function will create the content in the description area
/*------------------------------------------*/
function createDescriptionItems(productDesc)
{
	//Create the product name
	var productName = document.createElement("DIV");
	productName.className = "product-name";
	productName.innerText = "Cigarette 1";

	productDesc.appendChild(productName);
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

	//Create the product image
	var productImage = document.createElement("DIV");
	productImage.className = "product-image";

	productCard.appendChild(productImage);

	//These variables from the product image are referenced to create the product card
	//height desired
	var productImageH = parseInt($(productImage).css("height"));
	var productImageT = parseInt($(productImage).css("top"));

	//create the product description
	var productDescription = document.createElement("DIV");
	productDescription.className = "product-description";

	productCard.appendChild(productDescription);

	var productDescriptionH = parseInt($(productDescription).css("height"));

	createDescriptionItems(productDescription);

	//This is the styles for the product card, as well as declaring the global variable
	//for the max height of the product card
	productCardMaxHeight = productImageH + (2 * productImageT) + productDescriptionH;
	console.log(productCardMaxHeight);
	productCardTop = (parentHeight / 2) - (productCardMaxHeight / 2);
	console.log(productCardTop);

	$(productCard).css("height", productCardMaxHeight + "px");
	$(productCard).css("top", productCardTop + "px");

	//This will save the created div in the 
	productArr[item] = productCard
}

createMaxProductCard(productCardsArr, sliderArea, sliderH, 0);
