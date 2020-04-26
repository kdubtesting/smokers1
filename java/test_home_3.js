//This will be for the window resizing features and styles
resizeCardHeight = productCardMaxHeight;
var previousHeight = window.innerHeight;
var stopShrinking = 0;
var stopGrowing = 0;
$(window).on("resize", function(){

	//This will set the vertical resizing styles

	//This is the new section height
	var quickStoreSectionH = window.innerHeight - menuH - 60;
	$(quickStoreSection).css("height", quickStoreSectionH + "px");

	//This is the new slider height
	var sliderH = quickStoreSectionH - optionsSectionH - quickStoreTitleH - quickStoreDescriptionH;
	$(sliderArea).css("height", sliderH + "px");

	if(resizeCardHeight < sliderH)
	{
		//I have to do a similar check here, because it will eventually get larger then the productcardmaxHeight, so you need to check for that as well

		if((resizeCardHeight != productCardMaxHeight) && (window.innerHeight - previousHeight > 0) && (stopGrowing == 0))
		{
			var firstCard = productCardsArr[0];
			var firstCardH = parseInt($(firstCard).css("height"));
			if((firstCardH + 48) > productCardMaxHeight)
			{
				stopGrowing = 1;

				var newDiff = productCardMaxHeight - firstCardH

				var newLeft = 13;
				inSliderW = 13;


			}
			else
			{
				var newLeft = 13;
				inSliderW = 13;
				for(var i = 0; i < productCardsArr.length; i++)
				{
					var productImg = productCardsArr[i].childNodes[0];
					var productImgW = parseInt($(productImg).css("width")) + 48;
					var productImgT = parseInt($(productImg).css("top"));

					$(productImg).css("width", productImgW + "px");
					$(productImg).css("height", productImgW + "px");

					//

					var productDesc = productCardsArr[i].childNodes[1];
					var productDescH = parseInt($(productDesc).css("height"));
					$(productDesc).css("width", productImgW + "px");

					//
					resizeCardHeight = productImgW + (2 * productImgT) + productDescH;
					var productCardW = productImgW + 48;

					$(productCardsArr[i]).css("height", resizeCardHeight + "px");
					$(productCardsArr[i]).css("width", productCardW + "px");

					$(productCardsArr[i]).css("left", newLeft + "px");

					newLeft += (productCardW + 13);
					inSliderW += (productCardW + 13);

					$(inSlider).css("width", inSliderW + "px");
				}
			}
		}

		for(var i = 0; i < productCardsArr.length; i++)
		{
			var productCardTop = (sliderH / 2) - (resizeCardHeight / 2);
			$(productCardsArr[i]).css("top", productCardTop + "px");
		}
	}
	else if((resizeCardHeight >= sliderH) && (window.innerHeight - previousHeight <= 0) && (stopShrinking == 0))
	{
		var firstImage = productCardsArr[0].childNodes[0];
		var firstImageW = parseInt($(firstImage).css("width"));

		if((firstImageW - 48) < productCardMinWidth)
		{
			console.log(productCardMinWidth);

			stopShrinking = 1;
			var newDiff = firstImageW - productCardMinWidth;
			var newLeft = 13;
			inSliderW = 13;
			for(var i = 0; i < productCardsArr.length; i++)
			{
				var productImg = productCardsArr[i].childNodes[0];
				var productImgW = parseInt($(productImg).css("width")) - newDiff;
				var productImgT = parseInt($(productImg).css("top"));

				$(productImg).css("width", productImgW + "px");
				$(productImg).css("height", productImgW + "px");

				//

				var productDesc = productCardsArr[i].childNodes[1];
				var productDescH = parseInt($(productDesc).css("height"));
				$(productDesc).css("width", productImgW + "px");

				//

				resizeCardHeight = productImgW + (2 * productImgT) + productDescH;
				var productCardW = productImgW + 48;

				$(productCardsArr[i]).css("height", resizeCardHeight + "px");
				$(productCardsArr[i]).css("width", productCardW + "px");

				$(productCardsArr[i]).css("left", newLeft + "px");

				var productCardTop = (sliderH / 2) - (resizeCardHeight / 2);
				$(productCardsArr[i]).css("top", productCardTop + "px");

				newLeft += (productCardW + 13);
				inSliderW += (productCardW + 13);

				$(inSlider).css("width", inSliderW + "px");

			}
		}
		else
		{
			console.log("Normal shrink happening");
			var newLeft = 13;
			inSliderW = 13;
			for(var i = 0; i < productCardsArr.length; i++)
			{
				var productImg = productCardsArr[i].childNodes[0];
				var productImgW = parseInt($(productImg).css("width")) - 48;
				var productImgT = parseInt($(productImg).css("top"));

				$(productImg).css("width", productImgW + "px");
				$(productImg).css("height", productImgW + "px");

				//

				var productDesc = productCardsArr[i].childNodes[1];
				var productDescH = parseInt($(productDesc).css("height"));
				$(productDesc).css("width", productImgW + "px");

				//

				resizeCardHeight = productImgW + (2 * productImgT) + productDescH;
				var productCardW = productImgW + 48;

				$(productCardsArr[i]).css("height", resizeCardHeight + "px");
				$(productCardsArr[i]).css("width", productCardW + "px");

				$(productCardsArr[i]).css("left", newLeft + "px");

				var productCardTop = (sliderH / 2) - (resizeCardHeight / 2);
				$(productCardsArr[i]).css("top", productCardTop + "px");

				newLeft += (productCardW + 13);
				inSliderW += (productCardW + 13);

				$(inSlider).css("width", inSliderW + "px");
			}
		}
	}

	previousHeight = window.innerHeight;

});