import { main } from "./cards.js"

const slider__container = document.createElement('div')
slider__container.classList.add('slider__container')

const slider__container_image = document.createElement('div')
slider__container_image.classList.add('slider__container_image')
const slider__container_dotted = document.createElement('div')
slider__container_dotted.classList.add('slider__container_dotted')
const slider__container_dotted_item = document.createElement('div')
slider__container_dotted_item.classList.add('slider__container_dotted_item')


slider__container_dotted.appendChild(slider__container_dotted_item)
slider__container.appendChild(slider__container_image)
slider__container.appendChild(slider__container_dotted)

main.appendChild(slider__container)

