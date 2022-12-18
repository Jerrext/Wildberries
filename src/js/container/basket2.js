import { basketData } from "../store.js";
import { createBtn } from "../utils/createBtn.js";
import { createElem } from "../utils/createElem.js";
// заменить везде basketData1 на import store.js/basketdata, когда будет
let basketData1 = [
	{
		id: 1,
		imgSrc: "/1.dc197a9a.jpg",
		price: 270,
		discount: 90,
		thing: "Гирлянда"
	},
	{
		id: 2,
		imgSrc: "/2.3ca6bb44.jpg",
		price: 69,
		discount: 48,
		thing: "Худи"
	},
	{
		id: 3,
		imgSrc: "/3.a433b89d.jpg",
		price: 253,
		discount: 78,
		thing: "Комбинезон"
	}
]

const header = document.getElementById("header")




//создание кнопки для корзины
const basket = createBtn("", "basket-main", header, "click", () => {
	// if (basketWrapper.style.display === "none") {
	// 	basketWrapper.style.display = "grid"
	// } else { basketWrapper.style.display = "none" }
	// создание wrapper для всей корзины
	const basketWrapper = createElem("div", {
		className: "basketWrapper",
	}, header)


	const basketTopWrapper = createElem("div", {
		className: "basketTopWrapper",
	}, basketWrapper)
	const basketTopText = createElem("span", {
		className: "basketTopText",
		innerText: "Корзина"
	}, basketTopWrapper)
	basketWrapper.style.display = "grid"

	// не совсем уверен как делать. поидее тупо обнулять массив, но не хочет (да и потом обновлять как-то корзину)
	// или через local/session storage
	const deleteAllBasket = createBtn("Очистить корзину", "deleteAllBasket", basketTopWrapper, "click", () => {
		basketData = []
	})

	// наполнение wrapper корзины
	let itemWrapper = createElem("div", {
		className: "itemWrapper",
	}, basketWrapper)


	basketData.forEach((item) => {
		const itemText = document.createElement("p")
		itemText.innerText = item.thing
		const itemPrice = document.createElement("p")
		itemPrice.innerText = item.price.toFixed(2) + "р"
		itemWrapper.appendChild(itemText)
		itemWrapper.appendChild(itemPrice)
	})
	basketWrapper.appendChild(itemWrapper)
	let discountTotal = basketData.reduce(function (sum, elem) {
		return sum + (elem.price * (elem.discount / 100));
	}, 0);
	let discountTotalFixed = discountTotal.toFixed(2)
	let discountForAll = basketData.reduce(function (sum, elem) {
		return sum + elem.price - (elem.price * (elem.discount / 100));
	}, 0);
	let discountForAllFixed = discountForAll.toFixed(2)

	const discountPriceText = createElem("p", {
		innerText: "Скидка"
	}, itemWrapper)
	const discountPriceNum = createElem("p", {
		innerText: `${discountTotalFixed}р`
	}, itemWrapper)

	console.log(discountForAll);

	const totalPriceWrapper = createElem("div", {
		className: "totalPriceWrapper",
	}, basketWrapper)
	const totalPriceText = createElem("p", {
		innerText: "Итого со скидкой:"
	}, totalPriceWrapper)
	const getSumOverall = document.createElement("p")
	getSumOverall.innerText = `${discountForAllFixed} р `
	totalPriceWrapper.appendChild(getSumOverall)


	const buyBasket = createBtn("Сделать заказ", "buyBasket", basketWrapper, "click", () => {
	})
})





