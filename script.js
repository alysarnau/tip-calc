const btn = document.querySelector(".btn")
const tip = document.querySelector("#tip-amount")
const total = document.querySelector("#total-bill")
const error = document.querySelector(".error")
const billAmount = document.querySelector("#bill")
const note = document.querySelector('#note')

const hideError = () => {
    setTimeout(() => {
        error.style.display = 'none'
        note.style.display = 'none'
    }, 5000)
}

const calculateTip = () => {
    const bill = billAmount.value
    const rate = document.querySelector("#rate").value
    if (bill == "" || rate == "") {
        console.log('Please add a number!')
        error.style.display = 'block'
        hideError();
    } else if (rate < .2) {
        note.style.display = 'block'
        let tipAmount = (bill * rate);
        tipAmount =(tipAmount).toFixed(2);
        tip.textContent = `Tip Amount = $${tipAmount}`
        let billTotal = (Number(bill) + Number(tipAmount)).toFixed(2)
        total.textContent = `Total Bill = $${billTotal}`
        hideError()
    } else if (isNaN(bill)) {
        error.style.display = 'block'
        error.textContent = `Please enter a number.`
        hideError();
    } else {
        let tipAmount = (bill * rate);
        tipAmount =(tipAmount).toFixed(2);
        tip.textContent = `Tip Amount = $${tipAmount}`
        let billTotal = (Number(bill) + Number(tipAmount)).toFixed(2)
        total.textContent = `Total Bill = $${billTotal}`
    }
}

btn.addEventListener('click', calculateTip)