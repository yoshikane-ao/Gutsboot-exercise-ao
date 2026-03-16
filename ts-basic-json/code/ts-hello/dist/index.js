"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//演習問題
//問題1
const question1 = { id: 1, name: "Taro" };
console.log(question1.name);
//問題2
const userObj = { id: 1, name: "Taro", age: 20 };
const pretty = JSON.stringify(userObj, null, 2);
console.log(pretty);
//問題3
const userJsonText = '{"x":10,"y":"20"}';
const parsed = JSON.parse(userJsonText);
console.log(parsed.x + parsed.y);
//問題4
const broken = '{"id": 1, }';
try {
    JSON.parse(broken);
    console.log("this will not run");
}
catch (e) {
    if (e instanceof Error) {
        console.log("error:", e.message);
    }
}
//# sourceMappingURL=index.js.map