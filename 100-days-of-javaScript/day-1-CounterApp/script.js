const sum = document.getElementById("add")
const sub = document.getElementById("sub")
const display = document.querySelector(".display")
let count = 0 ;
sum.addEventListener("click",()=>{
    count++;
    display.innerText = count
})
sub.addEventListener("click",()=>{
    count--;
    display.innerText = count
})  