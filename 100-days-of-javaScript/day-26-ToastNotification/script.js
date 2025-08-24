suscess.addEventListener('click',()=>{
    createToast(success_message,"suscesss")
})

const successBtn = document.getElementById('suscess');
const errorBtn = document.getElementById('error');
const deleteBtn = document.getElementById('delete');
const warningBtn = document.getElementById('warning');
const toast_div = document.getElementById('toast_div');

const error_message = `<span class="material-symbols-outlined">close</span> Something went wrong!`;
const success_message = `<span class="material-symbols-outlined">check</span> Operation successful!`;
const delete_message = `<span class="material-symbols-outlined">delete_forever</span> Item deleted!`;
const warning_message = `<span class="material-symbols-outlined">warning</span> Warning: Check your input!`;

function createToast(message, type) {
    const toast = document.createElement('div');
    toast.classList.add('toast', type);
    toast.innerHTML = `<button class="close" aria-label="Close">&times;</button> ${message}`;
    toast_div.appendChild(toast);


    toast.querySelector('.close').addEventListener('click', () => {
        toast.remove();
    });
   setTimeout(() => {
    toast.classList.add('hide');
        setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, 3000);
}, 50);

}

successBtn.addEventListener('click', () => {
    createToast(success_message, "success");
});
errorBtn.addEventListener('click', () => {
    createToast(error_message, "error");
});
deleteBtn.addEventListener('click', () => {
    createToast(delete_message, "delete");
});
warningBtn.addEventListener('click', () => {
    createToast(warning_message, "warning");
});
