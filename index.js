/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numInputEl = document.getElementById("numInput")
const lengthConversionEl = document.getElementById("lengthConversion")
const volumeConversionEl = document.getElementById("volumeConversion")
const massConversionEl = document.getElementById("massConversion")

numInputEl.addEventListener("input", resizeInput)
resizeInput.call(numInputEl)

function resizeInput(){
    this.style.width = this.value.length + "ch"
}

function meterToFeet(){
    let value = numInputEl.value
    let a = (value * 3.281).toFixed(3)
    let b = (value / 3.281).toFixed(3)
    // let lengthConversionEl = sum
    lengthConversionEl.textContent = `${value} meters = ${a} feet | ${value} feet = ${b} meters`
}

function literToGallon(){
    let value = numInputEl.value
    let c = (value * 0.264).toFixed(3)
    let d = (value / 0.264).toFixed(3)
    // let lengthConversionEl = sum
    volumeConversionEl.textContent = `${value} liter = ${c} gallons | ${value} gallons = ${d} liters`
}

function kiloToPound(){
    let value = numInputEl.value
    let e = (value * 2.204).toFixed(3)
    let f = (value / 2.204).toFixed(3)
    // let lengthConversionEl = sum
    massConversionEl.textContent = `${value} kilograms = ${e} pounds | ${value} pounds = ${f} kilograms`
}
