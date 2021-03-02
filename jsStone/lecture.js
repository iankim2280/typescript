"use strict";
// import canUseDom from "can-use-dom";
const a = {
    hello: true,
};
const b = {
    bye: true,
};
const c = {
    // interface, A & B & C 전부 다 있어야 함
    hello: true,
    bye: true,
    hi: false,
};
const result = Array.prototype.map.call([1, 2, 3], (item) => {
    return item.toFixed(1);
});
const appliedResult = Array.prototype.map.apply([1, 2, 3], [
    (item) => {
        return item.toFixed(1);
    },
]);
console.log(result);
