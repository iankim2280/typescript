"use strict";
// let numberOne = Math.ceil(Math.random() * 9);
// let numberTwo = Math.ceil(Math.random() * 9);
// let result = numberOne * numberTwo;
// const word = document.createElement("div");
// // `${}` template literal
// word.textContent = `${numberOne} * ${numberTwo}?`;
// document.body.append(word);
// const form = document.createElement("form");
// document.body.append(form);
// const input = document.createElement("input");
// input.type = "number";
// form.append(input);
// const button = document.createElement("button");
// button.textContent = "Submit";
// form.append(button);
// const resultDiv = document.createElement("div");
// document.body.append(resultDiv);
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (result === Number(input.value)) {
//     resultDiv.textContent = "Walla";
//     numberOne = Math.ceil(Math.random() * 9);
//     numberTwo = Math.ceil(Math.random() * 9);
//     result = numberOne * numberTwo;
//     word.textContent = `${numberOne} * ${numberTwo}?`;
//     input.value = "";
//     // submit 하고 input으로 커서가 돌아간다.
//     input.focus();
//   } else {
//     resultDiv.textContent = "Try again";
//     input.value = "";
//     input.focus();
//   }
// });
// // tsc lecture.ts -w
// let num: number = 1;
// let str: string = String(num);
// let arr: number[] = [1, 2, 3];
// let arr2: Array<number> = [4, 5, 6];
// // tuple
// let arr3: (string | number | boolean)[] = [true, 2, "3"];
// // arr3[1] = 2;
// let arr4 = [true, 2, "3"] as const; // 절대 안바뀜
// // O
// const obj = {a: "c"};
// obj.a = "d";
// // X
// // const obj2 = {a: "c"} as const;
// // obj2.a = "d";
// const obj3: {a: string; b?: number /* ?는 없어도 됨. */} = {a: "b"}; // decalre your own types instead of object
// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// let c: Color = Color.Blue;
// const a123 = true ? "b" : "c";
// // const b = abc?.name; ?.
// function add(a: number, b: number): string | number {
//   return a + b;
// }
// // 함수에 return이 없으면 void
// const add2 = (a: number, b: number): void => {
//   //   return a - b;
//   console.log(a - b);
// };
// function add3(a: number, b: number): (c: string) => number {
//   return (c: string) => {
//     return 3;
//   };
// }
// const obj4: {a?: (b: number, c?: string) => string} = {
//   a(b: number, c?: string) {
//     return "hello";
//   },
// };
// console.log(obj4.a);
// // never type
// const array: [] = [];
// // array.push(3);
// // any
// const hi: any = [];
// const div = document.createElement("div");
// const a = div as HTMLElement;
