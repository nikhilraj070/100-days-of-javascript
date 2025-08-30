const text =document.getElementById("text"),
copy = document.getElementById('copy')
copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(text.value)
    .then(()=>{
        alert("Copied to clipboard")
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
})