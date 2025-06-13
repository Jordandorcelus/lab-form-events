const main = document.querySelector(".todo-main");
console.log(main);

const list = document.querySelector(".todo-list");
const input = document.querySelector(".todo-form__input");

const form = document.querySelector(".todo-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    addList();
});

function addList() {
    const todoText = input.value.trim();
    if (todoText === "") return;

    const li = document.createElement("li");
    li.classList.add("todo-item");

    const span = document.createElement("span");
    span.textContent = todoText;
    span.classList.add("todo-text");

    // Toggle completed state
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    // Use a button for delete (more semantic)
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("aria-label", "Delete todo");

    // Add delete behavior
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
}



