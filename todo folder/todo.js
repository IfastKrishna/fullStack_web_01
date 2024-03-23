let createDv = (Container, Input) => {
  let containerDIV = document.createElement("div");
  containerDIV.classList.add(
    "alert",
    "alert-primary",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "gap-3"
  );
  containerDIV.innerHTML = `<input type="text" id="Input2" class="form-control" value="${Input.value}"/>
        <i class="bi bi-pencil-square"></i>
        <i class="bi bi-trash"></i>`;
  Container.append(containerDIV);
};

function runCode() {
  let Container = document.querySelector("#allList");
  let Input = document.querySelector("#list");

  if (Input.value === "") {
    alert("Please Enter");
  } else {
    createDv(Container, Input);
  }
}

runCode();
