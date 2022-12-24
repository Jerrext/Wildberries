import { basketData } from "../store.js";
import { createBtn } from "../utils/createBtn.js";
import { createElem } from "../utils/createElem.js";
import { basketWrapper } from "./header.js";
const header = document.getElementById("header")

// функция пересчета скидки
export const discountRecalc = () => {
	let discountTotal = basketData.reduce(function (sum, elem) {
		return sum + (elem.price * (elem.discount / 100));
	}, 0);
	let discountTotalFixed = discountTotal.toFixed(2)
	discountPriceNum.innerText = `${discountTotalFixed} р`

	let discountForAll = basketData.reduce(function (sum, elem) {
		return sum + elem.price - (elem.price * (elem.discount / 100));
	}, 0);
	let discountForAllFixed = discountForAll.toFixed(2)
	getSumOverall.innerText = `${discountForAllFixed} р`
}

const basketTopWrapper = createElem("div", {
	className: "basketTopWrapper",
}, basketWrapper)
const basketTopText = createElem("span", {
	className: "basketTopText",
	innerText: "Корзина"
}, basketTopWrapper)
basketWrapper.style.display = "none"

export const delList = () => document.querySelectorAll(".itemContainer")
const deleteAllBasket = createBtn("Очистить корзину", "deleteAllBasket", basketTopWrapper, "click", () => {
	if (delList().length === 0) {
		alert("Нечего удалять")
	} else {
		for (let i = 0; i < delList().length; i++) {
			delList()[i].remove()
			basketData.splice(i, 1)
			i--
		}
	}
	discountPriceNum.innerText = `0 р`
	getSumOverall.innerText = `0 р`

})

// наполнение wrapper корзины
export const itemWrapper = createElem("div", {
	className: "itemWrapper",
}, basketWrapper)

basketWrapper.appendChild(itemWrapper)

const discountWrapper = createElem("div", {
	className: "discountWrapper",
}, basketWrapper)
const discountPriceText = createElem("p", {
	className: "Discount",
	innerText: "Скидка:"
}, discountWrapper)
export const discountPriceNum = createElem("p", {
	className: "Discount",
	innerText: `0 р`
}, discountWrapper)

const totalPriceWrapper = createElem("div", {
	className: "totalPriceWrapper",
}, basketWrapper)
const totalPriceText = createElem("p", {
	innerText: "Итого со скидкой:"
}, totalPriceWrapper)
export const getSumOverall = createElem("p", {
	innerText: `0 р`
}, totalPriceWrapper)


const buyBasket = createBtn("Сделать заказ", "buyBasket", basketWrapper, "click", () => {
})



