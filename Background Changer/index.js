function setBackgroundAndColor(background, color, btn) {
  console.log(btn);
  document.body.style.background = background;
  document.body.style.color = color;
  btn.style.background = color;
  btn.style.color = background;

  removeActive("border-2", "border-opacity-50");
  btn.classList.add("border-2");
}

function removeActive(...clasees) {
  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove(...clasees);
  }
}
