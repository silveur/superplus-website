function debug(stringToPrint)
{
	console.debug(stringToPrint);
}

// change that is img sizes change...
var imgWidth = 754;
var imgHeight = 504;

var windowWidth; var windowHeigth;
var slideIndex = 0;
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
	var slideSrc = "<img class='opaque' src='images/1.jpg' height='504' width='754'>";
	for(i=1;i<maxNumberOfImage;i++)
	{
		slideSrc += "<img class='bottom' src='images/" + (1+i).toString() + ".jpg' height='504' width='754'>";
	}
	document.getElementById("slides").innerHTML = slideSrc;
}

function loadPreviousSlide()
{
	if (slideIndex-- <= 0) slideIndex = maxNumberOfImage - 1;
}

function loadNextSlide()
{
	if (slideIndex++ >= maxNumberOfImage-1) slideIndex = 0;
}
