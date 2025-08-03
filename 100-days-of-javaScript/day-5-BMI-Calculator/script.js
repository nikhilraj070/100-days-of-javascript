const height = document.getElementById('height')
const weight = document.getElementById('weight')
const result = document.getElementById('result')
const condition = document.getElementById('condition')
 
function calculate(){
   
    let hei = parseInt(height.value)
    let wei = parseInt(weight.value)
    let BMI = wei/(hei / 100) ** 2;
    console.log(BMI);
    result.value= BMI.toFixed(2)
    if (BMI < 18.5) {
            condition.innerText = "Underweight 😕";
        }
    else if (BMI < 24.9) {
            condition.innerText = "Normal 😊";
        } 
    else if (BMI < 29.9) {
            condition.innerText = "Overweight 😐";
        } 
    else {
            condition.innerText = "Obese 😟";
        } 
}