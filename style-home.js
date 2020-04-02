//alert("Hello");
var viewProduct = document.getElementById("view-product");
var vpW = parseInt($(viewProduct).css("width"));
var vpH = parseInt($(viewProduct).css("height"));
var windowWidth = parseInt(window.innerWidth);

var leftPos = (windowWidth / 2) - (vpW / 2);

$(viewProduct).css("left", leftPos + "px");

$(viewProduct).on("mouseenter", function(){
	$(this).css("background-color", "#ffffff");
	$(this).css("color", "#A6333F");
});

$(viewProduct).on("mouseleave", function(){
	$(this).css("background-color", "transparent");
	$(this).css("color", "#ffffff");
});

var emailButton = document.getElementById("email-button");


emailButton.style.width = vpH + "px";
emailButton.style.height = vpH + "px";

//alert(windowWidth);

//This is the home carosel

var inProductCarosel = document.getElementById("in-product-carosel");
var ipcH = parseInt($(inProductCarosel).css("height"));

var inPos = document.getElementById("in-position");
var ipH = parseInt($(inPos).css("height"));
var posTracker = document.getElementById("position-tracker");

var inProdCar = ipcH - ipH;

$("#carosel").css("height", inProdCar + "px");

//This is the product carosel
var inCarosel = document.getElementById("in-carosel");
var icH = parseInt($(inCarosel).css("height"));
var icW = parseInt($(inCarosel).css("width"));

//var caroselBackgroundColors = ["#a834eb", "#5b0e87", "#a80da6", "#f518f2"];
//var currentColor = 0;

inCarosel.removeChild(inCarosel.childNodes[0]);

var itemNames = ["Cigarette 1", "Cigar 1", "Bong 1", "Bong 2"];
var priceVals = ["$$$$.$$", "$$.$$", "$$$$$.$$", "$$$.$$"];
var descVals = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
"Lorem ipsum dolor sit amet, consectetur",
"Lorem ipsum dolor sit amet, consectetur", 
"Lorem ipsum, sorry I am working on a split screen, so I can't see all this text."]
var currentItem = 0;

var carL = 0;

for(var i = 0; i < 2; i++)
{
	//This create the intitial two items in the carosel
	var caroselItem = document.createElement("DIV");
	var inCarItem = document.createElement("DIV");
	inCarItem.className = "in-car-pos";
	var itemPic = document.createElement("DIV");
	itemPic.className = "car-pic";
	itemPic.style.height = (icH / 2) + "px";
	itemPic.style.width = (icH / 2) + "px";
	itemPic.style.left = "15%";
	itemPic.style.top = (icH / 4) + "px";
	var itemDesc = document.createElement("DIV");
	itemDesc.style.width = "40%";
	itemDesc.style.height = (icH / 2) + "px";
	itemDesc.className = "item-desc";
	itemDesc.style.top = (icH / 4) + "px";
	itemDesc.style.right = "15%";
	itemDesc.style.textAlign = "left";
	var itemName = document.createElement("H4");
	itemName.className = "item-name";
	itemName.innerText = itemNames[currentItem % 4];
	var price = document.createElement("H3");
	price.className = "price";
	price.innerText = priceVals[currentItem % 4];
	var desc = document.createElement("P");
	desc.className = "descrip";
	desc.innerText = descVals[currentItem % 4];
	var label = document.createElement("LABEL");
	label.className = "amount-label";
	label.innerText = "Select amount: ";
	var numberIn = document.createElement("INPUT");
	numberIn.className = "amount";
	numberIn.type = "number";
	numberIn.value = "1";
	var buyButton =  document.createElement("BUTTON");
	var br = document.createElement("BR");
	buyButton.className = "buy";
	buyButton.innerText = "Place Order";
	itemDesc.appendChild(itemName);
	itemDesc.appendChild(price);
	itemDesc.appendChild(desc);
	itemDesc.appendChild(label);
	itemDesc.appendChild(numberIn);
	itemDesc.appendChild(br);
	itemDesc.appendChild(buyButton);
	inCarItem.appendChild(itemDesc);
	inCarItem.appendChild(itemPic);
	caroselItem.appendChild(inCarItem);
	caroselItem.style.width = icW + "px";
	caroselItem.style.height = icH + "px";
	//caroselItem.style.backgroundColor = caroselBackgroundColors[currentColor % 4];
	caroselItem.style.position = "absolute";
	caroselItem.style.top = "0px";
	caroselItem.style.left = carL + "px";
	caroselItem.className = "carosel-items";
	carL += icW;
	currentItem += 1;
	inCarosel.appendChild(caroselItem);
}

console.log(inCarosel.childNodes);



//currentColor += 1;

/*console.log(inCarosel.childNodes);

console.log(inCarosel.childNodes);

inCarosel.appendChild(caroselItem);

console.log(inCarosel.childNodes);

var caroselItem2 = document.createElement("DIV");
var inCarItem2 = document.createElement("DIV");
inCarItem2.className = "in-car-pos";
caroselItem2.appendChild(inCarItem2);
caroselItem2.style.width = icW + "px";
caroselItem2.style.height = icH + "px";
//caroselItem2.style.backgroundColor = caroselBackgroundColors[currentColor % 4];
caroselItem2.style.position = "absolute";
caroselItem2.style.top = "0px";
caroselItem2.style.left = icW + "px";
caroselItem2.className = "carosel-items";*/

//currentColor += 1;

/*inCarosel.appendChild(caroselItem2);

console.log(inCarosel.childNodes);*/

var current = 0;



var caroselRoll = setTimeout(function roll(){
	var carChild = inCarosel.childNodes;
	if(current != 0)
	{
		inCarosel.removeChild(carChild[0]);
	}
	carChild[0].style.left = (-1 * icW) + "px";
	carChild[1].style.left = "0px";
	//This is the new element
	var caroselItem = document.createElement("DIV");
	var inCarItem = document.createElement("DIV");
	inCarItem.className = "in-car-pos";
	var itemPic = document.createElement("DIV");
	itemPic.className = "car-pic";
	itemPic.style.height = (icH / 2) + "px";
	itemPic.style.width = (icH / 2) + "px";
	itemPic.style.left = "15%";
	itemPic.style.top = (icH / 4) + "px";
	var itemDesc = document.createElement("DIV");
	itemDesc.style.width = "40%";
	itemDesc.style.height = (icH / 2) + "px";
	itemDesc.className = "item-desc";
	itemDesc.style.top = (icH / 4) + "px";
	itemDesc.style.right = "15%";
	itemDesc.style.textAlign = "left";
	var itemName = document.createElement("H4");
	itemName.className = "item-name";
	itemName.innerText = itemNames[currentItem % 4];
	var price = document.createElement("H3");
	price.className = "price";
	price.innerText = priceVals[currentItem % 4];
	var desc = document.createElement("P");
	desc.className = "descrip";
	desc.innerText = descVals[currentItem % 4];
	var label = document.createElement("LABEL");
	label.className = "amount-label";
	label.innerText = "Select amount: ";
	var numberIn = document.createElement("INPUT");
	numberIn.className = "amount";
	numberIn.type = "number";
	numberIn.value = "1";
	var buyButton =  document.createElement("BUTTON");
	var br = document.createElement("BR");
	buyButton.className = "buy";
	buyButton.innerText = "Place Order";
	itemDesc.appendChild(itemName);
	itemDesc.appendChild(price);
	itemDesc.appendChild(desc);
	itemDesc.appendChild(label);
	itemDesc.appendChild(numberIn);
	itemDesc.appendChild(br);
	itemDesc.appendChild(buyButton);
	inCarItem.appendChild(itemDesc);
	inCarItem.appendChild(itemPic);
	caroselItem.appendChild(inCarItem);
	caroselItem.style.width = icW + "px";
	caroselItem.style.height = icH + "px";
	//caroselItem.style.backgroundColor = caroselBackgroundColors[currentColor % 4];
	caroselItem.style.position = "absolute";
	caroselItem.style.top = "0px";
	caroselItem.style.left = icW + "px";
	caroselItem.className = "carosel-items";
	currentItem += 1;
	inCarosel.appendChild(caroselItem);
	current += 1;
	caroselRoll = setTimeout(roll, 5000);
}, 5000);

//This is the product carosel tracker at the bottom 

var inPosW = parseInt($(inPos).css("width"));
var posTrackerW = parseInt($(posTracker).css("width"));

posTracker.style.left = ((inPosW / 2) - (posTrackerW / 2)) + "px";

var currentCircles = document.getElementsByClassName("current-circle");

//This will be the initial-state
currentCircles[0].style.width = "2em";
currentCircles[0].style.left = "0.5em";

var j = 0;

var changeCurrent = setTimeout(function change(){
	currentCircles[j % 4].style.width = "1em";
	currentCircles[j % 4].style.left = "1em";
	j++;
	currentCircles[j % 4].style.width = "2em";
	currentCircles[j % 4].style.left = "0.5em";
	changeCurrent = setTimeout(change, 5000);
}, 5000);

for(var i = 0; i < currentCircles.length; i++)
{
	$(currentCircles[i]).on("mouseenter", function(){
		clearTimeout(caroselRoll);
		clearTimeout(changeCurrent);
	});
	$(currentCircles[i]).on("mouseleave", function(){
		
		caroselRoll = setTimeout(function roll(){
			var carChild = inCarosel.childNodes;
			if(current != 0)
			{
				inCarosel.removeChild(carChild[0]);
			}
			carChild[0].style.left = (-1 * icW) + "px";
			carChild[1].style.left = "0px";
			//This is the new element
			var caroselItem = document.createElement("DIV");
			var inCarItem = document.createElement("DIV");
			inCarItem.className = "in-car-pos";
			var itemPic = document.createElement("DIV");
			itemPic.className = "car-pic";
			itemPic.style.height = (icH / 2) + "px";
			itemPic.style.width = (icH / 2) + "px";
			itemPic.style.left = "15%";
			itemPic.style.top = (icH / 4) + "px";
			var itemDesc = document.createElement("DIV");
			itemDesc.style.width = "40%";
			itemDesc.style.height = (icH / 2) + "px";
			itemDesc.className = "item-desc";
			itemDesc.style.top = (icH / 4) + "px";
			itemDesc.style.right = "15%";
			itemDesc.style.textAlign = "left";
			var itemName = document.createElement("H4");
			itemName.className = "item-name";
			itemName.innerText = itemNames[currentItem % 4];
			var price = document.createElement("H3");
			price.className = "price";
			price.innerText = priceVals[currentItem % 4];
			var desc = document.createElement("P");
			desc.className = "descrip";
			desc.innerText = descVals[currentItem % 4];
			var label = document.createElement("LABEL");
			label.className = "amount-label";
			label.innerText = "Select amount: ";
			var numberIn = document.createElement("INPUT");
			numberIn.className = "amount";
			numberIn.type = "number";
			numberIn.value = "1";
			var buyButton =  document.createElement("BUTTON");
			var br = document.createElement("BR");
			buyButton.className = "buy";
			buyButton.innerText = "Place Order";
			itemDesc.appendChild(itemName);
			itemDesc.appendChild(price);
			itemDesc.appendChild(desc);
			itemDesc.appendChild(label);
			itemDesc.appendChild(numberIn);
			itemDesc.appendChild(br);
			itemDesc.appendChild(buyButton);
			inCarItem.appendChild(itemDesc);
			inCarItem.appendChild(itemPic);
			caroselItem.appendChild(inCarItem);
			caroselItem.style.width = icW + "px";
			caroselItem.style.height = icH + "px";
			//caroselItem.style.backgroundColor = caroselBackgroundColors[currentColor % 4];
			caroselItem.style.position = "absolute";
			caroselItem.style.top = "0px";
			caroselItem.style.left = icW + "px";
			caroselItem.className = "carosel-items";
			currentItem += 1;
			inCarosel.appendChild(caroselItem);
			current += 1;
			caroselRoll = setTimeout(roll, 5000);
		}, 5000);

		changeCurrent = setTimeout(function change(){
			currentCircles[j % 4].style.width = "1em";
			currentCircles[j % 4].style.left = "1em";
			j++;
			currentCircles[j % 4].style.width = "2em";
			currentCircles[j % 4].style.left = "0.5em";
			changeCurrent = setTimeout(change, 5000);
		}, 5000);
	});

}

$(inCarosel).on("mouseenter", function(){
	clearTimeout(caroselRoll);
	clearTimeout(changeCurrent);
});
	
$(inCarosel).on("mouseleave", function(){	
	caroselRoll = setTimeout(function roll(){
		var carChild = inCarosel.childNodes;
		if(current != 0)
		{
				inCarosel.removeChild(carChild[0]);
		}
		carChild[0].style.left = (-1 * icW) + "px";
		carChild[1].style.left = "0px";
		//This is the new element
		var caroselItem = document.createElement("DIV");
		var inCarItem = document.createElement("DIV");
		inCarItem.className = "in-car-pos";
		var itemPic = document.createElement("DIV");
		itemPic.className = "car-pic";
		itemPic.style.height = (icH / 2) + "px";
		itemPic.style.width = (icH / 2) + "px";
		itemPic.style.left = "15%";
		itemPic.style.top = (icH / 4) + "px";
		var itemDesc = document.createElement("DIV");
		itemDesc.style.width = "40%";
		itemDesc.style.height = (icH / 2) + "px";
		itemDesc.className = "item-desc";
		itemDesc.style.top = (icH / 4) + "px";
		itemDesc.style.right = "15%";
		itemDesc.style.textAlign = "left";
		var itemName = document.createElement("H4");
		itemName.className = "item-name";
		itemName.innerText = itemNames[currentItem % 4];
		var price = document.createElement("H3");
		price.className = "price";
		price.innerText = priceVals[currentItem % 4];
		var desc = document.createElement("P");
		desc.className = "descrip";
		desc.innerText = descVals[currentItem % 4];
		var label = document.createElement("LABEL");
		label.className = "amount-label";
		label.innerText = "Select amount: ";
		var numberIn = document.createElement("INPUT");
		numberIn.className = "amount";
		numberIn.type = "number";
		numberIn.value = "1";
		var buyButton =  document.createElement("BUTTON");
		var br = document.createElement("BR");
		buyButton.className = "buy";
		buyButton.innerText = "Place Order";
		itemDesc.appendChild(itemName);
		itemDesc.appendChild(price);
		itemDesc.appendChild(desc);
		itemDesc.appendChild(label);
		itemDesc.appendChild(numberIn);
		itemDesc.appendChild(br);
		itemDesc.appendChild(buyButton);
		inCarItem.appendChild(itemDesc);
		inCarItem.appendChild(itemPic);
		caroselItem.appendChild(inCarItem);
		caroselItem.style.width = icW + "px";
		caroselItem.style.height = icH + "px";
		//caroselItem.style.backgroundColor = caroselBackgroundColors[currentColor % 4];
		caroselItem.style.position = "absolute";
		caroselItem.style.top = "0px";
		caroselItem.style.left = icW + "px";
		caroselItem.className = "carosel-items";
		currentItem += 1;
		inCarosel.appendChild(caroselItem);
		current += 1;
		caroselRoll = setTimeout(roll, 5000);
	}, 5000);

	changeCurrent = setTimeout(function change(){
		currentCircles[j % 4].style.width = "1em";
		currentCircles[j % 4].style.left = "1em";
		j++;
		currentCircles[j % 4].style.width = "2em";
		currentCircles[j % 4].style.left = "0.5em";
		changeCurrent = setTimeout(change, 5000);
	}, 5000);
});	


$("#email-button").click(function(){
	clearTimeout(changeCurrent);
	clearTimeout(caroselRoll);
});