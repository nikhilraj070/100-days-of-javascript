const tex_title = document.getElementById('text-title');
const text_field = document.getElementById('text-field');
const add = document.getElementById('add');
const note = document.getElementById('note');

let items = JSON.parse(localStorage.getItem("items")) || [];

render();

add.addEventListener('click', () => {
  if (tex_title.value.trim() === "" || text_field.value.trim() === "") {
    alert(`${tex_title.value ? "Enter message" : "Enter title"}`);
    return;
  }

  let obj = {
    title: tex_title.value,
    message: text_field.value
  };

  items.push(obj);
  localStorage.setItem("items", JSON.stringify(items));
  render();

  tex_title.value = '';
  text_field.value = '';
});

function render() {
  note.innerHTML = ''; 
  items.forEach((element, index) => {
    const notes = document.createElement('div');
    notes.classList.add("note");

    notes.innerHTML = `
      <p>Note ${index + 1}</p>
      <h1>${element.title}</h1>
      <p>${element.message}</p>
      <div class="buttons">
        <button class="delete" data-index="${index}">Delete Notes</button>
        <button class="edit" data-index="${index}">Edit Notes</button>
      </div>
    `;

    note.appendChild(notes);
  });

  
  document.querySelectorAll(".delete").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.target.getAttribute("data-index");
      items.splice(i, 1);
      localStorage.setItem("items", JSON.stringify(items));
      render();
    });
  });


  document.querySelectorAll(".edit").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.target.getAttribute("data-index");
      const newTitle = prompt("Enter new title:", items[i].title);
      const newMsg = prompt("Enter new message:", items[i].message);

      if (newTitle !== null) items[i].title = newTitle;
      if (newMsg !== null) items[i].message = newMsg;

      localStorage.setItem("items", JSON.stringify(items));
      render();
    });
  });
}
