"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHI() {
    console.log("sayHI");
}
sayHI();
function greet(name) {
    console.log("Hello" + name + "!");
}
greet("Taro");
greet("Hanako");
function add(x, y) {
    return x + y;
}
const result = add(3, 5);
console.log("add(3, 5)=", result);
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
const sub_result = sub(10, 3);
const mul_result = mul(4, 5);
const div_result = div(10, 4);
console.log("sub_result", sub_result, "mul_result", mul_result, "div_result", div_result);
const addArrow = (x, y) => {
    return x + y;
};
console.log("addArrow(2, 4)=", addArrow(2, 4));
function isEven(n) {
    return n % 2 === 0;
}
;
const result2 = isEven(7);
const result3 = isEven(8);
console.log(result2, result3);
const addArrow2 = (name) => {
    console.log("Hellow, " + name + "!");
};
addArrow2("Taro");
addArrow2("Hanako");
const addArrow3 = (x, y) => {
    return x + y;
};
const result4 = addArrow3(3, 5);
console.log("addArrow(3, 5)=", result);
const isEven2 = (n) => {
    return n % 2 === 0;
};
const even = isEven2(8);
const odd = isEven2(7);
console.log("isEven(8)", even, "isEven(7)", odd);
//# sourceMappingURL=index.js.map