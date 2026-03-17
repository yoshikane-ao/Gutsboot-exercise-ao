"use strict";
//総合問題
//1問目
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = 0;
const strings = "aaa";
const booleans = true;
const nulls = null;
const undefineds = undefined;
console.log(numbers);
console.log(strings, booleans, nulls, undefineds);
//2問目
const consts1 = "const1";
const consts2 = "const2";
let i = "i";
i = "aiueo";
console.log(i);
//3問目
const x = 10;
const y = 20;
const z = 30;
const total = x + y + z;
const average = total / 3;
console.log(average);
//4問目
const name = "ao";
const age = 26;
console.log(name + " is " + age + " years old");
//5問目
// const names: string = 0; //0を""を付けて文字列型に変更
// const numbers: number = "aiueo"; //"aiueo"を数字に変更
//条件分岐と比較演算子
//1問目
const age2 = 26;
if (age2 >= 20) {
    console.log("adult");
    console.log("minor");
}
//2問目
const point = 100;
if (point >= 90) {
    console.log("A");
}
else if (point >= 80) {
    console.log("B");
}
else if (point >= 70) {
    console.log("C");
}
else {
    console.log("D");
}
//3問目
const age3 = 26;
const hasTicket = true;
if (age3 >= 20 && hasTicket === true) {
    console.log("enter");
}
// 算術演算 / if-else / switch / 論理演算子
//1問目
const n = 2;
if (n % 2 === 0) {
    console.log("even");
}
else
    (console.log("odd"));
{
    console.log("odd");
}
//2問目
const totalprice = 2000;
const people = 10;
console.log("each=", totalprice / people);
//3問目
const day = 1;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("weekday");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("invalid");
        break;
}
//ループ（for / while / do-while / break / continue）
//1問目
const roop1 = 20;
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
//2問目
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log(sum);
//3問目
let result = "";
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    result = result + i + ",";
}
console.log("evens", result);
//4問目
const first_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const n of first_number) {
    if (n % 2 === 0) {
        console.log(n);
    }
}
//5問目
//# sourceMappingURL=index.js.map