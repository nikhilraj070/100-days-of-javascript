const text = document.getElementById('text')
const result = document.getElementById('result')
let value 
text.addEventListener("input",(e)=>{
    value = e.target.value.trim();
    const words = value === "" ? [] : value.split(/\s+/);
    result.children[0].children[1].innerText = words.length
})
