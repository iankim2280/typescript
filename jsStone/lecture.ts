// import canUseDom from "can-use-dom";

interface A {
  hello: true;
}
interface B {
  bye: true;
}
type C = {
  hi: false;
};
const a: A = {
  hello: true,
};
const b: B = {
  bye: true,
};
const c: A & B & C = {
  // interface, A & B & C 전부 다 있어야 함
  hello: true,
  bye: true,
  hi: false,
};
const result = Array.prototype.map.call<
  number[],
  [(item: number) => string],
  string[]
>([1, 2, 3], (item) => {
  return item.toFixed(1);
});

const appliedResult = Array.prototype.map.apply<
  number[],
  [(item: number) => string],
  string[]
>(
  [1, 2, 3],
  [
    (item) => {
      return item.toFixed(1);
    },
  ]
);
console.log(result);
