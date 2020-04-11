//This will be the company header
var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));

//This will style the options button
var optionsArea = document.getElementById("options-area");
var optionsAreaH = parseInt($(optionsArea).css("height"));

var optionsButton = document.getElementById("options-button");
var optionsButtonH = parseInt($(optionsButton).css("height"));

//This will set the options are to the height of the options button
$(optionsArea).css("height", optionsButtonH + "px");

var productPos = document.getElementById("product-position");
var productPosW = parseInt($(productPos).css("width"));
var productPosH = parseInt($(productPos).css("height"));
var position = document.getElementById("position");
var positionH = parseInt($(position).css("height"));
var rightButton = document.getElementById("right-button");
var rightButtonW = parseInt($(rightButton).css("width"));
var rightButtonR = parseInt($(rightButton).css("right"));
var leftButton = document.getElementById("left-button");

$(productPos).css("right", (rightButtonW + rightButtonR) + "px");
$(leftButton).css("right", (productPosW + rightButtonW + rightButtonR) + "px");

$(position).css("margin-top", ((productPosH / 2) - (positionH / 2)) + "px");

//This will be the view-store-button
var viewStoreButton = document.getElementById("view-store-button");
var viewStoreButtonW = parseInt($(viewStoreButton).css("width"));
var viewStoreButtonH = parseInt($(viewStoreButton).css("height"));
$(viewStoreButton).css("left", ((window.innerWidth / 2) - (viewStoreButtonW / 2)) + "px");

//This will set the size and the style for the product-area
var productArea = document.getElementById("product-area");
var productAreaH = window.innerHeight - 30 - viewStoreButtonH - 30 - companyHeaderH - 60;

$(productArea).css("height",  productAreaH + "px");
$(productArea).css("top", ((window.innerHeight / 2) - (productAreaH / 2)) + "px");

var caroselHeight = productAreaH - optionsButtonH;

//This will be a test to create the product cards

var productCarosel = document.getElementById("product-carosel");
$(productCarosel).css("height", caroselHeight + "px");
var productCardL = 10;
var productCardConstW = 0;
var caroselWidth = 0;
var amount = 0;
var productArr = new Array();

var productCardTitle = ["Cigarette 1", "Cigar 2", "Bong 1", "Bong 2", "Cigarette 2"];
var productCardPrice = ["$$.$$", "$$$$$.$$", "$$$.$$", "$$$$$$.$$", "$.$$"];
var productCardDesc = [];

function checkWindowSize(w,c)
{
	$(viewStoreButton).css("left", ((window.innerWidth / 2) - (viewStoreButtonW / 2)) + "px");
	$(productArea).css("left", ((window.innerWidth / 2) - (caroselWidth / 2)) + "px");
	if(w <= c)
	{
		amount--;
		caroselWidth -= (productCardConstW + 10);
		$(productArea).css("width", caroselWidth + "px");
		$(productArea).css("left", ((window.innerWidth / 2) - (caroselWidth / 2)) + "px");
		while(amount < productCarosel.childNodes.length)
		{
			productCarosel.removeChild(productCarosel.childNodes[amount]);
		}
	}

	if(w >= (c + productCardConstW + 10))
	{
		caroselWidth += (productCardConstW + 10);
		$(productArea).css("width", caroselWidth + "px");
		$(productArea).css("left", ((window.innerWidth / 2) - (caroselWidth / 2)) + "px");
		productCarosel.appendChild(productArr[amount]);
		amount++;
	}
}

function createCards(w)
{

	for(var i = 0; i < 5; i++)
	{
		//This will create the items
		var productCard = document.createElement("DIV");
		productCard.className = "product-cards";
		var productCardH = 0.9 * parseInt($(productCarosel).css("height"));
		productCard.style.height = productCardH + "px";
		productCard.style.top = (0.05 * parseInt($(productCarosel).css("height"))) + "px";
		productCard.style.left = productCardL + "px";

		productCarosel.appendChild(productCard);

		var productCaroselChild = productCarosel.childNodes[i];
		var productCardW = parseInt($(productCaroselChild).css("width"));
		productCardConstW = productCardW;
		//This is the interior of the product card
		var productImage = document.createElement("DIV");
		productImage.className = "product-image";
		var productImageW = 0.9 * productCardW;
		var productImageL = 0.05 * productCardW;
		productImage.style.height = productImageW + "px";
		productImage.style.width = productImageW + "px";
		productImage.style.left = productImageL + "px";
		productImage.style.top = productImageL + "px";

		productArr[i] = productCaroselChild;

		addItems(i, productCaroselChild, productCardW, (productImageW + productImageL));

		productCaroselChild.appendChild(productImage);
		productCardL += productCardW + 10;
		if(productCardL < window.innerWidth)
		{
			caroselWidth = productCardL;
			amount = i;
		}
	}

	console.log(amount);

	amount++;

	//What this test will do keep an even amount of items in the carosel
	$(productArea).css("width", caroselWidth + "px");
	$(productArea).css("left", ((window.innerWidth / 2) - (caroselWidth / 2)) + "px");

	console.log(productCarosel.childNodes.length);

	while(amount < productCarosel.childNodes.length)
	{
		productCarosel.removeChild(productCarosel.childNodes[amount]);
	}

	console.log("This is the inital child nodes length: " + productCarosel.childNodes.length);
}

function addItems(item, productC, productCW, productTop)
{
	//This is the title
	var title = document.createElement("DIV");
	title.className = "product-title";
	title.innerText = productCardTitle[item];
	productC.appendChild(title);
	var productCardChild = productC.childNodes[0];
	var productCardTitleW = parseInt($(productCardChild).css("width"));
	var productCardTitleH = parseInt($(productCardChild).css("height"));
	$(productCardChild).css("left", ((productCW / 2) - (productCardTitleW / 2)) + "px");
	productTop += 20
	$(productCardChild).css("top", productTop + "px");
	productTop += productCardTitleH;

	//This is the price
	var price = document.createElement("DIV");
	price.className = "product-price";
	price.innerText = productCardPrice[item];
	productC.appendChild(price);
	var productCardChild = productC.childNodes[1];
	var productCardTitleW = parseInt($(productCardChild).css("width"));
	var productCardTitleH = parseInt($(productCardChild).css("height"));
	$(productCardChild).css("left", ((productCW / 2) - (productCardTitleW / 2)) + "px");
	productTop += 20
	$(productCardChild).css("top", productTop + "px");
	productTop += productCardTitleH;
	//productC.appendChild(productCardDesc[item]);
}

createCards(window.innerWidth);

for(var i = 0; i < productCarosel.childNodes.length; i++)
{
	$(productCarosel.childNodes[i]).on("mouseenter", function(){
		$(this).css("height", (0.95 * parseInt($(productCarosel).css("height"))) + "px");
		$(this).css("top", ((0.025 * parseInt($(productCarosel).css("height")))) + "px");
		$(this).css("width", (productCardConstW + 10) + "px");
		var left = parseInt($(this).css("left"));
		$(this.childNodes[2]).css("width", ((0.9) * (productCardConstW + 10)) + "px")
		$(this.childNodes[2]).css("height", ((0.9) * (productCardConstW + 10)) + "px");
		var titleTop = parseInt($(this.childNodes[0]).css("top"));
		var titleWidth = parseInt($(this.childNodes[0]).css("width"));
		var priceTop = parseInt($(this.childNodes[1]).css("top"));
		var priceWidth = parseInt($(this.childNodes[1]).css("width"));
		$(this.childNodes[0]).css("top", (titleTop + 10) + "px");
		$(this.childNodes[0]).css("left", (((productCardConstW + 10) / 2) -  (titleWidth / 2)));
		$(this.childNodes[1]).css("top", (priceTop + 10) + "px");
		$(this.childNodes[1]).css("left", (((productCardConstW + 10) / 2) -  (priceWidth / 2)));
		$(this).css("left", (left - 5) + "px")
		$(this).css("box-shadow", "0 0 5px rgba(0,0,0,1)");		
	});

	$(productCarosel.childNodes[i]).on("mouseleave", function(){
		$(this).css("height", (0.9 * parseInt($(productCarosel).css("height"))) + "px");
		$(this).css("top", ((0.05 * parseInt($(productCarosel).css("height")))) + "px");
		$(this).css("width", (productCardConstW) + "px");
		var left = parseInt($(this).css("left"));
		$(this.childNodes[2]).css("width", ((0.9) * (productCardConstW)) + "px")
		$(this.childNodes[2]).css("height", ((0.9) * (productCardConstW)) + "px");
		var titleTop = parseInt($(this.childNodes[0]).css("top"));
		var titleWidth = parseInt($(this.childNodes[0]).css("width"));
		var priceTop = parseInt($(this.childNodes[1]).css("top"));
		var priceWidth = parseInt($(this.childNodes[1]).css("width"));
		$(this.childNodes[0]).css("top", (titleTop - 10) + "px");
		$(this.childNodes[0]).css("left", (((productCardConstW + 10) / 2) -  (titleWidth / 2)));
		$(this.childNodes[1]).css("top", (priceTop - 10) + "px");
		$(this.childNodes[1]).css("left", (((productCardConstW + 10) / 2) -  (priceWidth / 2)));
		$(this).css("left", (left + 5) + "px");
		$(this).css("box-shadow", "0 0 5px rgba(0,0,0,0.4)");		
	});
}

$(window).on("resize", function(){
	checkWindowSize(window.innerWidth, caroselWidth);
});




