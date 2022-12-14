export const createElem = (tag, options, to) => {
    const elem = document.createElement(tag)

    Object.keys(options).forEach(item => {
        elem[item] = options[item]
    })
    to.appendChild(elem)

    return elem
}

//при создании элементов можете использовать эту функцию: 
//createElem("Название тега, который создаете", "объект со свойствами атрибутов тега", "элемент, "переменная элемента, в которую вы добавляете создаваемый элемент")
//например:
//const label = document.createElement("label")
//const checkboxInp = createElem("input", {
//     type: "checkbox",
//     name: "select",
//     id: 1,
//     checked: false
// }, label)