import { createElem } from "./createElem.js";

export const createBtn = (value, className, to, onClick, func) => {
    const elem =  createElem("input", {
        type: "button",
        className,
        value
    }, to, onClick, func)

    elem.addEventListener(onClick, func)

    return elem
}