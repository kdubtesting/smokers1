var companyHeader = document.getElementById("company-header");
var chW = parseInt($(companyHeader).css("width"));
var chH = parseInt($(companyHeader).css("height"));

var testText = document.getElementById("test-text");

$(testText).css("left", (chW + 60) + "px");
$(testText).css("height", (chH + 60) + "px");


var text = document.getElementById("text");
var tH = parseInt($(text).css("height"));
var tW = parseInt($(text).css("width"));

$("#in-test").css("width", tW + "px");

var ttH = parseInt($(testText).css("height"));
var tfTop = (ttH / 2) - (tH / 2);

$("#text").css("top", tfTop + "px");

/*---This will establish the link area---*/
var linkArea = document.getElementById("link-area");
var linksBlocks = document.getElementsByClassName("links-blocks");
var inLinkBlocks = document.getElementsByClassName("in-link-blocks");
var links = document.getElementsByClassName("links");

linkArea.style.height = (chH + 60) + "px";

var linkAreaLength = 0;
var linkBlockLeft = 0;

for(var i = 0; i < links.length; i++)
{
	var lW = parseInt($(links[i]).css("width"));
	linksBlocks[i].style.width = (lW + 60) + "px";
	inLinkBlocks[i].style.height = (chH + 60) + "px";
	inLinkBlocks[i].style.width = (lW + 60) + "px";
	linkAreaLength += (lW + 60);
	linksBlocks[i].style.left = linkBlockLeft + "px";
	linkBlockLeft += (lW + 60);
}

linkArea.style.width = linkAreaLength + "px";
var textHeight = parseInt($(inLinkBlocks[0]).css("height"));

for(var i = 0; i < links.length; i++)
{
	var lH = parseInt($(links[i]).css("height"));
	links[i].style.left = "30px";
	links[i].style.top = ((textHeight / 2) - (lH / 2)) + "px";
}

for(var i = 0; i < linksBlocks.length; i++)
{
	$(linksBlocks[i]).on("mouseenter", function(){
		$(this).css("background-color", "#8C313A");
		$(this).css("box-shadow", "inset 0 0 5px #70262E");
	});

	$(linksBlocks[i]).on("mouseleave", function(){
		$(this).css("background-color", "transparent");
		$(this).css("box-shadow", "inset 0 0 5px #A6333F");
	});
}

/*for(var i = 0; i < links.length; i++)
{
	var lW = parseInt($(links[i]).css("width"));
	linkAreaLength += lW + 60;
	inLinkBlocks[i].style.height = (chH + 60) + "px";
	inLinkBlocks[i].style.width = lW + "px";
	linksBlocks[i].style.left = linkBlockLeft + "px";
	linkBlockLeft += lW + 60;
}

linkArea.style.width = linkAreaLength + "px";
var testHeight = parseInt($(inLinkBlocks[0]).css("height"));

for(var i = 0; i < links.length; i++)
{
	var lH = parseInt($(links[i]).css("height"));
	links[i].style.top = ((testHeight / 2)  - (lH / 2)) + "px"; 
}*/

/*for(var i = 0; i < links.length; i++)
{
	$(linksBlocks[i]).on("mouseenter", function(){
		alert("Hello");
		//No background because of padding, change that tomorrow so that the links are the widths that they are now.
		$(this).css("background-color", "#A6333F");
	});

	$(linksBlocks[i]).on("mouseleave", function(){
		alert("Goodbye");
		$(this).css("background-color", "transparent");
	});
}*/



