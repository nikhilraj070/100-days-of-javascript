const box = document.querySelectorAll('.box')
const date =  new Date()
const hour =   date.getHours();     
const min = date.getMinutes()
const sec = date.getSeconds()

setInterval(()=>{
    const date =  new Date()
let hour =   date.getHours();     
let min = date.getMinutes()
let sec = date.getSeconds()
hour =  hour < 10 ?  `0${hour}`:hour
min =  min < 10 ?  `0${min}`:min
sec =  sec < 10 ?  `0${sec}`:sec
box[0].innerText = hour;
box[1].innerText = min;
box[2].innerText = sec;
},100)
