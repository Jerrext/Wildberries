export const searchFunc = () => {
	let hiddenConter = 0
	const slider = document.querySelector(".slider")
	const nothingFound = document.querySelector(".cards__nothing-found")
	const searchResult = document.querySelector(".cards__search-res")
	const sectionTitle = document.querySelector(".cards__title")
	const spinner = document.querySelector(".spinner-two")
    const header__searchInput = document.querySelector(".searchInput")

	spinner.style.display = "block"

	setTimeout(() => {
		spinner.style.display = "none"
	}, 400)
	
	for (let item of document.querySelectorAll(".cards__thing")) {
		if (!item.textContent.toLowerCase().includes(header__searchInput.value.toLowerCase())) {
			item.parentElement.parentElement.hidden = true
			hiddenConter++
		} else {
			item.parentElement.parentElement.hidden = false
		}
	}	

	if (hiddenConter === document.querySelectorAll(".cards__thing").length) {
		hiddenConter = 0
		
		searchResult.style.display = "block"
		nothingFound.style.display = "block"
		sectionTitle.style.display = "none"
	} else {
		hiddenConter = 0
		
		searchResult.style.display = "block"
		nothingFound.style.display = "none"
		sectionTitle.style.display = "none"
	}

	if (header__searchInput.value === "") {
		slider.style.display = "block"
		searchResult.style.display = ""
		sectionTitle.style.display = ""
	} else {
		slider.style.display = "none"
		searchResult.style.display = "block"
	}
}