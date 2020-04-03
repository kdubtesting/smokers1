var inCaroselV2 = document.getElementById("in-carosel-v2");
var inCaroselHeight = parseInt($(inCaroselV2).css("height"));
var inCaroselWidth = parseInt($(inCaroselV2).css("width"));

var productCaroselV2 = document.getElementById("product-carosel-v2");
var productCaroselLeft = parseInt($(productCaroselV2).css("left"));
var productCaroselRight = productCaroselLeft + inCaroselWidth;
var productCaroselTop = parseInt($(productCaroselV2).css("top"));
var productCaroselBottom = productCaroselTop + inCaroselHeight;

//This will create a test element to add to the carosel
var product = document.createElement("DIV");
product.className = "carosel-product";
product.style.height = (0.5 * inCaroselHeight) + "px";
product.style.width = (0.5 * inCaroselHeight) + "px";
product.style.left = (-0.5 * inCaroselHeight) + "px";
product.style.zIndex = 1000;
product.style.top = ((inCaroselHeight / 2) - ((0.5 * inCaroselHeight / 2))) + "px";
		

inCaroselV2.removeChild(inCaroselV2.childNodes[0]);
inCaroselV2.appendChild(product);

var product = document.createElement("DIV");
product.className = "carosel-product";
product.style.height = (0.75 * inCaroselHeight) + "px";
product.style.width = (0.75 * inCaroselHeight) + "px";
product.style.zIndex = 10000;
product.style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
product.style.left = "0px";

inCaroselV2.appendChild(product);

var product = document.createElement("DIV");
product.className = "carosel-product";
product.style.height = inCaroselHeight + "px";
product.style.width = inCaroselHeight + "px";
product.style.zIndex = 1000000;
product.style.top = "0px";
product.style.left = ((inCaroselWidth / 2) - (inCaroselHeight / 2)) + "px";

inCaroselV2.appendChild(product);

var product = document.createElement("DIV");
product.className = "carosel-product";
product.style.height = (0.75 * inCaroselHeight) + "px";
product.style.width = (0.75 * inCaroselHeight) + "px";
product.style.zIndex = 10000;
product.style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
product.style.left = (inCaroselWidth - (0.75 * inCaroselHeight)) + "px";
inCaroselV2.appendChild(product);

var fill = document.createElement("DIV");

for(var i = 0; i < inCaroselV2.childNodes.length; i++)
{
	$(inCaroselV2.childNodes[i]).on("mouseenter", function()
	{
		clearTimeout(moveProduct)
	});
	$(inCaroselV2.childNodes[i]).on("mouseleave", function()
	{
		moveProduct = setTimeout(function move()
		{
			var caroselChildren = inCaroselV2.childNodes;
			for(var i = 0; i < caroselChildren.length; i++)
			{
				if(parseInt($(caroselChildren[i]).css("left")) < 0)
				{
					inCaroselV2.removeChild(caroselChildren[i]);
					console.log(inCaroselV2.childNodes);
					var fill = document.createElement("DIV");
					fill.className = "carosel-product";
					fill.style.height = (0.75 * inCaroselHeight) + "px";
					//fill.style.width = (0.75 * inCaroselHeight) + "px";
					fill.style.zIndex = 1000;
					fill.style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
					fill.style.left = inCaroselWidth + "px";
					inCaroselV2.appendChild(fill);
				}
			}
			caroselChildren = inCaroselV2.childNodes;
			console.log(inCaroselV2.childNodes);
			caroselChildren[0].style.height = (0.5 * inCaroselHeight) + "px";
			caroselChildren[0].style.width = (0.5 * inCaroselHeight) + "px";
			caroselChildren[0].style.left = (-0.5 * inCaroselHeight) + "px";
			caroselChildren[0].style.top = ((inCaroselHeight / 2) - ((0.5 * inCaroselHeight / 2))) + "px";
			caroselChildren[1].style.height = (0.75 * inCaroselHeight) + "px";
			caroselChildren[1].style.width = (0.75 * inCaroselHeight) + "px";
			caroselChildren[1].style.zIndex = 10000;
			caroselChildren[1].style.left = "0px";
			caroselChildren[1].style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
			caroselChildren[2].style.height = inCaroselHeight + "px";
			caroselChildren[2].style.width = inCaroselHeight + "px";
			caroselChildren[2].style.zIndex = 1000000;
			caroselChildren[2].style.left = ((inCaroselWidth / 2) - (inCaroselHeight / 2)) + "px";
			caroselChildren[2].style.top = "0px";
			caroselChildren[3].style.width = (0.75 * inCaroselHeight) + "px";
			caroselChildren[3].style.zIndex = 10000;
			caroselChildren[3].style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
			caroselChildren[3].style.left = (inCaroselWidth - (0.75 * inCaroselHeight)) + "px";
			moveProduct = setTimeout(move, 5000);
		}, 5000);
	});
}

var moveProduct = setTimeout(function move()
	{
		var caroselChildren = inCaroselV2.childNodes;
		for(var i = 0; i < caroselChildren.length; i++)
		{
			if(parseInt($(caroselChildren[i]).css("left")) < 0)
			{
				inCaroselV2.removeChild(caroselChildren[i]);
				console.log(inCaroselV2.childNodes);
				var fill = document.createElement("DIV");
				fill.className = "carosel-product";
				fill.style.height = (0.75 * inCaroselHeight) + "px";
				//fill.style.width = (0.75 * inCaroselHeight) + "px";
				fill.style.zIndex = 1000;
				fill.style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
				fill.style.left = inCaroselWidth + "px";
				inCaroselV2.appendChild(fill);
			}
		}
		caroselChildren = inCaroselV2.childNodes;
		console.log(inCaroselV2.childNodes);
		caroselChildren[0].style.height = (0.5 * inCaroselHeight) + "px";
		caroselChildren[0].style.width = (0.5 * inCaroselHeight) + "px";
		caroselChildren[0].style.left = (-0.5 * inCaroselHeight) + "px";
		caroselChildren[0].style.top = ((inCaroselHeight / 2) - ((0.5 * inCaroselHeight / 2))) + "px";
		caroselChildren[1].style.height = (0.75 * inCaroselHeight) + "px";
		caroselChildren[1].style.width = (0.75 * inCaroselHeight) + "px";
		caroselChildren[1].style.zIndex = 10000;
		caroselChildren[1].style.left = "0px";
		caroselChildren[1].style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
		caroselChildren[2].style.height = inCaroselHeight + "px";
		caroselChildren[2].style.width = inCaroselHeight + "px";
		caroselChildren[2].style.zIndex = 1000000;
		caroselChildren[2].style.left = ((inCaroselWidth / 2) - (inCaroselHeight / 2)) + "px";
		caroselChildren[2].style.top = "0px";
		caroselChildren[3].style.width = (0.75 * inCaroselHeight) + "px";
		caroselChildren[3].style.zIndex = 10000;
		caroselChildren[3].style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
		caroselChildren[3].style.left = (inCaroselWidth - (0.75 * inCaroselHeight)) + "px";
		moveProduct = setTimeout(move, 5000);
	}, 5000);



$(document).on("mousemove", function(e){
	if((e.pageX <= productCaroselLeft && e.pageX >= productCaroselRight) && (e.pageY >= productCaroselTop && e.pageY <= productCaroselBottom))
	{
		clearTimeout(moveProduct);
		console.log("it's in");
	}
	else
	{
		console.log("it's out");
		/*moveProduct = setTimeout(function move()
		{
			var caroselChildren = inCaroselV2.childNodes;
			for(var i = 0; i < caroselChildren.length; i++)
			{
				if(parseInt($(caroselChildren[i]).css("left")) < 0)
				{
					inCaroselV2.removeChild(caroselChildren[i]);
					console.log(inCaroselV2.childNodes);
					var fill = document.createElement("DIV");
					fill.className = "carosel-product";
					fill.style.height = (0.75 * inCaroselHeight) + "px";
					//fill.style.width = (0.75 * inCaroselHeight) + "px";
					fill.style.zIndex = 1000;
					fill.style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
					fill.style.left = inCaroselWidth + "px";
					inCaroselV2.appendChild(fill);
				}
			}
			caroselChildren = inCaroselV2.childNodes;
			console.log(inCaroselV2.childNodes);
			caroselChildren[0].style.height = (0.5 * inCaroselHeight) + "px";
			caroselChildren[0].style.width = (0.5 * inCaroselHeight) + "px";
			caroselChildren[0].style.left = (-0.5 * inCaroselHeight) + "px";
			caroselChildren[0].style.top = ((inCaroselHeight / 2) - ((0.5 * inCaroselHeight / 2))) + "px";
			caroselChildren[1].style.height = (0.75 * inCaroselHeight) + "px";
			caroselChildren[1].style.width = (0.75 * inCaroselHeight) + "px";
			caroselChildren[1].style.zIndex = 10000;
			caroselChildren[1].style.left = "0px";
			caroselChildren[1].style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
			caroselChildren[2].style.height = inCaroselHeight + "px";
			caroselChildren[2].style.width = inCaroselHeight + "px";
			caroselChildren[2].style.zIndex = 1000000;
			caroselChildren[2].style.left = ((inCaroselWidth / 2) - (inCaroselHeight / 2)) + "px";
			caroselChildren[2].style.top = "0px";
			caroselChildren[3].style.width = (0.75 * inCaroselHeight) + "px";
			caroselChildren[3].style.zIndex = 10000;
			caroselChildren[3].style.top = ((inCaroselHeight / 2) - ((0.75 * inCaroselHeight) / 2)) + "px";
			caroselChildren[3].style.left = (inCaroselWidth - (0.75 * inCaroselHeight)) + "px";
			moveProduct = setTimeout(move, 5000);
		}, 5000);*/
	}
});

