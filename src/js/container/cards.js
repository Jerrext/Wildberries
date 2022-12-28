
import { createElem } from "../utils/createElem.js";
import { cardData } from "../utils/renderItems.js";

const main = document.getElementById("main")

const cards = createElem("section", {
	className: "cards"
}, main)

const cardContainer = createElem("div", {
	className: "container"
}, cards)

const sectionTitle = createElem("h2", {
	className: "cards__title",
	textContent: "Хиты продаж"
}, cardContainer)

const searchResult = createElem("p", {
	className: "cards__search-res",
	textContent: "Результат поиска:"
}, cardContainer)

const nothingFound = createElem("p", {
	className: "cards__nothing-found",
	textContent: "Ничего не найдено",
}, cardContainer)

export const cardsWrapper = createElem("div", {
	className: "cards__wrapper"
}, cardContainer)

cardData()