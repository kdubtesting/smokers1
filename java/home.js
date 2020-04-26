/*---------------------------*/
/*---------------------------*/
//These will be some of the global variables
/*---------------------------*/
/*---------------------------*/

//These are some of the global variables for the MENU AREA
var menuArea = document.getElementById("menu-area");

/*---------------------------*/
//These are some of the global variables for the RELATIVE AREA
var relativeArea = document.getElementById("relative-section");

/*---------------------------*/
//These are some of the global variables for the QUICK STORE SECTION
var quickStoreSection = document.getElementById("quick-store-section");

//These are some of the global variables for the content of the QUICK quickStoreSection
//This will be for the WRITTEN PARTS
var quickStoreTitle = document.getElementById("quick-store-title");
var quickStoreDesc = document.getElementById("quick-store-description");

//This will be for the SLIDER AREA
var sliderArea = document.getElementById("slider-area");
var inSlider = null;
var clickCount = 0;
var slideL = 0;
var movedToEnd = false;

//This will be for the OPTIONS AREA
var optionsArea = document.getElementById("options-section");
var viewStore = document.getElementById("view-store");
var leftButton = document.getElementById("left-click");
var rightButton = document.getElementById("right-click");
var optionsButton = document.getElementById("options-button");

/*---------------------------*/
//These are some of the global variables that will be used for the PRODUCT CARD
//and the resulting SLIDER AREA

var productArr = new Array();
var productMinW = 0;
var productMaxW = 0;

//This will be associated with the min width because it is loaded when that is created
var productMaxH = 0

//These will be some arrays that will fill out the product cards will info
var productName = new Array();
var productPrice = new Array();

/*---------------------------*/
//These global variables are for the vertical resizing of the screen
var growingScreenV = true;
var shrinkingScreenV = true;
var previousSize = 0; //This will be for the screen resizinng

/*---------------------------*/
/*---------------------------*/
/*---------------------------*/
/*---------------------------*/

function qtySection(productQty)
{
	/*---------------------------*/
	//This will fill the QTY SECTION, but it will also set the styles 
	//for the SMALLEST PRODUCT WIDTH, because this will mostly likely be the largest item
	/*---------------------------*/

	/*---------------------------*/
	//Create the QTY LABEL
	var qtyLabel = document.createElement("LABEL");
	qtyLabel.innerText = "Qty: ";
	qtyLabel.className = "qty-label";
	qtyLabel.for = "qty-input";

	productQty.appendChild(qtyLabel);

	/*---------------------------*/
	//Create the QTY INPUT
	var qtyInput = document.createElement("INPUT");
	qtyInput.className = "qty-input";
	qtyInput.name = "quantity input";
	qtyInput.type = "number";
	qtyInput.min = "1";
	qtyInput.value = "1";

	productQty.appendChild(qtyInput);

	/*---------------------------*/
	//Create the QTY PLUS

	/*---------------------------*/
	//Create the QTY MINUS
}

function createDesc(productDesc, item)
{
	/*---------------------------*/
	//This will create the PRODUCT DESCRIPTION items, and will style it with generic styles, 
	//mostly the LARGEST STYLES, but these will carry over to the rest of the styles
	/*---------------------------*/

	//Create the br block
	var br = document.createElement("BR");

	/*---------------------------*/
	//Create the PRODUCT NAME
	var productName = document.createElement("H3");
	productName.className = "product-name";
	productName.innerText = window.productName[item];

	productDesc.appendChild(productName);
	productDesc.appendChild(br);

	if(parseInt($(productName).css("width")) > window.productMinW)
	{
		window.productMinW = parseInt($(productName).css("width"));
	}

	/*---------------------------*/
	//Create the PRODUCT PRICE
	br = document.createElement("BR");

	var productPrice = document.createElement("H4");
	productPrice.className = "product-price";
	productPrice.innerText = window.productPrice[item];

	productDesc.appendChild(productPrice);
	productDesc.appendChild(br);

	if(parseInt($(productPrice).css("width")) > window.productMinW)
	{
		window.productMinW = parseInt($(productPrice).css("width"));
	}

	/*---------------------------*/
	//Create the PRODUCT QTY SECTION
	br = document.createElement("BR");

	var productQty = document.createElement("DIV");
	productQty.className = "qty-section";

	productDesc.appendChild(productQty);
	productDesc.appendChild(br);

	//This function will fill the PRODUCT QTY
	qtySection(productQty);

	if(parseInt($(productQty).css("width")) > window.productMinW)
	{
		window.productMinW = parseInt(productQty.scrollWidth);
	}

	/*---------------------------*/
	//Create the PRODUCT BUY BUTTON
	var productBuy = document.createElement("BUTTON");
	productBuy.className = "product-button";
	productBuy.innerText = "buy";

	productDesc.appendChild(productBuy);

	if(parseInt($(productBuy).css("width")) > window.productMinW)
	{
		window.productMinW = parseInt($(productBuy).css("width"));
	}
}

function createProductImg(productImg)
{
	//Create the image count icon
	var productImgIcon = document.createElement("DIV");
	productImgIcon.className = "product-img-icon"

	productImg.appendChild(productImgIcon);

	//create the image icon text;
	var productIconText = document.createElement("DIV");
	productIconText.className = "icon-text";
	productIconText.innerText = "1/10";

	productImgIcon.appendChild(productIconText);

	//left and right movement for imaages
	var leftMove = document.createElement("DIV");
	leftMove.className = "left-move";

	productImg.appendChild(leftMove);

	$(leftMove).css("top", ((parseInt($(productImg).css("height")) / 2) - (parseInt($(leftMove).css("height")) / 1)) + "px");
	$(leftMove).css("left", "10px");

	var rightMove = document.createElement("DIV");
	rightMove.className = "right-move";

	productImg.appendChild(rightMove);

	$(rightMove).css("top", ((parseInt($(productImg).css("height")) / 2) - (parseInt($(leftMove).css("height")) / 1)) + "px");
	$(rightMove).css("right", "10px");

}

function createProductCard(inSlider, item)
{
	/*---------------------------*/
	//This will create the PRODUCT CARD, and will style it with generic styles, 
	//mostly the LARGEST STYLES
	/*---------------------------*/

	/*---------------------------*/
	//Create the PRODUCT CARD	
	var productCard = document.createElement("DIV");
	productCard.className = "product-card";

	inSlider.appendChild(productCard);
	
	/*---------------------------*/
	//Create the PRODUCT IMAGE
	var productImage = document.createElement("DIV");
	productImage.className = "product-image";

	productCard.appendChild(productImage);

	createProductImg(productImage);

	var productImageW = parseInt($(productImage).css("width"));

	/*---------------------------*/
	//Create the PRODUCT DESCRIPTION
	var productDesc = document.createElement("DIV");
	productDesc.className = "product-description";

	productCard.appendChild(productDesc);

	createDesc(productDesc, item);

	var productDescH = parseInt($(productDesc).css("height"));

	/*---------------------------*/
	//This will style the product card, as well as fill up some of the global variables
	$(productCard).css("height", (productImageW + 48 + productDescH) + "px");

	window.productMaxW = productImageW;
}

//This will load the document
$(window).on("load", function(){
	/*---------------------------*/
	//Set the global variable for previous size
	var previousSize = window.innerHeight;

	productName = ["Cigarette 1", "Cigar 1", "Bong 2", "Bong 1", "Cigarette 2", "Bong 3"];
	productPrice = ["$.$$", "$$$.$$", "$$$$.$$", "$$$.$$", "$$.$$", "$$$$.$$"];

	/*---------------------------*/
	//This creates the IN SLIDER AREA
	inSlider = document.createElement("DIV");
	inSlider.id = "in-slider-area";

	sliderArea.appendChild(inSlider);

	var inSliderW = 13;

	for(var i = 0; i < 6; i++)
	{
		createProductCard(inSlider, i);
		$(inSlider.childNodes[i]).css("left", inSliderW + "px");
		var productW = parseInt($(inSlider.childNodes[i]).css("width"));
		inSliderW += (productW + 13);
	}

	/*var productW = parseInt($(inSlider.childNodes[1]).css("width"));
	inSliderW += (productW + 13);*/

	$(inSlider).css("width", inSliderW + "px");

	productMinW += 48;

	var productH = parseInt($(inSlider.childNodes[0]).css("height"));
	productMaxH = productH;

	/*---------------------------*/
	//This will style the RELATIVE SECTION

	var menuAreaH = parseInt($(menuArea).css("height"));

	var relativeH = window.innerHeight - menuAreaH;

	$(relativeArea).css("height", relativeH + "px");
	$(relativeArea).css("margin-top", menuAreaH + "px");


	/*---------------------------*/
	//This will not style the QUICK STORE

	var quickStoreT = 48;
	var initialDisplayH = relativeH - 96;

	$(quickStoreSection).css("top", quickStoreT + "px");
	$(quickStoreSection).css("height", initialDisplayH + "px");

	/*---------------------------*/
	//Get the slider height here
	var quickStoreTitleH = parseInt($(quickStoreTitle).css("height")) + 10 + 10;
	var quickStoreDescH = parseInt($(quickStoreDesc).css("height")) + 10;

	var optionsAreaH = parseInt($(optionsArea).css("height"));

	/*---------------------------*/
	//This will be the temporary height, and can change when the site loads
	var sliderH = initialDisplayH - quickStoreTitleH - quickStoreDescH - optionsAreaH;

	$(sliderArea).css("height", sliderH + "px");

	var rightSize = true;

	//This will resize both the width and the height
	var productImgW = parseInt($(inSlider.childNodes[0].childNodes[0]).css("width"));

	while(rightSize)
	{
		//reset insliderW here
		inSliderW = 13;
		if(productImgW > productMinW)
		{
			if(productH > sliderH)
			{	
				productImgW -= 48;

				for(var i = 0; i < inSlider.childNodes.length; i++)
				{
					//resize the product image as it is shrinking
					$(inSlider.childNodes[i].childNodes[0]).css("width", productImgW + "px");
					$(inSlider.childNodes[i].childNodes[0]).css("height", productImgW + "px");

					//resize the product description
					$(inSlider.childNodes[i].childNodes[1]).css("width", productImgW + "px");

					var productDescH = parseInt($(inSlider.childNodes[0].childNodes[1]).css("height"));

					productH = productImgW + 48 + productDescH;

					$(inSlider.childNodes[i]).css("width", (productImgW + 48) + "px");
					$(inSlider.childNodes[i]).css("height", productH + "px");
					$(inSlider.childNodes[i]).css("left", inSliderW + "px");
					inSliderW += (productImgW + 48 + 13);
				}

				/*var productW = parseInt($(inSlider.childNodes[0]).css("width"));

				inSliderW += (productW + 13);*/

				$(inSlider).css("width", inSliderW + "px");
			}
			else
			{
				rightSize = false;
			}
		}
		else
		{
			for(var i = 0; i < inSlider.childNodes.length; i++)
			{
				//This will be the minimum size that the screen can be vertically 
				//before you need to start scrolling
				var productImg = inSlider.childNodes[i].childNodes[0];
				var productDesc = inSlider.childNodes[i].childNodes[1];
				var productDescH = parseInt($(inSlider.childNodes[0].childNodes[1]).css("height"));

				$(productImg).css("width", productMinW + "px");
				$(productImg).css("height", productMinW + "px");
				$(productDesc).css("width", productMinW + "px");

				var smallProductH = productMinW + 48 + productDescH;
				var smallProductW = productMinW + 48;

				//set the productH
				productH = smallProductH;

				$(inSlider.childNodes[i]).css("width", smallProductW + "px");
				$(inSlider.childNodes[i]).css("height", smallProductH + "px");

				$(inSlider.childNodes[i]).css("left", inSliderW + "px");
				inSliderW += (smallProductW + 13);
			}

			/*var productW = parseInt($(inSlider.childNodes[0]).css("width"));

			inSliderW += (productW + 13);*/

			$(inSlider).css("width", inSliderW + "px");

			//Change the height of the slider area
			var newSliderH = smallProductH + 13;

			//Set the slider h
			sliderH = newSliderH;

			$(sliderArea).css("height", newSliderH + "px");

			//Change the height of the quick store section
			var newQuickStoreH = newSliderH + quickStoreTitleH + quickStoreDescH + optionsAreaH;

			$(quickStoreSection).css("height", newQuickStoreH + "px");

			//Change the height of the relative section
			var newRelativeH = newQuickStoreH + 96; 

			$(relativeArea).css("height", newRelativeH + "px");

			rightSize = false;
		}
	}

	for(var i = 0; i < 6; i++)
	{
		$(inSlider.childNodes[i]).css("top", ((sliderH / 2) - (productH / 2)) + "px");
	}

	/*---------------------------*/
	//Style the options area here
	var viewStoreH = parseInt($(viewStore).css("height"));

	//Set the left, right, and options button sizes here
	$(leftButton).css("height", (viewStoreH-4) + "px");
	$(leftButton).css("width", (viewStoreH-4) + "px");
	$(leftButton).css("top", "10px");
	$(leftButton).css("right", (13 + 13 + 13 + viewStoreH + viewStoreH) + "px");

	$(rightButton).css("height", (viewStoreH-4) + "px");
	$(rightButton).css("width", (viewStoreH-4) + "px");
	$(rightButton).css("top", "10px");
	$(rightButton).css("right", (13 + 13 + viewStoreH) + "px");

	$(optionsButton).css("height", (viewStoreH-4) + "px");
	$(optionsButton).css("width", (viewStoreH-4) + "px");
	$(optionsButton).css("top", "10px");
	$(optionsButton).css("right", "13px");

	/*inSliderW = parseInt($(inSlider).css("width"));
	var quickStoreW = parseInt($(quickStoreSection).css("width"));
	var productCardW = parseInt($(inSlider.childNodes[0]).css("width"));

	clickButtons(inSlider, inSliderW, quickStoreW, leftButton, rightButton, productCardW);
	*/
});


//This will be some screen resizing
$(window).on("resize", function(){

	//There is a slight problem when the screen is immediately snapped, it doesn't resize all the way because
	//This function stops working. I'm thinking to call a seperate function just to check and make sure
	//that the size is correct before continuing, after doing some of the horizontal resizing

	//Some variables will be declared here
	var checkProductH = parseInt($(inSlider.childNodes[0]).css("height"));
	var menuAreaH = parseInt($(menuArea).css("height"));
	var quickStoreTitleH = parseInt($(quickStoreTitle).css("height")) + 10 + 10;
	var quickStoreDescH = parseInt($(quickStoreDesc).css("height")) + 10;

	var optionsAreaH = parseInt($(optionsArea).css("height"));

	if(window.innerHeight > window.previousSize)
	{
		var checkImgW = parseInt($(inSlider.childNodes[0].childNodes[0]).css("width"));
		if(checkImgW >= productMinW)
		{
			shrinkingScreenV = true;
		}

		var currentRelativeSize = parseInt($(relativeArea).css("height"));

		var newRelativeH = window.innerHeight - menuAreaH;

		if(currentRelativeSize <= newRelativeH)
		{
			$(relativeArea).css("height", newRelativeH + "px");

			var newQuickStoreH = newRelativeH - 96;
			$(quickStoreSection).css("height", newQuickStoreH + "px");

			var newSliderH = newQuickStoreH - quickStoreTitleH - quickStoreDescH - optionsAreaH;
			$(sliderArea).css("height", newSliderH + "px");

			for(var i = 0; i < inSlider.childNodes.length; i++)
			{
				$(inSlider.childNodes[i]).css("top", ((newSliderH / 2) - (checkProductH / 2)) + "px");
			}

			if(growingScreenV == true)
			{
				var productImgW = parseInt($(inSlider.childNodes[0].childNodes[0]).css("width")) + 48;

				//This will be used to se the inSlider after it has been resized
				var inSliderL = (-1) * parseInt($(inSlider).css("left"));
				var previousProductW = parseInt($(inSlider.childNodes[0]).css("width")) + 13;
				var multiple = inSliderL / previousProductW;

				if(newSliderH > (checkProductH + 48))
				{
					var inSliderW = 13;
					if(productImgW > productMaxW)
					{
						for(var i = 0; i < inSlider.childNodes.length; i++)
						{
							$(inSlider.childNodes[i].childNodes[0]).css("width", productMaxW + "px");
							$(inSlider.childNodes[i].childNodes[0]).css("height", productMaxW + "px");

							var productDescH = parseInt($(inSlider.childNodes[i].childNodes[1]).css("height"));

							$(inSlider.childNodes[i].childNodes[1]).css("width", productMaxW + "px");

							checkProductH = productMaxW + 48 + productDescH;
							var newProductW = productMaxW + 48;

							$(inSlider.childNodes[i]).css("height", checkProductH + "px");
							$(inSlider.childNodes[i]).css("width", newProductW + "px");
							$(inSlider.childNodes[i]).css("left", inSliderW + "px");
							inSliderW += (newProductW + 13);
						}

						$(inSlider).css("width", inSliderW + "px");
						slideL = clickCount * (parseInt($(inSlider.childNodes[0]).css("width")) + 13);
						slideL = (clickCount != 0) ? slideL * (-1) : slideL; 
						$(inSlider).css("left", slideL + "px");
						growingScreenV = false;
					}
					else
					{
						for(var i = 0; i < inSlider.childNodes.length; i++)
						{
							$(inSlider.childNodes[i].childNodes[0]).css("width", productImgW + "px");
							$(inSlider.childNodes[i].childNodes[0]).css("height", productImgW + "px");

							var productDescH = parseInt($(inSlider.childNodes[i].childNodes[1]).css("height"));

							$(inSlider.childNodes[i].childNodes[1]).css("width", productImgW + "px");

							checkProductH = productImgW + 48 + productDescH;
							var newProductW = productImgW + 48;

							$(inSlider.childNodes[i]).css("height", checkProductH + "px");
							$(inSlider.childNodes[i]).css("width", newProductW + "px");
							$(inSlider.childNodes[i]).css("left", inSliderW + "px");
							inSliderW += (newProductW + 13);
						}
						$(inSlider).css("width", inSliderW + "px");
						slideL = clickCount * (parseInt($(inSlider.childNodes[0]).css("width")) + 13);
						slideL = (clickCount != 0) ? slideL * (-1) : slideL; 
						$(inSlider).css("left", slideL + "px");
					}
				}			
			}

		}
		
	}
	else
	{
		var checkImgW = parseInt($(inSlider.childNodes[0].childNodes[0]).css("width"));
		if(checkImgW < productMaxW)
		{
			growingScreenV = true;
		}


		if(shrinkingScreenV == true)
		{ 
			//Set the relative's section's height as it resizes down
			var newRelativeH = window.innerHeight - menuAreaH;
			$(relativeArea).css("height", newRelativeH + "px");

			//Set the quick store's height as it resizes down
			var newQuickStoreH = parseInt($(relativeArea).css("height")) - 96;
			$(quickStoreSection).css("height", newQuickStoreH + "px");

			//Set the slider height as it resizes down;
			var newSliderH = newQuickStoreH - quickStoreTitleH - quickStoreDescH - optionsAreaH;
			$(sliderArea).css("height", newSliderH + "px");

			if(newSliderH <= checkProductH)
			{
				var inSliderW = 13;
				var productImgW = parseInt($(inSlider.childNodes[0].childNodes[0]).css("width")) - 48;

				

				if(productImgW <= productMinW)
				{
					for(var i = 0; i < inSlider.childNodes.length; i++)
					{
						$(inSlider.childNodes[i].childNodes[0]).css("width", productMinW + "px");
						$(inSlider.childNodes[i].childNodes[0]).css("height", productMinW + "px");

						var productDescH = parseInt($(inSlider.childNodes[i].childNodes[1]).css("height"));

						$(inSlider.childNodes[i].childNodes[1]).css("width", productMinW + "px");

						checkProductH = productMinW + 48 + productDescH;
						var newProductW = productMinW + 48;

						$(inSlider.childNodes[i]).css("height", checkProductH + "px");
						$(inSlider.childNodes[i]).css("width", newProductW + "px");
						$(inSlider.childNodes[i]).css("left", inSliderW + "px");
						inSliderW += (newProductW + 13);
					}

					$(inSlider).css("width", inSliderW + "px");
					slideL = clickCount * (parseInt($(inSlider.childNodes[0]).css("width")) + 13);
					slideL = (clickCount != 0) ? slideL * (-1) : slideL; 
					$(inSlider).css("left", slideL + "px");

					//This will begin to set the rest of the area to the correct size
					newSliderH = checkProductH + 13;
					$(sliderArea).css("height", newSliderH + "px");

					//This will set the new quick store section height
					var newQuickStoreH = newSliderH + quickStoreTitleH + quickStoreDescH + optionsAreaH;
					$(quickStoreSection).css("height", newQuickStoreH + "px");

					//This will set the new relative area height
					var newRelativeH = newQuickStoreH + 96;
					$(relativeArea).css("height", newRelativeH + "px");

					shrinkingScreenV = false;
				}
				else
				{
					for(var i = 0; i < inSlider.childNodes.length; i++)
					{
						$(inSlider.childNodes[i].childNodes[0]).css("width", productImgW + "px");
						$(inSlider.childNodes[i].childNodes[0]).css("height", productImgW + "px");

						var productDescH = parseInt($(inSlider.childNodes[i].childNodes[1]).css("height"));

						$(inSlider.childNodes[i].childNodes[1]).css("width", productImgW + "px");

						checkProductH = productImgW + 48 + productDescH;
						var newProductW = productImgW + 48;

						$(inSlider.childNodes[i]).css("height", checkProductH + "px");
						$(inSlider.childNodes[i]).css("width", newProductW + "px");
						$(inSlider.childNodes[i]).css("left", inSliderW + "px");
						inSliderW += (newProductW + 13);
					}

					$(inSlider).css("width", inSliderW + "px");
					slideL = clickCount * (parseInt($(inSlider.childNodes[0]).css("width")) + 13);
					slideL = (clickCount != 0) ? slideL * (-1) : slideL; 
					$(inSlider).css("left", slideL + "px");
				}

			}

			for(var i = 0; i < inSlider.childNodes.length; i++){
				$(inSlider.childNodes[i]).css("top", ((newSliderH / 2) - (checkProductH / 2)) + "px");
			}

		}

	}
	window.previousSize = window.innerHeight;


	//This is for the sliding advertisement, it will change both horizontally and vertically
	var inSliderW = parseInt($(inSlider).css("width"));
	var quickStoreW = parseInt($(quickStoreSection).css("width"));

	if(inSliderW <= quickStoreW)
	{
		slideL = 0;
		clickCount = 0;
		$(inSlider).css("left", ((quickStoreW / 2) - (inSliderW / 2)) + "px");
	}
});

//This will be the click options to move the slider
$(leftButton).click(function(e){
	e.preventDefault();

	//Declare some global variables for the movement
	var inSliderW = parseInt($(inSlider).css("width"));
	var quickStoreW = parseInt($(quickStoreSection).css("width"));
	var productCardW = parseInt($(inSlider.childNodes[0]).css("width"));

	var differenceRem = inSliderW - quickStoreW;

	if(differenceRem > 0)
	{

		//These are some of the local variables
		var leftRightDist = productCardW + 13;
		var totalClicks = Math.floor(differenceRem / leftRightDist);
		if((differenceRem % leftRightDist) != 0)
		{
			totalClicks += 1;
		}

		//This will begin the slide effect
		if(clickCount > 0)
		{
			slideL += leftRightDist;
			clickCount--;
			$(inSlider).css("left", slideL + "px");
		}
	}
});

$(rightButton).click(function(e)
{
	e.preventDefault();
	console.log("clicked");
	//Declare some global variables for the movement
	var inSliderW = parseInt($(inSlider).css("width"));
	var quickStoreW = parseInt($(quickStoreSection).css("width"));
	var productCardW = parseInt($(inSlider.childNodes[0]).css("width"));

	var differenceRem = inSliderW - quickStoreW;

	if(differenceRem > 0)
	{

		//These are some of the local variables
		var leftRightDist = productCardW + 13;
		var totalClicks = Math.floor(differenceRem / leftRightDist);
		if((differenceRem % leftRightDist) != 0)
		{
			totalClicks += 1;
		}

		//This will begin the slide effect
		if(clickCount < totalClicks)
		{
			slideL -= leftRightDist;
			clickCount++;
			$(inSlider).css("left", slideL + "px");
		}
	}	
});


