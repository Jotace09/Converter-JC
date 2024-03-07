const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 5.41
    const libraToday = 6.31
    const bitcoinToday = 312.53493

    const convertedValue = inputCurrencyValue / dolarToday

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name") 
    const currencyImage = document.querySelector(".currency-img")

       if (currencySelect.value == "dolar"){
            currencyName.innerHTML = "Dólar"
            currencyImage.src = "./assets/dolar.png"
          
        }


        if (currencySelect.value == "euro"){
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"
          
        }

        if (currencySelect.value == "libra"){
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/libra 1.png"
          
        }

convertValues()

}


convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)