let numberOne = Math.ceil(Math.random() * 9);
let numberTwo = Math.ceil(Math.random() * 9);
let result = numberOne * numberTwo;

const word = document.createElement("div");
// `${}` template literal
word.textContent = `${numberOne} * ${numberTwo}?`;
document.body.append(word);

const form = document.createElement("form");
document.body.append(form);

const input = document.createElement("input");
input.type = "number";
form.append(input);

const button = document.createElement("button");
button.textContent = "Submit";
form.append(button);

const resultDiv = document.createElement("div");
document.body.append(resultDiv);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (result === Number(input.value)) {
    resultDiv.textContent = "Walla";
    numberOne = Math.ceil(Math.random() * 9);
    numberTwo = Math.ceil(Math.random() * 9);
    result = numberOne * numberTwo;
    word.textContent = `${numberOne} * ${numberTwo}?`;
    input.value = "";
    // submit 하고 input으로 커서가 돌아간다.
    input.focus();
  } else {
    resultDiv.textContent = "Try again";
    input.value = "";
    input.focus();
  }
});
// tsc lecture.ts -w
