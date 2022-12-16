//Запись данных в localStorage

export const setItem = (data) => localStorage.setItem("basket", JSON.stringify(data))