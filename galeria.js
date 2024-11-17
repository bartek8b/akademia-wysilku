// ---------------------GALLERY ALBUMS--------------------

const diplomasArray = [
	"images/gallery/diplomas/1.jpg",
	"images/gallery/diplomas/2.jpg",
	"images/gallery/diplomas/3.jpg",
	"images/gallery/diplomas/4.jpg",
	"images/gallery/diplomas/5.jpg",
	"images/gallery/diplomas/6.jpg",
	"images/gallery/diplomas/7.jpg",
	"images/gallery/diplomas/8.jpg",
	"images/gallery/diplomas/9.jpg",
	"images/gallery/diplomas/10.jpg",
	"images/gallery/diplomas/11.jpg",
	"images/gallery/diplomas/12.jpg",
	"images/gallery/diplomas/13.jpg",
	"images/gallery/diplomas/14.jpg",
	"images/gallery/diplomas/15.jpg",
	"images/gallery/diplomas/16.jpg",
	"images/gallery/diplomas/17.jpg",
	"images/gallery/diplomas/18.jpg",
	"images/gallery/diplomas/19.jpg",
	"images/gallery/diplomas/20.jpg",
	"images/gallery/diplomas/21.jpg",
	"images/gallery/diplomas/22.jpg",
	"images/gallery/diplomas/23.jpg",
	"images/gallery/diplomas/24.jpg",
	"images/gallery/diplomas/25.jpg",
];

const gymArray = [
	"images/gallery/gym/1.jpg",
	"images/gallery/gym/2.jpg",
	"images/gallery/gym/3.jpg",
	"images/gallery/gym/4.jpg",
	"images/gallery/gym/5.jpg",
	"images/gallery/gym/6.jpg",
	"images/gallery/gym/7.jpg",
];

const trainingArray = [
	"images/gallery/training/1.jpg",
	"images/gallery/training/2.jpg",
	"images/gallery/training/3.jpg",
	"images/gallery/training/4.jpg",
	"images/gallery/training/5.jpg",
	"images/gallery/training/6.jpg",
	"images/gallery/training/7.jpg",
	"images/gallery/training/8.jpg",
	"images/gallery/training/9.jpg",
	"images/gallery/training/10.jpg",
	"images/gallery/training/11.jpg",
	"images/gallery/training/12.jpg"
];

function getRandomImage(arrayName) {
	const randomIndex = Math.floor(Math.random() * arrayName.length);
	return arrayName[randomIndex];
}

function displayRandomImage(albumCover, arrayName) {
	const img = document.createElement("img");
	img.src = getRandomImage(arrayName);
	document.getElementById(albumCover).appendChild(img);
}

displayRandomImage("diplomasCover", diplomasArray);
displayRandomImage("gymCover", gymArray);
displayRandomImage("trainingCover", trainingArray);

// ---------------------DISPLAY PHOTO--------------------

let photoCounter = 0;
let covers = document.querySelectorAll(".albumCover");
let counters = document.querySelectorAll(".photoCounter");

function openAlbum(arrayName, albumDisplay, albumPictureDisplay) {
	counters.forEach(counter => {
		counter.innerHTML = photoCounter + 1 + "/" + arrayName.length;
	});

	covers.forEach(cover => {
		cover.style.display = "none";
	});

	document.getElementById(albumDisplay).style.display = "block";
	document.getElementById(albumPictureDisplay).src = arrayName[0];
}

function closeAlbum(albumDisplay) {
	covers.forEach(cover => {
		cover.style.display = "block";
	});
	document.getElementById(albumDisplay).style.display = "none";
	photoCounter = 0;
}

function nextPhoto(arrayName, albumPictureDisplay) {
	if (photoCounter === arrayName.length - 1) {
		photoCounter = 0;
	} else {
		photoCounter++;
	}

	counters.forEach(counter => {
		counter.innerHTML = photoCounter + 1 + "/" + arrayName.length;
	});

	document.getElementById(albumPictureDisplay).src = arrayName[photoCounter];
}

function prevPhoto(arrayName, albumPictureDisplay) {
	if (photoCounter === 0) {
		photoCounter = arrayName.length - 1;
	} else {
		photoCounter--;
	}

	counters.forEach(counter => {
		counter.innerHTML = photoCounter + 1 + "/" + arrayName.length;
	});

	document.getElementById(albumPictureDisplay).src = arrayName[photoCounter];
}