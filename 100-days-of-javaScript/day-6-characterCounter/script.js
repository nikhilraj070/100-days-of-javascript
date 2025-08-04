const text = document.getElementById('text')
const result = document.getElementById('result')
let value 
text.addEventListener("input",(e)=>{
    value = e.target.value;   
    let letter = value.length
  result.children[0].children[1].innerText = letter  
  
})
