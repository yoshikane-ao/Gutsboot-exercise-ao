"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("./search");
const arr = [10, 20, 30, 30, 30, 40, 50];
console.log("LB 30 =>", (0, search_1.lowerBound)(arr, 30));
console.log("UB 30 =>", (0, search_1.upperBound)(arr, 30));
console.log("count 30 =>", (0, search_1.countOccurrences)(arr, 30));
console.log("rightmost 30 =>", (0, search_1.binarySearchRightmost)(arr, 30));
console.log("LB 25 =>", (0, search_1.lowerBound)(arr, 25));
console.log("UB 25 =>", (0, search_1.upperBound)(arr, 25));
console.log("count 25 =>", (0, search_1.countOccurrences)(arr, 25));
// console.log("15-EX1 linearSeach index=", binarySearchRightmost(arr, 50));
// console.log("15-EX2 linearSeach not found=", binarySearchRightmost(arr, 999));
//# sourceMappingURL=index.js.map