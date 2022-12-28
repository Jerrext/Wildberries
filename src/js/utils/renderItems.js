import { basketData } from "../store.js";
import { createBtn } from "./createBtn.js";
import { setItem } from "./setLocalItems.js";
import { createElem } from "./createElem.js";
import { itemWrapper, discountRecalc } from "../container/basket.js";
import { toggleSpinner } from "../container/spinner.js"
import { basketCounter, counterCheck } from "../container/header.js";
import { cardsWrapper } from "../container/cards.js";
import { quickViewBtnHandler } from "../container/quickView.js";

export const renderBasket = (elem) => {
    setItem(basketData)
    
	const { id, imgSrc, price, discount, thing } = elem

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
		textContent: price + "р"
	}, itemDiv)
	//
	const itemDelete = createBtn("X", "itemDelete", itemDiv, "click", (e) => {
		
        const itemArr = [...document.getElementsByClassName("itemDelete")]
		for (let i = 0; i < itemArr.length; i++) {
            if (itemArr.indexOf(e.target) === i) {
                e.target.parentElement.remove()
                basketData.splice(i, 1)
            }
        }

		setItem(basketData)
		discountRecalc()
		basketCounter.innerText = basketData.length
		counterCheck()
        
	})
	discountRecalc()
	basketCounter.innerText = basketData.length
	counterCheck()
}

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
		quickViewBtnHandler(elem)
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
		renderBasket(elem)
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

    //
}

export const cardData = () => {
	toggleSpinner()

	return fetch("https://63a6f19159fd83b1bb3b0670.mockapi.io/cardData")
		.then(response => response.json())
		.then(data => {
			toggleSpinner()
			data.forEach(item => renderCard(item, cardsWrapper))
			return data
		})
}

basketData.forEach(elem => renderBasket(elem))