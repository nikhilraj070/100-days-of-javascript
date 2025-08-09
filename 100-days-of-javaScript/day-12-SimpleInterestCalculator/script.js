const principle = document.getElementById("principle")
const interest = document.getElementById("interest")
const years = document.getElementById("years")
const optput = document.getElementById("optput")
function calculate(){
    const amount = parseInt(principle.value)
    const rate = parseInt(interest.value)
    const time = parseInt(years.value)
     if (isNaN(amount) || isNaN(rate) || isNaN(time)) {
        optput.innerText = "Please enter valid numbers in all fields.";
        return;
    }
    const si = (amount * rate * time) / 100;
    optput.innerText = `After ${time} Years your interest will be worth ${si}`
}