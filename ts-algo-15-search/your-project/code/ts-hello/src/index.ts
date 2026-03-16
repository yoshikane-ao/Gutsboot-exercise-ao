import { linearSearch } from "./linearSearch";

const arr = [10, 40, 20, 50, 30];
console.log("15-EX1 linearSeach index=", linearSearch(arr, 50));
console.log("15-EX2 linearSeach not found=", linearSearch(arr, 999));