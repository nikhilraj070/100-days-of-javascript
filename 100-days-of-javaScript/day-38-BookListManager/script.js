const bookName = document.getElementById('book');
const authorName = document.getElementById('author');
const add = document.getElementById('add');
const bookList = document.getElementsByClassName('booklist')[0];

let books = JSON.parse(localStorage.getItem("items")) || [];

render();

add.addEventListener('click', () => {
  if (bookName.value.trim() === "" || authorName.value.trim() === "") {
    alert("Enter the author name");
    return;
  }

  let obj = {
    BookName: bookName.value,
    AuthorName: authorName.value
  };

  books.push(obj);
  localStorage.setItem("items", JSON.stringify(books));
  render();

  bookName.value = "";
  authorName.value = "";
});

function render() {
  bookList.innerHTML = '';

  if (books.length === 0) return;

  books = JSON.parse(localStorage.getItem("items"));

  books.forEach((item, index) => {
    bookList.innerHTML += `
      <div class="list">
        <p>${item.BookName} by ${item.AuthorName}</p>
        <button class="delete" data-index="${index}">Delete</button>
      </div>
    `;
  });

  // attach delete events AFTER rendering
  document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener("click", (e) => {
      let i = e.target.getAttribute("data-index");
      books.splice(i, 1);
      localStorage.setItem("items", JSON.stringify(books));
      render();
    });
  });
}
