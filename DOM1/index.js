let manu = document.querySelector(".manu");
console.log(manu);

function ok() {
  let list = document.getElementById("list");
  const db = JSON.parse(localStorage.getItem("mytodos")) || [];
  db.push(list.value);
  CreateElement(list.value, db.length);
  localStorage.setItem("mytodos", JSON.stringify(db));
  list.value = null;
}

let CreateElement = (list, i) => {
  if (list !== "") {
    let box = document.createElement("div");
    box.classList.add("contain");
    box.innerHTML = `
        <input type="text" class="background-transparant border-none" style="width: 70%;" id="${i}" value=${list} disabled > 
        <button onclick="edit(this)">Edit</button>
        <button onclick="trash(this)">delete</button>
    `;

    manu.prepend(box);
    list.value = "";
  } else {
    prompt("Please Enter List and Description");
  }
};

function edit(el) {
  el.parentElement.innerHTML = `
    <input type="text" class="" style="width: 70%;" id="${
      el.parentElement.querySelector("input").id
    }" value="${el.parentElement.querySelector("input").value}" > 
    <button onclick="save(this)">save</button>
    <button onclick="trash(this)">delete</button>
`;
}

function save(el) {
  const db = JSON.parse(localStorage.getItem("mytodos")) || [];
  db[Number(el.parentElement.querySelector("input").id)] =
    el.parentElement.querySelector("input").value;
  localStorage.setItem("mytodos", JSON.stringify(db));

  el.parentElement.innerHTML = `
    <input type="text" class="background-transparant border-none" style="width: 70%;" id="${
      el.parentElement.querySelector("input").id
    }" value="${el.parentElement.querySelector("input").value}"disabled > 
    <button onclick="edit(this)">Edit</button>
    <button onclick="trash(this)">delete</button>
 `;
}

function trash(el) {
  console.log("code");
  const db = JSON.parse(localStorage.getItem("mytodos")) || [];
  db.splice(Number(el.parentElement.querySelector("input").id), 1);
  localStorage.setItem("mytodos", JSON.stringify(db));
  manu.innerHTML = "";
  pirntListItem();
}

function pirntListItem() {
  const db = JSON.parse(localStorage.getItem("mytodos")) || [];
  db.forEach((list, i) => {
    CreateElement(list, i);
  });
}

pirntListItem();
// localStorage.setItem()
// JSON.stringify({user:["krishna", "suraj"]})
// '{"user":["krishna","suraj"]}'
// {user:["krishna", "suraj"]}.toString()
// VM4252:1 Uncaught SyntaxError: Unexpected token '.'
// JSON.stringify({user:["krishna", "suraj"]})
// '{"user":["krishna","suraj"]}'
// JSON.parse(
// '{"user":["krishna","suraj"]}'
// )
// {user: Array(2)}user: (2) ['krishna', 'suraj'][[Prototype]]: Object
