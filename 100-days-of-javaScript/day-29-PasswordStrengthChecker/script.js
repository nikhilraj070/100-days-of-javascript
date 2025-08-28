const password = document.getElementById('password')
let pass = ''
let strengthNo = 0 ; 
const char = ["`","~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","\\","|",":",";","?",">","<"]
password.addEventListener("input",(e)=>{
   password.value = password.value.trim();
   pass = password.value;
   
   if(pass.length > 8 ){strengthNo++}
   if(/[A-Z]/.test(pass)){strengthNo++}
   if(/[a-z]/.test(pass)){strengthNo++}
   if(/[0-9]/.test(pass)){strengthNo++}
   let found = char.find(e => pass.includes(e));
   if (found) {
   strengthNo++;
    }
 
    
   strength()



})
function strength(){
    const strengt = document.getElementById('strength')
    if(strengthNo <= 2)
        { strengt.innerText = "Weak"

        }

    else if(strengthNo===3 || strengthNo===4){
      strengt.innerText = "Medium"
    }  
    else{
     strengt.innerText = "Strong"
    }
    strengthNo = 0  
}
strength()