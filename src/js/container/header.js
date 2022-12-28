import { basketData } from "../store.js"
import { createBtn } from "../utils/createBtn.js"
import { searchFunc } from "../utils/search.js"
import { createElem } from "../utils/createElem.js"

const header = document.getElementById('header')

const headerContainer = document.createElement("div")
headerContainer.classList.add('container')

const header__container = document.createElement('div')
header__container.classList.add('header__container')

const header__logo = document.createElement('a')
header__logo.href = "../../index.html"
header__logo.classList.add('header__logo')

const header__searchInput = document.createElement('input')
header__searchInput.setAttribute('type', 'text')
header__searchInput.placeholder = "Я ищу..."
header__searchInput.classList.add('searchInput')



// Корзина
const fieldOverlay = createElem("div", {
	className: "fieldOverlay",
}, header)
fieldOverlay.style.display = "none"
fieldOverlay.addEventListener("click", (e) => {
	if (e.currentTarget.className === "fieldOverlay") {
		fieldOverlay.style.display = "none"
		basketWrapper.style.display = "none"
	}
})
//
const header__container_nav = document.createElement('div')
header__container_nav.classList.add('header__container_nav')
header__container_nav.addEventListener("click", () => {
	if (basketWrapper.style.display === "none") {
		basketWrapper.style.display = "grid"
		fieldOverlay.style.display = "block"
	} else { 
		basketWrapper.style.display = "none" 
	}
})

const header__container_nav_icons = document.createElement('div')
header__container_nav_icons.classList.add('header__container_nav_icons')

//
export const basketWrapper = createElem("div", {
	className: "basketWrapper",
}, header__container)

const header__basket = document.createElement('div')
header__basket.classList.add('header__basket')
export const basketCounter = document.createElement('div')
basketCounter.classList.add('basketCounter')
export const counterCheck = () => {
	if (basketData.length === 0) {
		basketCounter.style.display = "none";
	} else {
		basketCounter.style.display = "block";
	}
}
// 
const header__container_nav_title = document.createElement('div')
header__container_nav_title.classList.add('header__container_nav_title')
const header__title_basket = document.createElement('span')
header__title_basket.textContent = 'Корзина'

header__container.appendChild(header__logo)

const searchContainer = createElem("div", {
	className: "header__search-container",
}, header__container)

searchContainer.appendChild(header__searchInput)
header__container_nav_icons.appendChild(header__basket)
header__container_nav_icons.appendChild(basketCounter)

header__container_nav_title.appendChild(header__title_basket)

header__container_nav.appendChild(header__container_nav_icons)
header__container_nav.appendChild(header__container_nav_title)

const searchAdaptebleBtn = createElem("div", {
	className: "header__search-adapteble-btn"
}, header__container)

const searchCancle = createElem("div", {
	className: "header__search-cancel-btn",
	textContent: "Отменить"
}, header__container)

header__container.appendChild(header__container_nav)
header.appendChild(headerContainer)
headerContainer.appendChild(header__container)

// Поиск

const searchBtn = createElem("div", {
	className: "header__search-btn",
}, searchContainer)

const searchClear = createElem("div", {
	className: "header__search-clear",
}, searchContainer)

searchBtn.addEventListener("click", () => {
	searchFunc()
})

header__searchInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
		searchFunc()
    }
});

// Очистка

header__searchInput.addEventListener('input', (e) => {
	if (e.target.value !== "") {
		searchClear.style.display = "block"
	} else {
		searchClear.style.display = "none"
	}
})

searchClear.addEventListener("click", () => {
	header__searchInput.value = ""
	searchClear.style.display = "none"
})

// Адаптив

searchAdaptebleBtn.addEventListener("click", () => {
	searchContainer.style.display = "block"
	searchCancle.style.display = "block"
	header__logo.style.display = "none"
	searchAdaptebleBtn.style.display = "none"
	header__container_nav.style.display = "none"
})

searchCancle.addEventListener("click", () => {
	searchContainer.style.display = ""
	searchCancle.style.display = ""
	header__logo.style.display = ""
	searchAdaptebleBtn.style.display = ""
	header__container_nav.style.display = ""
})