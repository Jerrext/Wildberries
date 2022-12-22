//Здесь будут храниться наши данные, которые мы будем использовать для динамического создания карточек, товаров корзины и тд.

export { cardData, basketData, images}

const cardData = [
    {
        id: 1,
        imgSrc: "https://basket-04.wb.ru/vol438/part43830/43830448/images/big/1.jpg",
        price: 270,
        discount: 90,
        thing: "Гирлянда"
    },
    {
        id: 2,
        imgSrc: "https://basket-08.wb.ru/vol1157/part115782/115782018/images/big/1.jpg",
        price: 69,
        discount: 48,
        thing: "Худи"
    },
    {
        id: 3,
        imgSrc: "https://basket-05.wb.ru/vol906/part90623/90623197/images/big/1.jpg",
        price: 253,
        discount: 78,
        thing: "Комбинезон"
    }
]

const basketData = []

const images = [
    'https://images.wbstatic.net/bners1/big_new__22.jpg',
    'https://images.wbstatic.net/bners1/big_brand_17_12_22.jpg',
    'https://images.wbstatic.net/bners1/big_cosmetics1.jpg',
    'https://images.wbstatic.net/bners1/big_toys.jpg',
    'https://images.wbstatic.net/bners1/big_inditexx_14_11_22.jpg',
]
