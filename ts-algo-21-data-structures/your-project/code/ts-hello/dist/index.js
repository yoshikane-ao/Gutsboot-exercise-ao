"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bracketCheck_1 = require("./examples/bracketCheck");
// import { serveInOrder } from "./examples/queueSimulation";
const frequencyCount_1 = require("./examples/frequencyCount");
// import { insert, inorder } from "./examples/bstConcept";
console.log("stack bracket OK =>", (0, bracketCheck_1.isValidBrackets)("(a[b]{c})"));
console.log("stack bracket NG =>", (0, bracketCheck_1.isValidBrackets)("(a[b]{c})]"));
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const freq = (0, frequencyCount_1.countWords)(words);
const values = [5, 3, 8, 2, 4, 7, 9];
let root = null;
//# sourceMappingURL=index.js.map