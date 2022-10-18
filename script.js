const btn = document.querySelector(".btn")
const tip = document.querySelector("#tip-amount")
const total = document.querySelector("#total-bill")
const error = document.querySelector(".error")
const billAmount = document.querySelector("#bill")

const calculateTip = () => {
    const bill = billAmount.value
    const rate = document.querySelector("#rate").value
    if (bill == "" || rate == "") {
        console.log('Please add a number!')
        error.style.display = 'block'
        return
    }
    const tipAmount = ((bill * rate).toFixed(2))
    tip.textContent = `Tip Amount = $${tipAmount}`
    const billTotal = (bill + tipAmount)
    total.textContent = `Total Bill = $${billTotal}`
}

btn.addEventListener('click', calculateTip)