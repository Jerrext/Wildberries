import { basketData } from "../store.js"
import { renderBasket } from "../utils/renderItems.js"
import { createElem } from "../utils/createElem.js"
import { createBtn } from "../utils/createBtn.js"

const view = document.querySelector(".popUp")
const close = document.querySelector(".quick-view__close")
const quickViewImgWrapper = document.querySelector(".quick-view__img-wrapper")
const quickVieDescwWrapper = document.querySelector(".quick-view__description")

const popUpClose = (elem) => {
    elem.style.display = "none"
    document.body.style.overflow = "auto"
    for (let item of [...quickViewImgWrapper.children]) {
        item.remove()
    }
    for (let item of [...quickVieDescwWrapper.children]) {
        item.remove()
    }
}

export const quickViewBtnHandler = (elem) => {
    const { id, imgSrc, price, discount, thing } = elem

    view.style.display = "block"

    view.addEventListener("click", (e) => {
        if (e.target.className === "overlay") {
            popUpClose(view)
        }
    })

    close.addEventListener("click", () => {
        popUpClose(view)
    })

    const cardImg = createElem("img", {
		className: "quick-view__img",
		src: imgSrc,
		alt: thing
	}, quickViewImgWrapper)

    const textThing = createElem("p", {
		className: "quick-view__thing",
        textContent: thing
	}, quickVieDescwWrapper)

    const textDiscPrice = createElem("p", {
		className: "quick-view__discount-price",
        textContent: `${price - (price * (discount / 100))} р.`
	}, quickVieDescwWrapper)

    const textPrice = createElem("p", {
		className: "quick-view__price",
        textContent: `${price} р.`
	}, quickVieDescwWrapper)

    const textDisc = createElem("p", {
		className: "quick-view__discount",
        textContent: `- ${discount}%`
	}, quickViewImgWrapper)

    const addToBasket = createBtn("Добавить в корзину", "quick-view__basket-add-btn", quickVieDescwWrapper, "click", () => {
        basketData.push(elem)
		renderBasket(elem)
	})

    cardImg.addEventListener("mousemove", (e) => {
        if (window.innerWidth > 930) {
            let posX = -e.offsetX + "px"
            let posY = -e.offsetY + "px"
            cardImg.style.objectPosition = `${posX} ${posY}`;
            cardImg.style.width = "200%"
            cardImg.style.height = "200%"
        }
    })

    cardImg.addEventListener("mouseout", () => {
        cardImg.style.objectPosition = "0 0"
        cardImg.style.width = "100%"
        cardImg.style.height = "100%"
    })
}