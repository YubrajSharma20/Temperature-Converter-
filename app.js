const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector(".convert-btn");
const tempType = document.querySelector("#temp-type");



window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})


convertBtn.addEventListener("click", (e) => {
    console.log("clicked");

    e.preventDefault();
    convertToCelsius();

})



function convertToCelsius() {
    let inputValue = degree.value;
    setTimeout(() => {
        if (tempType.value === "Fahrenheit") {
            const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${ FahrenheitToCelsius.toFixed(3) } &#176C`
        }
        else if (tempType.value === "Kelvin") {
            const KelvinToCelsius = inputValue - 273;
            celsiusField.innerHTML = `${ KelvinToCelsius.toFixed(3) } &#176C` 
        }
    }, 1200)
}