const click = document.getElementsByClassName('click')[0]
const count = document.getElementsByClassName('count')[0]
const time = document.getElementsByClassName('time')[0]
let counter =0 ;
let timeLeft = 10;
let timer = null;
click.addEventListener('click', ()=>{
    if(timeLeft > 0){
        counter++;
        count.innerText = `count :- ${counter}`
    }
  if (!timer) { 
        startTimer();
    }
})



function startTimer(){
    timer = setInterval(()=>{
    if(timeLeft > 0){
        timeLeft--;
        time.innerText = `Time left :- ${timeLeft}`
    }
    else{
        clearInterval(timer)
        click.disabled = true;
        alert("time over")
    }
},1000)

}





