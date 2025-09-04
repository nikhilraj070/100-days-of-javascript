const input = document.getElementsByClassName("inputValue")[0];
const output = document.getElementsByClassName("outputValue")[0];


input.addEventListener("beforeinput",(e)=>{
    console.log(e);
        if (e.inputType.startsWith("delete")) {
      return;
    }
    if (!/^[0-9]$/.test(e.data) && (e.data !== "." || input.value.includes('.'))) {
      e.preventDefault();
    }
})
input.addEventListener("input",()=>{
    output.value = input.value * 12
})