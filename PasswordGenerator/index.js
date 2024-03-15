function ok() {
  let inputValue = document.querySelector("#inputValue");
  let Range = document.querySelector("#range");
  let number = document.querySelector(".number").checked;
  let uniqueChar = document.querySelector(".UniqueChar").checked;
  let rangValeue = document.querySelector("#rangValeue");
  rangValeue.textContent = Range.value;

  const password = gen(Range, number, uniqueChar);
  inputValue.value = password;
}
ok();

function gen(Range, number, uniqueChar) {

  let mixedStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let num = "1234567890";
  let uniq = "!@#$%^&*()?/.,><{}|+=_-~`";

  let password = "";

  if (number && uniqueChar) {
    let str = mixedStr + num + uniq;
    for (let i = 0; i < Range.value; i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }
  } else if (uniqueChar) {
    let str = mixedStr + uniq;
    for (let i = 0; i < Range.value; i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }
  } else if (number) {
    let str = mixedStr + num;
    for (let i = 0; i < Range.value; i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }
  } else {
    let str = mixedStr;
    for (let i = 0; i < Range.value; i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }
  }

  return password;
}
