import { binarySearchRightmost, lowerBound, upperBound, countOccurrences } from "./search";

const arr = [10, 20, 30, 30, 30, 40, 50];

console.log("LB 30 =>", lowerBound(arr, 30));
console.log("UB 30 =>", upperBound(arr, 30));
console.log("count 30 =>", countOccurrences(arr, 30));
console.log("rightmost 30 =>", binarySearchRightmost(arr, 30));

console.log("LB 25 =>", lowerBound(arr, 25));
console.log("UB 25 =>", upperBound(arr, 25));
console.log("count 25 =>", countOccurrences(arr, 25));
// console.log("15-EX1 linearSeach index=", binarySearchRightmost(arr, 50));
// console.log("15-EX2 linearSeach not found=", binarySearchRightmost(arr, 999));