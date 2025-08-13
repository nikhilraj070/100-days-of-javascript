const mode = document.getElementsByClassName('material-symbols-outlined')[0];
const body = document.body;

mode.addEventListener("click", () => {
    if (mode.innerText === "dark_mode") {
        body.classList.add("dark");
        mode.innerText = "light_mode";
    } else {
        body.classList.remove("dark");
        mode.innerText = "dark_mode";
    }
});
