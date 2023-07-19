// document.querySelector(".it-services").addEventListener("click", (e) => {
// 	e.preventDefault();
// 	document.querySelector(".service-section").scrollIntoView({
// 		behavior: "smooth",
// 	});
// });
// document.querySelector(".learn-more").addEventListener("click", (e) => {
// 	e.preventDefault();
// 	document.querySelector(".expertise").scrollIntoView({
// 		behavior: "smooth",
// 	});
// });

const clickScroll = [
	[".it-services", ".service-section"],
	[".about-us-btn", ".about-section"],
	[".contact", ".branding"],
];

const clickEventListeners = (listeners) => {
	listeners.forEach((listener) => {
		document.querySelector(listener[0]).addEventListener("click", (e) => {
			e.preventDefault();
			document.querySelector(listener[1]).scrollIntoView({
				behavior: "smooth",
			});
		});
	});
};

clickEventListeners(clickScroll);
