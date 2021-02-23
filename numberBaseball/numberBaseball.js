"use strict";
const { body } = document;
let candidate;
let array = [];
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
console.log(array);
const result = document.createElement("h1");
result.textContent = "Guess 4 numbers";
body.append(result);
const form = document.createElement("form");
document.body.append(form);
const input = document.createElement("input");
form.append(input);
input.type = "text";
input.maxLength = 4;
const button = document.createElement("button");
button.textContent = "입력!";
form.append(button);
let wrongCount = 0;
const resetFunction = () => {
    input.value = "";
    input.focus();
    chooseNumber();
    wrongCount = 0;
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const answer = input.value;
    if (answer === array.join("")) {
        result.textContent = "Home run";
        resetFunction();
    }
    else {
        const answerArray = answer.split("");
        let strike = 0;
        let ball = 0;
        wrongCount++;
        if (wrongCount >= 10) {
            result.textContent = `The answer was ${array}`;
            resetFunction();
        }
        else {
            console.log(`wrong answer ${answerArray}`);
            for (let i = 0; i <= 3; i++) {
                if (Number(answerArray[i]) === array[i]) {
                    console.log("똑같은 숫자");
                    strike++;
                }
                else if (array.indexOf(Number(answerArray[i])) > -1) {
                    console.log("겹치는 숫자");
                    ball++;
                }
            }
        }
        result.textContent = `${strike} strikes ${ball} balls`;
        input.value = "";
        input.focus();
    }
});
const hi = { a: "b" };
const hi2 = { a: "b" };
