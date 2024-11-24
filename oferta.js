const containers = document.querySelectorAll(".offerDiv");
containers.forEach(container => {
	container.addEventListener("mouseover", () => {
		const child1 = container.querySelector(".offerTable");
        const child2 = container.querySelector(".offerClausure");
        const child3 = container.querySelector(".offerCaption");
		child1.style.display = "block";
        child2.style.display = "block";
        child3.style.display = "none";
	});
	container.addEventListener("mouseout", () => {
		const child1 = container.querySelector(".offerTable");
        const child2 = container.querySelector(".offerClausure");
        const child3 = container.querySelector(".offerCaption");
		child1.style.display = "none";
        child2.style.display = "none";
        child3.style.display = "block";
	});
});
