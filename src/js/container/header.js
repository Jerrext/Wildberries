const header = document.getElementById('header')

const header__container = document.createElement('div')
header__container.classList.add('header__container')

const header__logo = document.createElement('div')
header__logo.classList.add('header__logo')

const header__searchInput = document.createElement('input')
header__searchInput.setAttribute('type', 'text')
header__searchInput.classList.add('searchInput')

const header__container_nav = document.createElement('div')
header__container_nav.classList.add('header__container_nav')

const header__container_nav_icons = document.createElement('div')
header__container_nav_icons.classList.add('header__container_nav_icons')

const header__address = document.createElement('div')
header__address.classList.add('header__address')
// header__address.textContent = 'Адреса'

const header__profile = document.createElement('div')
header__profile.classList.add('header__profile')

const header__basket = document.createElement('div')
header__basket.classList.add('header__basket')

const header__container_nav_title = document.createElement('div')
header__container_nav_title.classList.add('header__container_nav_title')
const header__title_address = document.createElement('span')
header__title_address.textContent = 'Адреса'
const header__title_profile = document.createElement('span')
header__title_profile.textContent = 'Войти'
const header__title_basket = document.createElement('span')
header__title_basket.textContent = 'Корзина'

header__container.appendChild(header__logo)
header__container.appendChild(header__searchInput)
header__container_nav_icons.appendChild(header__address)
header__container_nav_icons.appendChild(header__profile)
header__container_nav_icons.appendChild(header__basket)

header__container_nav_title.appendChild(header__title_address)
header__container_nav_title.appendChild(header__title_profile)
header__container_nav_title.appendChild(header__title_basket)

header__container_nav.appendChild(header__container_nav_icons)
header__container_nav.appendChild(header__container_nav_title)
header__container.appendChild(header__container_nav)
header.appendChild(header__container)