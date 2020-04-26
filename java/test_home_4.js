/*--------------------------------------------*/
//Here are some of the GLOBAL VARIABLES and some
//of there styles
/*--------------------------------------------*/

//This will be the company header + the height of the companyheader
var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));

//This is the menu area height
var menuAreaH = companyHeaderH + 60;

//This will be some of the styles of the view button
var viewButton = document.getElementById("view-store-button");
var viewButtonW = parseInt($(viewButton).css("width"));
var viewButtonH = parseInt($(viewButton).css("height"));
var viewButtonB = parseInt($(viewButton).css("bottom"));

//This positions the view button
$(viewButton).css("left", ((window.innerWidth / 2) - (viewButtonW / 2)) + "px");

//This will style the product area
var productArea = document.getElementById("product-area");

//The product area height isn't set, so it is found using this
//window.innerheight - height of the menu - height of the view button - the distance from the bottom for the view button - 20
var productAreaH = window.innerHeight - menuAreaH - viewButtonH - viewButtonB - 20

//This will set the height and the bottom style for the product area
$(productArea).css("height", productAreaH + "px");
$(productArea).css("bottom", (((window.innerHeight / 2) - (productAreaH / 2)) - 5) + "px");

/*This will be some of the styles for the product carosel, the carosel height is established in the styles*/
var productCarosel = document.getElementById("product-carosel");
var productCaroselH = parseInt($(productCarosel).css("height"));

//Remove first node, because it is just some text
productCarosel.removeChild(productCarosel.childNodes[0]);


//These are some of the arrays that will be used to fill out the content of the product cards
var productNameArr = ["Cigarette 1", "Cigar 1", "Bong 1", "Cigarette 2", "Bong 2", "Bong 3"];
var productPriceArr = ["$$.$$", "$$$.$$", "$$$$.$$", "$.$$", "$$$.$$", "$$$$$.$$"];

//This array is used to store the product cards that are created
var productCardsArr = new Array();
var productDescriptionArr = new Array();

//These values are used for resizing and styling the product cards
var productCardLeft = 10;
var productCardMaxHeight = 0; //Initially
var smallSize = 0;
var smallHeight = 0;

/*--------------------------------------------*/
/*--------------------------------------------*/
/*--------------------------------------------*/

function topCard(productC, caroselH, productH)
{
	productC.style.top = ((caroselH / 2) - (productH / 2)) + "px";
}

function qtySection(productQty, descriptionWidth, bottomSpacing)
{
	//This will create the product qty text
	var productQtyText = document.createElement("LABEL");
	productQtyText.className = "product-qty-text";
	productQtyText.innerText = "Qty:";
	productQtyText.for = "product-amount";

	productQty.appendChild(productQtyText);
	//--------------------------------

	//This will create the product amount
	var productAmount = document.createElement("INPUT");
	productAmount.className = "product-amount";
	productAmount.value = "1";
	productAmount.name = "product-amount";
	productAmount.type = "number";
	productAmount.min = "1";

	productQty.appendChild(productAmount);


	var productAmountH = parseInt(productAmount.scrollHeight);
	var productQtyWidth = parseInt($(productQtyText).css("width")) + parseInt(productAmount.scrollWidth) + 7;
	var productQtyWidthHalf = productQtyWidth / 2;
	var productQtyLeft = (descriptionWidth / 2) - productQtyWidthHalf;
	//--------------------------------

	//This will create the product plus button
	var productPlus = document.createElement("DIV");
	productPlus.className = "product-plus";
	productPlus.style.width = productAmountH + "px";
	productPlus.style.height = productAmountH + "px";
	productPlus.style.left = (productQtyLeft + productQtyWidth - productAmountH) + "px";
	productPlus.style.bottom = bottomSpacing + "px";

	productQty.appendChild(productPlus);
	//--------------------------------

	//This will create the product minus button
	var productMinus = document.createElement("DIV");
	productMinus.className = "product-plus";
	productMinus.style.width = productAmountH + "px";
	productMinus.style.height = productAmountH + "px";
	productMinus.style.left = (productQtyLeft + productQtyWidth) + "px";
	productMinus.style.bottom = bottomSpacing + "px";

	productQty.appendChild(productMinus);
	//--------------------------------

	//This will be some click functionality for the plus and minus button
	$(productPlus).on("click", function(){
		productAmount.value = (parseInt(productAmount.value) + 1);
	});

	$(productMinus).on("click", function(){
		if(parseInt(productAmount.value) != 1)
		{
			productAmount.value = (parseInt(productAmount.value) - 1);
		}
	});
}

function createProductCard(caroselH, item)
{
	//Create the product card here
	var productCard = document.createElement("DIV");
	productCard.className = "product-card";

	productCarosel.appendChild(productCard);

	$(productCard).css("left", productCardLeft + "px");

	var productCardW = parseInt($(productCard).css("width"));
	productCardLeft += (productCardW + 10);
	//--------------------------------

	//Create the product image here
	var productImage = document.createElement("DIV");
	productImage.className = "product-image";

	productCard.appendChild(productImage);
	//--------------------------------

	//This will create the product description
	var productDescription = document.createElement("DIV");
	productDescription.className = "product-description";

	productCard.appendChild(productDescription);
	var productDescriptionW = parseInt($(productDescription).css("width"));
	productDescriptionArr[item] = productDescription;
	//--------------------------------

	//This will create the product name
	var productNames = document.createElement("H3");
	productNames.className = "product-name";
	productNames.innerText = productNameArr[item];

	productDescription.appendChild(productNames);
	//--------------------------------

	//This will create the dividing line
	var divideLine = document.createElement("DIV");
	divideLine.className = "divide-line";
	divideLine.style.width = "8em";
	divideLine.style.marginLeft = "calc((22em / 2) - (8em / 2))";

	productDescription.appendChild(divideLine);
	//--------------------------------

	//This will create the product price
	var productPrices = document.createElement("H4");
	productPrices.className = "product-price";
	productPrices.innerText = productPriceArr[item];

	productDescription.appendChild(productPrices);
	//--------------------------------

	//This will create the product qty section
	var productQty = document.createElement("DIV");
	productQty.className = "product-qty";

	productDescription.appendChild(productQty);

	//The function that will fill out the productQty, will be called at the end

	//--------------------------------

	//This will create the product button
	var productButton = document.createElement("BUTTON");
	productButton.className = "product-button";
	productButton.innerText = "Buy";

	productDescription.appendChild(productButton);

	var productButtonB = parseInt($(productButton).css("margin-bottom")) + parseInt(productButton.scrollHeight) + 4 + 10;
	//--------------------------------

	//This is the quantity content
	qtySection(productQty, productDescriptionW, productButtonB);

	//This will set the height and top spacing for the product card
	var productImageH = parseInt($(productImage).css("height")) + 48;
	var productDescriptionH = parseInt($(productDescription).css("height"));

	productCardMaxHeight = productDescriptionH + productImageH;

	productCard.style.height = productCardMaxHeight + "px";
	topCard(productCard, caroselH, productCardMaxHeight);

	productCardsArr[item] = productCard;
}

//This is simply a test
$(window).on("mousemove", function(){
	console.log("mouse")
});

$(window).on("load", function(){
	//This will load the correct styles for larger screens
	for(var i = 0; i < 6; i++)
	{
		createProductCard(productCaroselH, i);
	}

	//This will be the hover animation
	for(var i = 0; i < productCardsArr.length; i++)
	{
		$(productCardsArr[i]).on("mouseenter", function(){
			var productCardH = parseInt($(this).css("height"));
			var productCardW = parseInt($(this).css("width"));
			var productCardT = parseInt($(this).css("top"));
			var productCardL = parseInt($(this).css("left"));

			$(this).css("height", (productCardH + 10) + "px");
			$(this).css("width", (productCardW + 10) + "px");
			$(this).css("left", (productCardL - 5) + "px");
			$(this).css("top", (productCardT - 5) + "px");
			$(this).css("box-shadow", "0 0 5px rgba(0,0,0,0.8)");
		});

		$(productCardsArr[i]).on("mouseleave", function(){
			var productCardH = parseInt($(this).css("height"));
			var productCardW = parseInt($(this).css("width"));
			var productCardT = parseInt($(this).css("top"));
			var productCardL = parseInt($(this).css("left"));

			$(this).css("height", (productCardH - 10) + "px");
			$(this).css("width", (productCardW - 10) + "px");
			$(this).css("left", (productCardL + 5) + "px");
			$(this).css("top", (productCardT + 5) + "px");
			$(this).css("box-shadow", "0 0 2px rgba(0,0,0,0.3)");
		});
	}

	//This will be the styles for the medium to small screen sizes
	productAreaH = window.innerHeight - menuAreaH - viewButtonH - viewButtonB - 20;
	$(productArea).css("height", productAreaH + "px");
	productCaroselH = productAreaH - 32;

	if(productCaroselH > (productCardMaxHeight + 10))
	{
		for(var i = 0; i < productCardsArr.length; i++)
		{
			topCard(productCardsArr[i], productCaroselH, productCardMaxHeight);
		}
	}
	else if(productCaroselH <= (productCardMaxHeight + 10) && (productCaroselH > ((25 * 16) + 10)) && (productCardMaxHeight > (25 * 16)))
	{
		var newLeft = 10;
		for(var i = 0; i < productCardsArr.length; i++)
		{
			productCardsArr[i].style.height = "25em";
			var productCardMedH = parseInt($(productCardsArr[i]).css("height"));
			//productCardsArr[i].style.top = ((productCaroselH / 2) - ((25 * 16) / 2)) + "px";
			productCardsArr[i].style.left = newLeft + "px";
			productCardsArr[i].style.width = "calc(25em + 8em + 24px)";
			$(productDescriptionArr).css("left", "25em");
			$(productDescriptionArr).css("width", "calc(8em + 24px)");
			var productCardW = parseInt($(productCardsArr[i]).css("width"));
			topCard(productCardsArr[i], productCaroselH, productCardMedH);
			newLeft += (productCardW + 10);
		}
	}
	else if(productCaroselH <= ((25 * 16) + 10))
	{
		var newLeft = 10;
		for(var i = 0; i < productCardsArr.length; i++)
		{
			productCardsArr[i].style.height = (0.95 * productCaroselH) + "px";
			productCardsArr[i].style.width = (0.95 * productCaroselH) + "px";
			//productCardsArr[i].style.top = (0.025 * productCaroselH) + "px";
			productCardsArr[i].style.left = newLeft + "px";
			var productCardSH = parseInt($(productCardsArr[i]).css("height"));
			topCard(productCardsArr[i], productCaroselH, productCardSH);
			newLeft += ((0.95 * productCaroselH) + 10)
		}
	}
});

$(window).on("resize", function(){
	/*-------------------------------------------------*/
	//This is the horizontal styles
	/*-------------------------------------------------*/

	var windowW = window.innerWidth;
	$(viewButton).css("left", ((windowW / 2) - (viewButtonW / 2)) + "px");

	/*-------------------------------------------------*/
	//This is the vertical styles
	/*-------------------------------------------------*/
	productAreaH = window.innerHeight - menuAreaH - viewButtonH - viewButtonB - 20;
	$(productArea).css("height", productAreaH + "px");
	productCaroselH = productAreaH - 32;


	if(productCaroselH > (productCardMaxHeight + 10))
	{
		var newLeft = 10;
		for(var i = 0; i < productCardsArr.length; i++)
		{
			productCardsArr[i].style.width = "25em";
			productCardsArr[i].style.height = productCardMaxHeight + "px";
			var productCardW = parseInt($(productCardsArr[i]).css("width"));
			productCardsArr[i].style.left = newLeft + "px";
			productDescriptionArr[i].style.left = "24px";
			productDescriptionArr[i].style.width = "22em";
			newLeft += (productCardW + 10);
			topCard(productCardsArr[i], productCaroselH, productCardMaxHeight);
		}
	}
	else if(productCaroselH <= (productCardMaxHeight + 10) && (productCaroselH > ((25 * 16) + 10)) && (productCardMaxHeight > (25 * 16)))
	{
		var newLeft = 10;
		for(var i = 0; i < productCardsArr.length; i++)
		{
			productCardsArr[i].style.height = "25em";
			var productCardMedH = parseInt($(productCardsArr[i]).css("height"));
			//productCardsArr[i].style.top = ((productCaroselH / 2) - ((25 * 16) / 2)) + "px";
			productCardsArr[i].style.left = newLeft + "px";
			productCardsArr[i].style.left = newLeft + "px";
			productCardsArr[i].style.width = "calc(25em + 8em + 24px)";
			$(productDescriptionArr).css("left", "25em");
			$(productDescriptionArr).css("width", "calc(8em + 24px)");
			var productCardW = parseInt($(productCardsArr[i]).css("width"));
			topCard(productCardsArr[i], productCaroselH, productCardMedH);
			newLeft += (productCardW + 10);
		}
	}
	else if(productCaroselH <= ((25 * 16) + 10))
	{
		var newLeft = 10;
		for(var i = 0; i < productCardsArr.length; i++)
		{
			productCardsArr[i].style.height = (0.95 * productCaroselH) + "px";
			productCardsArr[i].style.width = (0.95 * productCaroselH) + "px";
			//productCardsArr[i].style.top = (0.025 * productCaroselH) + "px";
			productCardsArr[i].style.left = newLeft + "px";
			var productCardSH = parseInt($(productCardsArr[i]).css("height"));
			topCard(productCardsArr[i], productCaroselH, productCardSH);
			newLeft += ((0.95 * productCaroselH) + 10)
		}
	}

});

