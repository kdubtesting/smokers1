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

//Above is a demo of how the carosel is going to look, now i will try building the same thing with javascript objects

var prodNameArr = ["Cigarette 1", "Cigar 1", "Bong 1", "Bong 2"];
var priceArr = ["$$.$$", "$$$.$$", "$$$$.$$", "$$.$$"];
var descArr = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
var rollPicturesArr = [4, 0, 0, 6]; //The number is how many roll pictures there are for this item

var currentItem = 0;
var currentLeft = 0;

function createCaroselItems(ci)
{
	var createProductCard = document.createElement("DIV");
	createProductCard.className = "product-card";
	createProductCard.style.height = (iaH + 60) + "px";
	createProductCard.style.width = (iaW + daW + 70) + "px";
	createProductCard.style.top = ((icH / 2) - ((iaH + 60) / 2)) + "px";
	createProductCard.style.left = currentLeft + "px";
	var createInProduct = document.createElement("DIV");
	createInProduct.className = "in-product-card";

	//This is the image area
	//This is the part where all the elements are made
	var createImageArea = document.createElement("DIV");
	createImageArea.className = "images-area";
	createImageArea.style.height = iaH + "px";
	createImageArea.style.width =  iaW + "px";
	createImageArea.style.left = "30px";
	createImageArea.style.top = "30px";

	var createInImage = document.createElement("DIV");
	createInImage.className = "in-image";

	if(rollPicturesArr[currentItem] != 0)
	{
		var createImageOpts = document.createElement("DIV");
		createImageOpts.className = "image-opts";
		var createInImageOpts = document.createElement("DIV");
		createInImageOpts.className = "in-image-opts";
		var createTopMore = document.createElement("DIV");
		createTopMore.className = "top-more";
		var createBottomMore = document.createElement("DIV");
		createBottomMore.className = "bottom-more";
		var createMoreButtonT = document.createElement("DIV");
		createMoreButtonT.className = "more-button";
		var createMoreButtonB = document.createElement("DIV");
		createMoreButtonB.className = "more-button";
		var createImageRoll = document.createElement("DIV");
		createImageRoll.className = "image-roll";

		for(var i = 0; i < rollPicturesArr[currentItem % 4]; i++)
		{
			var createMoreImage = document.createElement("DIV");
			createMoreImage.className = "more-image";
			createMoreImage.style.height = miW + "px";
			createImageRoll.appendChild(createMoreImage);
		}
	}

	var createImageDis = document.createElement("DIV");
	createImageDis.className = "image-dis";
	createImageDis.style.height = idW + "px";
	createImageDis.style.top = ((iaH / 2) - (idW / 2)) + "px";

	//This is the part where I will be appending the elements in the image area

	if(rollPicturesArr[currentItem % 4] != 0)
	{
		createTopMore.appendChild(createMoreButtonT);
		createBottomMore.appendChild(createMoreButtonB);
		createInImageOpts.appendChild(createTopMore);
		createInImageOpts.appendChild(createImageRoll);
		createInImageOpts.appendChild(createBottomMore);
		createImageOpts.appendChild(createInImageOpts);
		createInImage.appendChild(createImageOpts);
	}
	
	createInImage.appendChild(createImageDis);
	createImageArea.appendChild(createInImage);

	//Above is all the create elements in image area

	//This is the description area
	//This part is where all the items are created
	var createDescArea = document.createElement("DIV");
	createDescArea.className = "desc-area";
	createDescArea.style.height = daH + "px";
	createDescArea.style.width = daW + "px";
	createDescArea.style.right = "30px";
	createDescArea.style.top = "30px";
	var createInDesc = document.createElement("DIV");
	createInDesc.className = "in-desc";
	var createDesc = document.createElement("DIV");
	createDesc.className = "desc";
	var createProdName = document.createElement("H4");
	createProdName.className = "prod-name";
	createProdName.innerText = prodNameArr[ci % 4];
	var createPrice = document.createElement("H3");
	createPrice.className = "price";
	createPrice.innerText = priceArr[ci % 4];
	var createDescText = document.createElement("P");
	createDescText.className = "desc-text";
	createDescText.innerText = descArr[ci % 4];
	var createLabel = document.createElement("LABEL");
	createLabel.className = "amount";
	createLabel.innerText = "Select Amount: "
	var createInput = document.createElement("input");
	createInput.type = "number";
	createInput.className = "amount-number";
	createInput.name = "amount-number";
	createInput.placeholder = "1";
	createLabel.appendChild(createInput);//This appends the input to the label
	var createBR = document.createElement("BR");
	var createButton = document.createElement("BUTTON");
	createButton.className = "buy";
	createButton.innerText = "Purchase Item";

	//This will start to append the items that I have created for the desc 
	createDesc.appendChild(createProdName);
	createDesc.appendChild(createPrice);
	createDesc.appendChild(createDescText);
	createDesc.appendChild(createLabel);
	createDesc.appendChild(createBR);
	createDesc.appendChild(createButton);

	createDesc.style.top = ((daH / 2) - (dH / 2)) + "px";


	createInDesc.appendChild(createDesc);
	createDescArea.appendChild(createInDesc);
	//Above should be the complete version of all the elements being added
	//to the created description area.


	createInProduct.appendChild(createDescArea);
	createInProduct.appendChild(createImageArea);

	createProductCard.appendChild(createInProduct);
	currentItem++;
	return createProductCard;
}

var newItem = createCaroselItems(currentItem);
currentLeft += (iaW + daW + 70);

console.log(inCarosel.childNodes);

inCarosel.removeChild(inCarosel.childNodes[0]);
inCarosel.removeChild(inCarosel.childNodes[0]);
inCarosel.removeChild(inCarosel.childNodes[0]);


inCarosel.appendChild(newItem);

console.log(inCarosel.childNodes);

var newItem = createCaroselItems(currentItem);

inCarosel.appendChild(newItem);

console.log(inCarosel.childNodes);

for(var i = 0; i < inCarosel.childNodes.length; i++)
{
	var descH = parseInt($(inCarosel.childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0]).css("height"));
	inCarosel.childNodes[i].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.top = ((daH / 2) - (descH / 2)) + "px"

}

//console.log(parseInt($(inCarosel.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0]).css("height")));

//console.log(parseInt($(inCarosel.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0]).css("height")));

var deleteCurrent = 0;

//This actuall gets the carosel moving and creating new items
var caroselRoll = setTimeout(function roll(){
	var carChildren = inCarosel.childNodes;
	if(deleteCurrent != 0)
	{
		inCarosel.removeChild(inCarosel.childNodes[0]);
	}
	carChildren[0].style.left = (-1 * (iaW + daW + 70)) + "px"
	carChildren[1].style.left = "0px";
	var newItem = createCaroselItems(currentItem);
	inCarosel.appendChild(newItem);
	var length = inCarosel.childNodes.length - 1;
	var descH = parseInt($(inCarosel.childNodes[length].childNodes[0].childNodes[0].childNodes[0].childNodes[0]).css("height"));
	inCarosel.childNodes[length].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.top = ((daH / 2) - (descH / 2)) + "px"
	deleteCurrent += 1;
	caroselRoll = setTimeout(roll, 5000);
}, 5000);

//This will positon the view store button in the center of the screen
var windowWid = parseInt(window.innerWidth);
var viewStore = document.getElementById("view-store");
var vsW = parseInt($(viewStore).css("width"));
var vsH = parseInt($(viewStore).css("height"));

viewStore.style.left = ((windowWid / 2) - ((vsW) / 2)) + "px";

//This will position the trackers
var trackerButtons = document.getElementById("tracker-buttons");
var tbW = parseInt($(trackerButtons).css("width"));

trackerButtons.style.bottom = (vsH + 40) + "px";
trackerButtons.style.left = ((windowWid / 2) - (tbW / 2)) + "px";

var trackerIcons = document.getElementsByClassName("tracker-icons");

trackerIcons[0].style.width = "2em";
trackerIcons[0].style.left = "0px";

var trackerI = 1;

var tracker = setTimeout(function tracker(){
	trackerIcons[trackerI % 4].style.width = "2em";
	trackerIcons[trackerI % 4].style.left = "0px";
	trackerIcons[(trackerI - 1) % 4].style.width = "1em";
	trackerIcons[(trackerI - 1) % 4].style.left = "0.5em";
	trackerI++;
	tracker = setTimeout(tracker, 5000);
},5000);


