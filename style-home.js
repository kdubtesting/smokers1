var inCarosel = document.getElementById("in-carosel");
var icW = parseInt($(inCarosel).css("width"));
var icH = parseInt($(inCarosel).css("height"));
var productCards = document.getElementsByClassName("product-card");
var imageArea = document.getElementsByClassName("images-area");
imageArea[0].style.width = (0.5 * icW) + "px";
imageArea[0].style.height = (0.8 * icH) + "px";
var iaH = parseInt($(imageArea[0]).css("height"));
var iaW = parseInt($(imageArea[0]).css("width"));

productCards[0].style.height = (iaH + 60) + "px";

imageArea[0].style.left = "30px";
imageArea[0].style.top = "30px";

productCards[0].style.top = ((icH / 2) - ((iaH + 60) / 2)) + "px";

var descArea = document.getElementsByClassName("desc-area");
descArea[0].style.height = (0.8 * icH) + "px";
descArea[0].style.width = (icW - iaW - 70) + "px";
var daH = parseInt($(descArea[0]).css("height"));
var daW = parseInt($(descArea[0]).css("width"));

productCards[0].style.width = (iaW + daW + 70) + "px";

descArea[0].style.right = "30px";
descArea[0].style.top = "30px";

var desc = document.getElementsByClassName("desc");
var dH = parseInt($(desc[0]).css("height"));

desc[0].style.top = ((daH / 2) - (dH / 2)) + "px";

var moreImage = document.getElementsByClassName("more-image");
var miW = parseInt($(moreImage[0]).css("width"));

for(var i = 0; i < moreImage.length; i++)
{
	moreImage[i].style.height = miW + "px";
}

var imageDis = document.getElementsByClassName("image-dis");
var idW = parseInt($(imageDis[0]).css("width"));

imageDis[0].style.height = idW + "px";
imageDis[0].style.top = ((iaH / 2) - (idW / 2)) + "px";