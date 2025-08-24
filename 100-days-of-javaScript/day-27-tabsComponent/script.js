const tab = document.getElementsByClassName('tab');
const values = document.getElementsByClassName('values')
let indexAt = 0;
[...tab].forEach((element,  index) => {
    element.addEventListener("click",()=>{
        [...tab].forEach((element)=>{
           if(element.classList.contains("selected")){
            element.classList.remove("selected")
           }
        })
        element.classList.add("selected")
        indexAt = index; 
      [...values].forEach((element)=>{
           if(element.classList.contains("view")){
            element.classList.remove("view")
           }
        })
      values[index].classList.add('view')
    })
});

