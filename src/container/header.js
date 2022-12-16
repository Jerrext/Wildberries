export const header = document.getElementById('header')

export const header__logo = document.createElement('div')
header__logo.classList.add('logo')

export const header__searchInput = document.createElement('input')
header__searchInput.setAttribute('type', 'text')
header__searchInput.classList.add('searchInput')

export const header__basket = document.createElement('div')
header__basket.classList.add('basket')

header.appendChild(header__logo, header__searchInput, header__basket)

