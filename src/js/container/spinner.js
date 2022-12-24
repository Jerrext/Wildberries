export const toggleSpinner = () => {
    const spinner = document.querySelector(".spinner")
    if(spinner.style.display === "block") {
        spinner.style.display = "none"
    } else {
        spinner.style.display = "block"
    }
}