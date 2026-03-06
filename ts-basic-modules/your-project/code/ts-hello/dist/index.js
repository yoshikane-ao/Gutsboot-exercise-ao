"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const strings_1 = require("./strings");
const Product_1 = require("./models/Product");
console.log((0, math_1.mod)(100, 7));
console.log((0, strings_1.reception)("hellow world"));
const User2 = {
    name: "Ao",
    age: 26,
};
console.log(User2.name);
const a = new Product_1.product("pen", 100, 100);
console.log(a.totalprice());
//# sourceMappingURL=index.js.map