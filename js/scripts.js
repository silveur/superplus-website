function debug(stringToPrint)
{
	console.debug(stringToPrint);
}

// change that is img sizes change...
var imgWidth = 754;
var imgHeight = 504;

var windowWidth; var windowHeigth;
var slideIndex = 1; // change this number to change the first image to show 
var maxNumberOfImage = 49; // change this number if updating the number of images in the directory

// this will just grab the window size
function getWindowBoundaries()
{
	var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0],
	width = w.innerWidth || e.clientWidth || g.clientWidth,
	heigth = w.innerHeight|| e.clientHeight|| g.clientHeight;
	windowWidth = width; windowHeigth = heigth;
	debug('Height:' + heigth.toString() + ' Width: ' + width.toString());
}

// Function that feeds the html tag with the src links
function showSlides()
{
	var slideSrc = "<img src='images/" + slideIndex.toString() + ".jpg' height='504' width='754'>";
	document.getElementById("slide").innerHTML = slideSrc;
	document.getElementById("slide").style.visibility="visible";
}

function loadPreviousSlide()
{
	if (slideIndex-- <= 0) slideIndex = maxNumberOfImage;
	showSlides();
}

function loadNextSlide()
{
	if (slideIndex++ >= maxNumberOfImage) slideIndex = 1;
	showSlides();
}
