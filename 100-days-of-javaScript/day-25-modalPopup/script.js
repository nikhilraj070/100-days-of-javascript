const container = document.getElementsByClassName('container')[0]
const model_button = document.getElementsByClassName('modal_button')[0]
const model = document.getElementsByClassName('model')[0]

container.addEventListener('click',()=>{
    container.classList.toggle('hide')
    model.classList.remove('hide')
})
model_button.addEventListener('click',()=>{
    model.classList.add('hide')
    container.classList.remove('hide')
})