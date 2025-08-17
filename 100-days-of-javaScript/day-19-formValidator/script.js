const id = (id)=> document.getElementById(id)
const userName = id("userName")
const name = id("name")
const phone = id("phone")
const email = id("email")
const passoword = id("passoword")
const submit = id("submit")
const error = id("error")

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    varify()
})
function varify(){
    if(name.value.trim() === ""){
        error.innerText = "Enter your Name"
        return;
    }
    if(userName.value.trim() === ""){
        error.innerText = "Enter your UserName"
        return;
    }
    console.log(phone.value.length);
    if(phone.value.trim() === "" || phone.value.length !== 10 ){
       phone.value.trim() === "" ?error.innerText = "Enter phone number" : error.innerText = "Enter 10 digit phone number"
       return;
    }
    if(email.value.trim() === "" || !email.value.includes('@')){
        error.innerText = email.value.trim() === ""?"Enter your Email":"Enter correct email"
        return;
    }
    if(passoword.value.trim() === "" || passoword.value.length < 6){
       error.innerText = passoword.value.trim() === ""?"Enter your Password":"Password must be 6 digit"
       return;
    }
   error.innerText =""

}