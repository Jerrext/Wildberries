import { cardData, basketData } from "../store.js";
import { createBtn } from "../utils/createBtn.js";
import { createElem } from "../utils/createElem.js";
import { setItem } from "../utils/setLocalItems.js";
import { itemWrapper, discountPriceNum, getSumOverall, discountRecalc } from "./basket.js";

const main = document.getElementById("main")

const cards = createElem("section", {
	className: "cards"
}, main)

const renderCard = (elem, to) => {
	const { id, imgSrc, price, discount, thing } = elem

	const cardWrapper = createElem("div", {
		className: "cards__card-wrapper"
	}, to)

	//

	const cardWrapperTop = createElem("div", {
		className: "cards__card-wrapper-top",
	}, cardWrapper)

	const cardWrapperBottom = createElem("div", {
		className: "cards__card-wrapper-bottom",
	}, cardWrapper)

	//

	const cardImg = createElem("img", {
		className: "cards__img",
		src: imgSrc,
		alt: thing
	}, cardWrapperTop)

	const quickView = createBtn("Быстрый просмотр", "cards__quick-view-btn", cardWrapperTop, "click", () => {

	})

	const discountBasketBtnWrapper = createElem("div", {
		className: "cards__discount-basket-wrapper",
	}, cardWrapperTop)

	const discountPercent = createElem("p", {
		className: "cards__discount-percent",
		textContent: `- ${discount}%`
	}, discountBasketBtnWrapper)

	const addToBasket = createBtn("Добавить в корзину", "cards__basket-add-btn", discountBasketBtnWrapper, "click", () => {
		basketData.push(elem)
		setItem(basketData)
		//
		const itemDiv = createElem("div", {
			className: "itemContainer",
		}, itemWrapper)
		//
		const itemPic = createElem("img", {
			className: "basket__img",
			src: imgSrc
		}, itemDiv)
		const itemText = createElem("p", {
			textContent: thing
		}, itemDiv)
		const itemPrice = createElem("p", {
			textContent: price.toFixed(2) + "р"
		}, itemDiv)
		//
		const itemDelete = createBtn("X", "itemDelete", itemDiv, "click", (e) => {
			e.currentTarget.parentElement.remove()
			const deleteOneBlock = basketData.map(item => item.id)
			const deleteOneBlockIndex = deleteOneBlock.indexOf(id)
			basketData.splice(deleteOneBlockIndex, 1)
			discountRecalc()
		})
		discountRecalc()
	})

	//

	const discountPrice = createElem("p", {
		className: "cards__discount-price",
		textContent: `${(price / 100 * (100 - discount)).toFixed(2)} р.`
	}, cardWrapperBottom)

	const actualPrice = createElem("p", {
		className: "cards__actual-price",
		textContent: `${price} р.`
	}, cardWrapperBottom)

	const thingElem = createElem("p", {
		className: "cards__thing",
		textContent: thing
	}, cardWrapperBottom)
}

cardData.forEach(item => renderCard(item, cards))