/** @type {HTMLCanvasElement} */
/** @type {CanvasRenderingContext2D} */

const canvas = document.querySelector("canvas");
const color =document.getElementById('color');
const clear =document.getElementById('clear');
const save =document.getElementById('save');
ctx = canvas.getContext('2d');
window.addEventListener("load",()=>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})
let isDraw = false;
ctx.strokeStyle = "#fff";
color.addEventListener("input", () => {
    ctx.strokeStyle = color.value;
});
canvas.addEventListener("mousedown",(e)=>{
    isDraw= true;
    ctx.beginPath();    
    ctx.moveTo(e.offsetX, e.offsetY);
}) 
canvas.addEventListener("mousemove",(e)=>{
    if(!isDraw) return;
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke()
})
canvas.addEventListener("mouseup",()=>{
    isDraw=false
}) 
clear.addEventListener("click",()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
})
save.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "my_drawing.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});