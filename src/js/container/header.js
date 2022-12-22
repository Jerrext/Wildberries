const header = document.getElementById('header')

const headerContainer = document.createElement("div")
headerContainer.classList.add('container')

const header__container = document.createElement('div')
header__container.classList.add('header__container')

const header__logo = document.createElement('a')
header__logo.href = "../../index.html"
header__logo.classList.add('header__logo')

const header__searchInput = document.createElement('input')
header__searchInput.setAttribute('type', 'text')
header__searchInput.placeholder = "Я ищу..."
header__searchInput.classList.add('searchInput')

const header__container_nav = document.createElement('div')
header__container_nav.classList.add('header__container_nav')

const header__container_nav_icons = document.createElement('div')
header__container_nav_icons.classList.add('header__container_nav_icons')

const header__basket = document.createElement('div')
header__basket.classList.add('header__basket')

const header__container_nav_title = document.createElement('div')
header__container_nav_title.classList.add('header__container_nav_title')
const header__title_basket = document.createElement('span')
header__title_basket.textContent = 'Корзина'

header__container.appendChild(header__logo)
header__container.appendChild(header__searchInput)
header__container_nav_icons.appendChild(header__basket)

header__container_nav_title.appendChild(header__title_basket)

header__container_nav.appendChild(header__container_nav_icons)
header__container_nav.appendChild(header__container_nav_title)
header__container.appendChild(header__container_nav)
header.appendChild(headerContainer)
headerContainer.appendChild(header__container)

