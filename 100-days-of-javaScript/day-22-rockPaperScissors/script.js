const element = (className)=>document.getElementsByClassName(className)[0];
const user = element("user")
const comp = element("comp")
const rock = element("rock")
const paper = element("paper")
const scissor = element("scissor")
const result = element("result")
let compScore =0 ;
let userScore =0 ;
let compSelect = ""
let userSelect = ""

rock.addEventListener('click',()=>{
   userSelect = "rock"
    calScore()
})
paper.addEventListener('click',()=>{
    userSelect = "paper"
    calScore()
})
scissor.addEventListener('click',()=>{
     userSelect = "scissor"
    calScore()
})




function compPlay(){
    const items = ["rock","paper","scissor"];
    return items[Math.floor(Math.random()*3)];
     
}

function calScore(){
   compSelect = compPlay()
   result.innerText = `you choose ${userSelect} and computer select ${compSelect} .`
   if(userSelect === "rock" && compSelect === "paper" || userSelect === "scissor" && compSelect === "rock" || userSelect === "paper" && compSelect === "scissor"){
    compScore++;
    result.innerText += " And Computer wins"
   }
   else if(userSelect === compSelect){
    result.innerText += " And it's draw"
   }
   else{
    result.innerText += " And you wins"
    userScore++;
   }
   
   user.innerText = `Your score :- ${userScore}`
   comp.innerText = `Computer score :- ${compScore}`
}



function reset(){
  compScore = 0;
    userScore = 0;
    user.innerText = "Your score :- 0";
    comp.innerText = "Computer score :- 0";
    result.innerText = "Choose you weapon";
}