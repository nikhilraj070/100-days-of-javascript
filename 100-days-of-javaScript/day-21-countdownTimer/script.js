const time = document.getElementById("time");
const output = document.getElementById("output");
const play = document.getElementsByClassName('play')[0]
console.log(play);
let timer=null;
let min= 0;
let hour = 0 ;
let sec = 0 ; 
time.addEventListener("input",()=>{
        min = parseInt(time.value)
        hour = 0
        console.log(min);
        while(min > 59){
        hour++;
        min = min-60;
    }
})

function action(){
    time.setAttribute("readonly", "true");
 
    if(timer === null){
       
       if(play.classList.contains("play")){
      

       play.innerText= "pause"
       timer = setInterval(() => {
        output.innerText = `${hour <= 9 ? `0${hour}`:hour}:${min <= 9 ? `0${min}`:min}:${sec <= 9 ? `0${sec}`:sec}`
         if (hour === 0 && min === 0 && sec === 0){
            alert("Time over")
            clearInterval(timer)
            reset()
            return;
        }
         if(sec === 0){
            min--;
            sec=59
         }
         if(min < 0 && hour >= 1){
            hour--;
            min = 59
         }        
        sec--;
       }, 1000);
    } 
    }
   
    if(play.classList.contains("pause")){
        play.innerText= "play"
        clearInterval(timer)
        timer=null
    }
    
     play.classList.toggle("pause")
}
function reset(){
      output.innerText="00:00:00"
    min=0;
    hour=0;
    sec=0
    time.value=''
    clearInterval(timer);
    timer = null
    time.removeAttribute("readonly")
}