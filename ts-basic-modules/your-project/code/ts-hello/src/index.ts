import { mod } from "./math";
import { reception } from "./strings";
import { product } from "./models/Product";
import { User } from "./types";

console.log(mod(100, 7))
console.log(reception("hellow world"))

const User2: User = {
    name: "Ao",
    age: 26,
}
console.log(User2.name)


const a = new product("pen", 100, 100);
console.log(a.totalprice());