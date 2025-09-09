
const display = document.getElementById('display')
document.addEventListener("mousemove",(e)=>{
    display.style.left = e.pageX+ "px";  // +15 so it doesn’t overlap cursor
      display.style.top = e.pageY+  "px";
    display.innerText=`X:${e.clientX},Y:${e.clientY}`
})