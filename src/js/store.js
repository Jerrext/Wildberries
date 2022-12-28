//Здесь будут храниться наши данные, которые мы будем использовать для динамического создания карточек, товаров корзины и тд.

export { basketData, images}

let basketData = []

const images = [
    'https://images.wbstatic.net/bners1/big_new__22.jpg',
    'https://images.wbstatic.net/bners1/big_brand_17_12_22.jpg',
    'https://images.wbstatic.net/bners1/big_cosmetics1.jpg',
    'https://images.wbstatic.net/bners1/big_toys.jpg',
    'https://images.wbstatic.net/bners1/big_inditexx_14_11_22.jpg',
]

if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify(basketData))
}

basketData = JSON.parse(localStorage.getItem("basket"))