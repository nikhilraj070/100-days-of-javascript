const button = document.getElementsByClassName('buttons')
const text = document.getElementById('text')
let state = "rgb"
button[0].children[0].addEventListener('click',()=>{
    state = "rgb"
    generate(state)
})
button[0].children[2].addEventListener('click',()=>{
    state = "hex"
    generate(state)
})
function generate(state){
    if(state === "rgb"){
        let r = Math.floor(Math.random()*256) 
        let g = Math.floor(Math.random()*256) 
        let b = Math.floor(Math.random()*256)
        let rgb = `rgb(${r},${g},${b})`
        console.log("hehe");
        document.body.style.backgroundColor=rgb
        text.innerText = rgb
    }
    if(state === "hex"){
        let char= ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
        let hex ='#'
        for(let i =0;i<6;i++){
            hex += char[Math.floor(Math.random()*17)]
        }
        document.body.style.backgroundColor=hex
        text.innerText=hex
    }
}