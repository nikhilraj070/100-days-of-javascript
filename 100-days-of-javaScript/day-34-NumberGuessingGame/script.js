const guess = document.getElementById('guess')
const hint = document.getElementById('hint')
const remain = document.getElementById('remain')
const submit = document.getElementById('submit')
const num = Math.floor(Math.random()*100);
let input;
let chance = 10;
guess.addEventListener("beforeinput",(e)=>{
   if(!/^\d$/.test(e.data) && e.inputType === "insertText"){
      e.preventDefault();
   }    
   guess.value=guess.value.trim()
})
guess.addEventListener("input",(e)=>{
   if(!/^\d*$/.test(e.target.value)){
      guess.value=''
   }    
   guess.value=guess.value.trim()
   input = parseInt(guess.value);
})
submit.addEventListener("click",()=>{
      if(chance === 0){
        hint.innerText="Better Luck Next Time"
        reset();
       
    }
     else  if(input > 100){
        remain.innerText= `Guess remaining: ${chance}`
       chance--;
       hint.innerText="The Number is between 0 to 100"
    }
  
   else  if(input === num){
        remain.innerText="";
        hint.innerText="congrants you won"
        reset();
    }
    else{
         remain.innerText= `Guess remaining: ${chance}`
         chance--;
         if(num > input){
            hint.innerText="your number is small!!"
         }
         else{
            hint.innerText="your number is large!!"
         }
    }
})

function reset(){
   setTimeout(()=>{
    guess.value=''
    chance = 10;
    remain.innerText= `Guess remaining: ${chance}`
    hint.innerText=''
 
   },5000)
    
}