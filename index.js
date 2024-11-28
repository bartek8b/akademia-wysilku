// ---------------------MENU--------------------

function showSidebar() {
	document.getElementById("sideBar").style.display = "flex";
	document.getElementById("menuButton").style.display = "none";
	document.getElementById("xButton").style.display = "flex";

	document
		.getElementById("sideBar")
		.animate(
			[{ transform: "translateX(100%)" }, { transform: "translateX(0)" }],
			{ duration: 500, fill: "forwards" }
		);
}

function hideSidebar() {
	document.getElementById("menuButton").style.display = "flex";
	document.getElementById("xButton").style.display = "none";

	document
		.getElementById("sideBar")
		.animate(
			[{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
			{ duration: 500, fill: "forwards" }
		);

	updateWidth();
}

function updateWidth() {
	const windowWidth = window.innerWidth;

	if (windowWidth > 768) {
		document.getElementById("sideBar").style.display = "none";
		document.getElementById("menuButton").style.display = "none";
		document.getElementById("xButton").style.display = "none";
	} else {
		document.getElementById("menuButton").style.display = "flex";
		document.getElementById("xButton").style.display = "none";
	}
}

function adjustHeight() {
	document.body.style.height = `${window.innerHeight}px`;
}

window.addEventListener("resize", updateWidth);
window.addEventListener("scroll", adjustHeight);
