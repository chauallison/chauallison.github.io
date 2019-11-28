
let carouselWidth = 500;

let backButton = document.getElementById("back");
let nextButton = document.getElementById("next");
let imageRow = document.getElementById("carouselrow");

let imageNum = 0;
let totalImages = document.getElementsByClassName('carouselpic').length;

function showNextImage() {
	if (imageNum >= totalImages-1) {
		return;
	}
	imageNum = imageNum + 1;
	let newPixelOffset = -carouselWidth * imageNum;
	imageRow.style.left = newPixelOffset + "px";
}

nextButton.onclick = showNextImage;

function showPrevImage() {
	if (imageNum <= 0) {
		return;
	}
	imageNum = imageNum - 1;
	let newPixelOffset = -carouselWidth * imageNum;
	imageRow.style.left = newPixelOffset + "px";
}

backButton.onclick = showPrevImage;
