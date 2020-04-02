var chH = parseInt($(companyHeader).css("height"));
var windowH = parseInt(window.innerHeight);

var menuCover = document.getElementById("menu-cover");

$(menuCover).css("height", (chH + 60) + "px");

$("#products-area").css("height", (windowH - (chH + 60)) + "px");

$("#individual-product-area").css("height", (windowH - (chH + 60)) + "px");


var paH = windowH - (chH + 60);

var productsArea = document.getElementById("products-area");
var paW = parseInt($(productsArea).css("width"));
var paW4 = paW / 4;

//This is for the options area

var opW = parseInt(window.innerWidth) - paW - 90;
$("#options-area").css("width", opW + "px");

var opH = parseInt($("#options-area").css("height"));
var opTop = (parseInt(window.innerHeight) / 2) - (opH / 2);

$("#options-area").css("top", opTop + "px");

//Change the size of the search bar
var sbW = opW - 18.4 - 30 - 4;
$("#search-bar").css("width", sbW + "px");

//This is for the products area

var productItems = document.getElementsByClassName("product-items");
var piH = parseInt($(productItems[0]).css("height"));
var posL = 0;
var posT = 0;

var addH = paH - piH;

var totalH = 0;

for(var i = 0; i < productItems.length; i++)
{
	productItems[i].style.width = paW4 + "px";
	productItems[i].style.left = (posL % paW) + "px";
	productItems[i].style.top = posT + "px";
	posL += paW4;
	console.log(posL);
	console.log(paW);
	if((posL % paW) == 0)
	{
		console.log("This ran");
		totalH += piH;
		posT += piH;
	}
}

if((posL % paW) != 0)
{
	totalH += piH + addH;
}
else
{
	totalH += addH;
}

$("#in-product-area").css("height", totalH + "px");

//This is the infobox on the individual products
var inProduct = document.getElementsByClassName("in-product");
var viewProduct = document.getElementsByClassName("view-product");
var vpW = parseInt($(viewProduct[0]).css("width"));

for(var i = 0; i < productItems.length; i++)
{
	viewProduct[i].style.left = ((paW4 / 2) - (vpW / 2)) + "px";
	$(productItems[i]).on("click", function(){
		$("#individual-product-area").css("bottom", "0vh");
	});
	$(inProduct[i]).on("mouseenter", function(){
		var children = this.childNodes;
		children[1].style.backgroundColor = "#ffffff";
		children[1].style.color = "#A6333F";
		//viewProduct[i].style.backgroundColor = "#ffffff";
		//viewProduct[i].style.color = "#A6333F";
	});
	$(inProduct[i]).on("mouseleave", function(){
		var children = this.childNodes;
		children[1].style.backgroundColor = "transparent";
		children[1].style.color = "#ffffff";
		//viewProduct[i].style.backgroundColor = "transparent";
		//viewProduct[i].style.color = "#ffffff";
	});
}

var pictureArea = document.getElementById("pictures-area");
var indProAreaW = parseInt($("#individual-product-area").css("width"));
var indProAreaH = parseInt($("#individual-product-area").css("height"));
var descArea = document.getElementById("desc-area");

var remainArea = indProAreaW - 90;

$(pictureArea).css("height", (0.7 * indProAreaH) + "px");
$(pictureArea).css("width", (remainArea / 2) + "px");
$(pictureArea).css("top", ((indProAreaH / 2) - ((0.7 * indProAreaH) / 2)) + "px");
$(descArea).css("height", (0.7 * indProAreaH) + "px");
$(descArea).css("top", ((indProAreaH / 2) - ((0.7 * indProAreaH) / 2)) + "px");
$(descArea).css("width", (remainArea / 2) + "px");

var textArea = document.getElementById("text-area");
var taH = parseInt($(textArea).css("height"));
var taW = parseInt($(textArea).css("width"));

$(textArea).css("top", (((0.7 * indProAreaH) / 2) - (taH / 2))  + "px");
$(textArea).css("left",  "100px");

$("#close-ind").click(function(){
	$("#individual-product-area").css("bottom", "100vh");
});


