var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement("div");
// `${}` template literal
word.textContent = numberOne + " * " + numberTwo + "?";
document.body.append(word);
var form = document.createElement("form");
document.body.append(form);
var input = document.createElement("input");
input.type = "number";
form.append(input);
var button = document.createElement("button");
button.textContent = "Submit";
form.append(button);
var resultDiv = document.createElement("div");
document.body.append(resultDiv);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (result === Number(input.value)) {
        resultDiv.textContent = "Walla";
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        word.textContent = numberOne + " * " + numberTwo + "?";
        input.value = "";
        // submit 하고 input으로 커서가 돌아간다.
        input.focus();
    }
    else {
        resultDiv.textContent = "Try again";
        input.value = "";
        input.focus();
    }
});
// tsc lecture.ts -w
var num = 1;
var str = String(num);
var arr = [1, 2, 3];
var arr2 = [4, 5, 6];
// tuple
var arr3 = [true, 2, "3"];
// arr3[1] = 2;
var arr4 = [true, 2, "3"]; // 절대 안바뀜
// O
var obj = { a: "c" };
obj.a = "d";
// X
// const obj2 = {a: "c"} as const;
// obj2.a = "d";
var obj3 = { a: "b" }; // decalre your own types instead of object
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var a123 = true ? "b" : "c";
// const b = abc?.name; ?.
function add(a, b) {
    return a + b;
}
// 함수에 return이 없으면 void
var add2 = function (a, b) {
    //   return a - b;
    console.log(a - b);
};
function add3(a, b) {
    return function (c) {
        return 3;
    };
}
var obj4 = {
    a: function (b, c) {
        return "hello";
    }
};
console.log(obj4.a);
// never type
var array = [];
// array.push(3);
// any
var hi = [];
var div = document.createElement("div");
var a = div;
