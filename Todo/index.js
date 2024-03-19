const AllListContainer = document.querySelector("#allList");

document.querySelector("#todoBtn").addEventListener("click", function () {
  const listInput = document.querySelector("#list");
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(listInput.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  printList();

  listInput.value = "";
});

const createList = (list, listIndex) => {
  const listContainer = document.createElement("div");
  listContainer.classList.add(
    "alert",
    "alert-success",
    "d-flex",
    "align-items-center",
    "gap-3"
  );
  listContainer.innerHTML = ` 
    <input type="text" class="form-control border-0 bg-transparent " id="${listIndex}" value="${list}" disabled/>
    <i class="bi bi-pencil-square fs-4 btn btn-primary" onclick="edit(this)"></i>
    <i class="bi bi-trash3 fs-4 btn btn-danger" onclick="destroy(this)"></i>
 `;
  AllListContainer.append(listContainer);
};

function edit(currEl) {
  const listContainer = currEl.parentElement;
  const listInput = listContainer.querySelector("input");

  listContainer.innerHTML = ` <input type="text" class="form-control" id="${listInput.id}" value="${listInput.value}"/>
    <i class="bi bi-floppy-fill fs-4 btn btn-primary" onclick="save(this)"></i>
    <i class="bi bi-trash3 fs-4 btn btn-danger" onclick="destroy(this)"></i>`;
}

function save(currEl) {
  const listContainer = currEl.parentElement;
  const listInput = listContainer.querySelector("input");

  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos[Number(listInput.id)] = listInput.value;
  localStorage.setItem("todos", JSON.stringify(todos));

  listContainer.innerHTML = `<input type="text" class="form-control border-0 bg-transparent" id="${listInput.id}" value="${listInput.value}" disabled/>
    <i class="bi bi-pencil-square fs-4 btn btn-primary" onclick="edit(this)"></i>
    <i class="bi bi-trash3 fs-4 btn btn-danger" onclick="destroy(this)"></i>`;
}

function destroy(currEl) {
  const listContainer = currEl.parentElement;
  const listInput = listContainer.querySelector("input");
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.splice(Number(listInput.id), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  printList();
}

function printList() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  AllListContainer.innerHTML = "";

  todos.forEach((list, i) => {
    createList(list, i);
  });
}

printList();
