import { cardData, basketData } from "../store.js";
import { createBtn } from "../utils/createBtn.js";
import { createElem } from "../utils/createElem.js";
import { setItem } from "../utils/setLocalItems.js";
import { itemWrapper, discountPriceNum, getSumOverall } from "./basket.js";

const main = document.getElementById("main")

const cards = createElem("section", {
    className: "cards"
}, main)

const renderCard = (elem, to) => {
    const { id, imgSrc, price, discount, thing } = elem

    const cardWrapper = createElem("div", {
        className: "cards__card-wrapper"
    },to)

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
        const itemText = createElem("p", {
            textContent: thing
        }, itemWrapper)
        const itemPrice = createElem("p", {
            textContent: price.toFixed(2) + "р"
        }, itemWrapper)

        // получилось что-то типо такого

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