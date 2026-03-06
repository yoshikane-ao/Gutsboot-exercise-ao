"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n = 17;
if (n % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}
const score = 100;
if (score >= 60) {
    console.log("pass");
}
else {
    console.log("fail");
}
const score2 = 100;
if (score2 >= 90) {
    console.log("A");
}
else if (score2 >= 80) {
    console.log("B");
}
else if (score2 >= 70) {
    console.log("C");
}
else {
    console.log("D");
}
const hour = 1;
if (hour >= 9 && hour <= 18) {
    console.log("open");
}
else {
    console.log("closed");
}
const isMember = true;
const hasCoupon = true;
if (isMember || hasCoupon) {
    console.log("discount");
}
else {
    console.log("no discount");
}
const isLoggedIn = false;
if (!isLoggedIn) {
    console.log("please login");
}
else {
    console.log("OK!");
}
const month = 6;
switch (month) {
    case 1:
        console.log("winter");
        break;
    case 2:
        console.log("winter");
        break;
    case 3:
        console.log("spring");
        break;
    case 4:
        console.log("spring");
        break;
    case 5:
        console.log("spring");
        break;
    case 6:
        console.log("summer");
        break;
    case 7:
        console.log("summer");
        break;
    case 8:
        console.log("summer");
        break;
    case 9:
        console.log("autumn");
        break;
    case 10:
        console.log("autumn");
        break;
    case 11:
        console.log("autumn");
        break;
    default:
    case 12:
        console.log("winter");
        break;
}
const left = 10;
const right = 20;
const op = "+";
switch (op) {
    case "+":
        console.log(left + right);
        break;
    case "-":
        console.log(left - right);
        break;
    case "*":
        console.log(left * right);
        break;
    case "/":
        console.log(left / right);
        break;
}
const age = 20;
if (age >= 20) {
    console.log("OK");
}
const a = true;
const b = true;
const c = true;
console.log((a && b) || c);
console.log(a && (b || c));
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);
let ii = "";
for (let i = 1; i <= 50; i++) {
    if (i % 5 !== 0) {
        continue;
    }
    ii = ii + i + ",";
}
console.log(ii);
//　問題終了クラス
let endpoint = 10;
for (let i = 1; i <= endpoint; i++) {
    if (endpoint !== i) {
        continue;
    }
}
console.log("問題は終了です。");
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
const lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
    console.log(lines[0]);
});
//# sourceMappingURL=index.js.map