const password = document.getElementById('password')
const pass = document.querySelector('.status')

pass.addEventListener('click',()=>{
    if(pass.classList.contains('hide')){
        pass.classList.remove('hide')
        pass.classList.add('show')
        password.type ="password"
        pass.innerText = "show"
    }
    else{
        pass.classList.remove('show')
        pass.classList.add('hide')
        password.type = "text"
        pass.innerText = "hide"
    }
})