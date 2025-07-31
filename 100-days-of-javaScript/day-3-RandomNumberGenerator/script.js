let min =   document.getElementById('min')
const max = document.getElementById('max')
const value = document.getElementsByClassName('value')
const generate = document.getElementsByClassName('generate')

min.addEventListener('change',(e)=>{
      min.value = e.target.value
    if(min.value >= 100000 || min.value < 0){
        min.value = 0;
        alert('value Must be between 0 and 100000')
    }
  
})
max.addEventListener('change',(e)=>{
    max.value = e.target.value
    if(max.value >= 100000 || max.value < 0){
        max.value = 0;
        alert('value Must be between 0 and 100000')
        return
    }
    
     
})
generate[0].addEventListener('click' , ()=>{
    if(max.value <= min.value){
        alert("max must be grater than min");
        return
    }
    value[0].innerText = Math.floor(Math.random() * (max.value-min.value) + min.value)
})