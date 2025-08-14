const text = document.getElementById('text')
const count = document.getElementsByClassName('count')[0]
let char =0 ;
text.addEventListener('input',()=>{
   char = text.value.length;
   count.innerText =`character = ${char} `;
})