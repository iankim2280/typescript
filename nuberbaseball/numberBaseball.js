var body = document.body;
var candidate;
var array = [];
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (var i = 0; i < 4; i++) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
console.log(array);
var result = document.createElement("h1");
result.textContent = "Guess 4 numbers";
body.append(result);
var form = document.createElement("form");
document.body.append(form);
var input = document.createElement("input");
form.append(input);
input.type = "text";
input.maxLength = 4;
var button = document.createElement("button");
button.textContent = "입력!";
form.append(button);
var wrongCount = 0;
var resetFunction = function () {
    input.value = "";
    input.focus();
    chooseNumber();
    wrongCount = 0;
};
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === array.join("")) {
        result.textContent = "Home run";
        resetFunction();
    }
    else {
        var answerArray = answer.split("");
        var strike = 0;
        var ball = 0;
        wrongCount++;
        if (wrongCount >= 10) {
            result.textContent = "The answer was " + array;
            resetFunction();
        }
        else {
            console.log("wrong answer " + answerArray);
            for (var i = 0; i <= 3; i++) {
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
        result.textContent = strike + " strikes " + ball + " balls";
        input.value = "";
        input.focus();
    }
});
var hi = { a: "b" };
var hi2 = { a: "b" };
