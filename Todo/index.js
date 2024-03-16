let editBtn;
let saveBtn;

function addItem() {
  const item = document.querySelector("#item");
  if (item.value !== "") {
    let db = JSON.parse(localStorage.getItem("ItemDB")) || [];
    db.push(item.value);
    localStorage.setItem("ItemDB", JSON.stringify(db));
    printItem();
    item.value = "";
  }
}

const createItem = (item) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add(
    "alert",
    "alert-success",
    "d-flex",
    "gap-3",
    "my-2"
  );
  itemContainer.innerHTML = ` 
      <input type="text" class="form-control border-0 bg-transparent " value="${item}" disabled/>
      <i class="bi bi-pencil-fill btn  btn-primary" type="button" onclick="edit(this)"></i>
      <i class="bi bi-trash3-fill btn  btn-danger" type="button" onclick="destroy(this)"></i>`;
  return itemContainer;
};

function edit(currEl) {
  const listContainer = currEl.parentElement;
  const item = listContainer.querySelector("input").value;
  listContainer.innerHTML = `
      <input type="text" class="form-control" value="${item}"/>
      <i class="bi bi-floppy btn  btn-success" type="button" onclick="save(this)"></i>
      <i class="bi bi-trash3-fill btn  btn-danger" type="button" onclick="destroy(this)"></i>`;
  const input = listContainer.querySelector("input");
  input.focus();
  input.selectionEnd = item.length;
}

function save(currEl) {
  const listContainer = currEl.parentElement;
  const item = listContainer.querySelector("input").value;
  console.log(listContainer.parentElement.children);
  const index = Array.from(listContainer.parentElement.children).indexOf(
    listContainer
  );
  console.log(index);
  let db = JSON.parse(localStorage.getItem("ItemDB")) || [];
  db[index] = item;
  localStorage.setItem("ItemDB", JSON.stringify(db));
  listContainer.innerHTML = `
      <input type="text" class="form-control border-0 bg-transparent " value="${item}" disabled/>
      <i class="bi bi-pencil-fill btn  btn-primary" type="button" onclick="edit(this)"></i>
      <i class="bi bi-trash3-fill btn  btn-danger" type="button" onclick="destroy(this)"></i>`;
}

function destroy(currEl) {
  const listContainer = currEl.parentElement;
  const index = Array.from(listContainer.parentElement.children).indexOf(
    listContainer
  );
  let db = JSON.parse(localStorage.getItem("ItemDB")) || [];
  db.splice(index, 1);
  localStorage.setItem("ItemDB", JSON.stringify(db));
  listContainer.remove();
}

function printItem() {
  const allItem = document.querySelector("#allitem");
  allItem.innerHTML = "";
  let db = JSON.parse(localStorage.getItem("ItemDB")) || [];
  db.forEach((item) => {
    const itemContainer = createItem(item);
    allItem.appendChild(itemContainer);
  });
}

printItem();
