// import { cardData, basketData } from "../store.js";
import { createBtn } from "../utils/createBtn.js";
import { createElem } from "../utils/createElem.js";
// import { setItem } from "../utils/setLocalItems.js";

const basketData1 = [
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

const basket = createBtn("", "basket-main", header, "click", () => {
})

const basketWrapper = createElem("div", {
	className: "basketWrapper",
}, header)


let itemWrapper = document.createElement("div")
itemWrapper.style.display = "grid"
itemWrapper.style.gridTemplateColumns = "100px 20px"

basketData1.forEach((item) => {
	const itemText = document.createElement("p")
	itemText.innerText = item.thing
	const itemPrice = document.createElement("p")
	itemPrice.innerText = item.price
	itemWrapper.appendChild(itemText)
	itemWrapper.appendChild(itemPrice)
})
basketWrapper.appendChild(itemWrapper)

let discountForAll = basketData1.reduce(function (sum, elem) {
	return sum + elem.price - (elem.price * (elem.discount / 100));
}, 0);
let discountForAllFixed = discountForAll.toFixed(2)

console.log(discountForAll);
const getSumOverall = document.createElement("p")
getSumOverall.innerText = `Итого с учетом скидки:${discountForAllFixed} рублей `
basketWrapper.appendChild(getSumOverall)




