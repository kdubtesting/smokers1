//This will be the company header
var companyHeader = document.getElementById("company-header");
var companyHeaderH = parseInt($(companyHeader).css("height"));

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

//This will be a test to create the product cards
var productCarosel = document.getElementById("product-carosel");
var productCardL = 10;
var productCardConstW = 0;
var caroselWidth = 0;
var amount = 0;
var productArr = new Array();
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

	productCaroselChild.appendChild(productImage);
	productCardL += productCardW + 10;
	if(productCardL < window.innerWidth)
	{
		caroselWidth = productCardL;
		amount = i;
	}
}

//What this test will do keep an even amount of items in the carosel
$(productArea).css("width", caroselWidth + "px");
$(productArea).css("left", ((window.innerWidth / 2) - (caroselWidth / 2)) + "px");

for(var i = amount + 1; i <= productCarosel.childNodes.length; i++)
{
	productCarosel.removeChild(productCarosel.childNodes[i]);
}

for(var i = 0; i < productCarosel.childNodes.length; i++)
{
	$(productCarosel.childNodes[i]).on("mouseenter", function(){
		$(this).css("height", (0.95 * parseInt($(productCarosel).css("height"))) + "px");
		$(this).css("top", ((0.025 * parseInt($(productCarosel).css("height")))) + "px");
		$(this).css("width", (productCardConstW + 10) + "px");
		var left = parseInt($(this).css("left"));
		$(this).css("left", (left - 5) + "px")
		$(this).css("box-shadow", "0 0 5px rgba(0,0,0,1)");		
	});

	$(productCarosel.childNodes[i]).on("mouseleave", function(){
		$(this).css("height", (0.9 * parseInt($(productCarosel).css("height"))) + "px");
		$(this).css("top", ((0.05 * parseInt($(productCarosel).css("height")))) + "px");
		$(this).css("width", (productCardConstW) + "px");
		var left = parseInt($(this).css("left"));
		$(this).css("left", (left + 5) + "px")
		$(this).css("box-shadow", "0 0 5px rgba(0,0,0,0.4)");		
	});
}