const result = document.getElementById("result");

function check(){
result.value = result.value.replace(/[^0-9+\-*/.]/g, '');
}
document.querySelectorAll('.val').forEach(btn => {
    btn.addEventListener('click', () => {
        check()
        result.value += btn.textContent;
    });
});

function calculate(){
    result.value = eval(result.value) ? eval(result.value) :"Error"
}
function deletes(){
    result.value = result.value.toString().slice(0,-1)

}
