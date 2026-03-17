"use strict";
// const numbers: number[] = [10, 20];
// numbers.push(30);
// console.log(numbers.join(","));
Object.defineProperty(exports, "__esModule", { value: true });
// const last = numbers.pop();
// console.log("popped:", last);
// console.log(numbers.join(","));
// const numbers: number[] = [10, 20, 30];
// let sum: number = 0;
// for (const n of numbers) {
//   sum = sum + n;
// }
// console.log("sum:", sum);
//演習1
const numbers = [3, 6, 9];
console.log(numbers.join(","));
//演習2
const numbers2 = [3, 6, 9];
console.log(numbers2[numbers.length - 1]);
//演習3
const numbers3 = [3, 6, 9];
numbers3.push(12);
console.log(numbers3);
//演習4
const last = numbers.pop();
console.log(last);
console.log(numbers.join(","));
//演習5
const names = ["Taro", "Hanako", "Jiro"];
console.log(names.includes("Hanako"));
console.log(names.includes("Saburo"));
//演習6
const numbers4 = [3, 6, 9];
let sum = 0;
for (const n of numbers4) {
    sum = sum + n;
}
console.log(sum);
//演習7
// let names2: string ="";
// const names3: number[] = [20];
// for (let i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     names2 = names2 + i + ","
//   }
// }
// console.log(names2)
// const numbers5: number[] = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i % 2 === 0; ) {
//     console.log("numbers:", i.join);
//   }
const numbers7 = [10, 20, 30];
for (const n of numbers7) {
    console.log("value=", n);
}
//演習8
const numbers8 = [3, 6, 9];
const doubled = numbers8.map((n) => n * 2);
console.log("doubled:", doubled.join(","));
//演習9
const numbers9 = [1, 2, 3, 4, 5, 6];
const evens = numbers9.filter((n) => n % 2 === 0);
console.log("evens:", evens.join(","));
//演習10
const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers10
    .filter((n) => n >= 5)
    .map((n) => n * 2);
9;
console.log(result.join(","));
//# sourceMappingURL=index.js.map