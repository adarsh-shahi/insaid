document.querySelector(".it-services").addEventListener("click", (e) => {
	e.preventDefault();
	document.querySelector(".service-section").scrollIntoView({
		behavior: "smooth",
	});
});
document.querySelector(".learn-more").addEventListener("click", (e) => {
	e.preventDefault();
	document.querySelector(".expertise").scrollIntoView({
		behavior: "smooth",
	});
});