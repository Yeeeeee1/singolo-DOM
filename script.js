var leftArrow = document.getElementById('left-arrow');
var rightArrow = document.getElementById('right-arrow');
var main = document.getElementById('main');
var home = document.getElementById('home');
var services = document.getElementById('services');
var portfolio = document.getElementById('portfolio');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var screenVertical = document.getElementById('screen-vertical');
var screenHorizontal = document.getElementById('screen-horizontal');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var ten = document.getElementById('ten');
var eleven = document.getElementById('eleven');
var twelve = document.getElementById('twelve');
var all = document.getElementById('all');
var webDesign = document.getElementById('web-design');
var graphicDesign = document.getElementById('graphic-design');
var artwork = document.getElementById('artwork');
var submit = document.getElementById('submit');
var subject = document.getElementById('subject');
var describe = document.getElementById('describe');
var n = 1;
leftArrow.onclick = function () {
	if (n % 2 != 0) {
		main.style.background = "url(assets/slide_2.png)";
		screenVertical.style.display = "none";
		screenHorizontal.style.display = "none";
	} else {
		main.style.background = "url(assets/singolo1.png)";
		screenVertical.style.display = "";
		screenHorizontal.style.display = "";
	}
	n++;
}
rightArrow.onclick = function () {
	if (n % 2 == 0) {
		main.style.background = "url(assets/singolo1.png)";
		screenVertical.style.display = "";
		screenHorizontal.style.display = "";
	} else {
		main.style.background = "url(assets/slide_2.png)";
		screenVertical.style.display = "none";
		screenHorizontal.style.display = "none";
	}
	n--;
}

home.onclick = function () {
	home.style.color = "#db655f";
	services.style.color = "white";
	portfolio.style.color = "white";
	about.style.color = "white";
	contact.style.color = "white";
	window.location.hash="header";
}

services.onclick = function () {
	home.style.color = "white";
	services.style.color = "#db655f";
	portfolio.style.color = "white";
	about.style.color = "white";
	contact.style.color = "white";
	window.location.hash="our-services";
}

portfolio.onclick = function () {
	home.style.color = "white";
	services.style.color = "white";
	portfolio.style.color = "#db655f";
	about.style.color = "white";
	contact.style.color = "white";
	window.location.hash="portfolio-block";
}

about.onclick = function () {
	home.style.color = "white";
	services.style.color = "white";
	portfolio.style.color = "white";
	about.style.color = "#db655f";
	contact.style.color = "white";
	window.location.hash="about-us-block";
}

contact.onclick = function () {
	home.style.color = "white";
	services.style.color = "white";
	portfolio.style.color = "white";
	about.style.color = "white";
	contact.style.color = "#db655f";
	window.location.hash="main-blockws";
}

screenVertical.onclick = function () {
	if (n % 2 != 0) {
	screenVertical.style.background = "black";
	}
}

screenHorizontal.onclick = function () {
	if (n % 2 != 0) {
	screenHorizontal.style.background = "black";
	}
}

