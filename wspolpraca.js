const containers = document.querySelectorAll(".collabDiv");
containers.forEach(container => {
	container.addEventListener("mouseover", () => {
		const child1 = container.querySelector(".collabPhoto");
        const child2 = container.querySelector(".collabCaption");
        const child3 = container.querySelector(".collabStory");
		child1.style.display = "none";
        child2.style.display = "none";
        child3.style.display = "block";
        

	});
	container.addEventListener("mouseout", () => {
		const child1 = container.querySelector(".collabPhoto");
        const child2 = container.querySelector(".collabCaption");
        const child3 = container.querySelector(".collabStory");
		child1.style.display = "inline";
        child2.style.display = "block";
        child3.style.display = "none";
	});
});