import { isValidBrackets } from "./examples/bracketCheck";
// import { serveInOrder } from "./examples/queueSimulation";
import { countWords } from "./examples/frequencyCount";
// import { insert, inorder } from "./examples/bstConcept";

console.log("stack bracket OK =>", isValidBrackets("(a[b]{c})"));
console.log("stack bracket NG =>", isValidBrackets("(a[b]{c})]"));


const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const freq = countWords(words);


const values = [5, 3, 8, 2, 4, 7, 9];
let root = null;