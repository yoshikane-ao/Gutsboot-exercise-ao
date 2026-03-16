"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Ao Yoshikane",
    age: 26,
};
console.log(user);
const user2 = {
    name: "Ao Yoshikane",
    age: 26,
};
console.log("user.name", user.name);
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    totalPrice() {
        return this.price * this.quantity;
    }
}
const p = new Product("pwn", 300, 11);
console.log("合計金額=", p.totalPrice());
class carprice {
    constructor(body, price) {
        this.body = body;
        this.price = price;
    }
    carprice() {
        return this.body * this.price;
    }
    carkind() {
        if (this.body * this.price > 5000) {
            return "High";
        }
        else if (this.body * this.price > 2000) {
            return "midle";
        }
        else
            (this.body * this.price <= 2000);
        return "Low";
    }
    ;
}
const totalprice = new carprice(1000, 1500);
console.log("車の種類", totalprice.carprice, totalprice.carkind());
class counter {
    constructor(value) {
        this.value = value;
    }
    increment() {
        this.value = this.value + 1;
    }
    getvalue() {
        return this.value;
    }
}
const c = new counter(0);
c.increment();
console.log("counter=", c.getvalue());
class Employee {
    constructor(name) {
        this.name = name;
    }
    role() {
        return "Empluyee";
    }
}
class Manager extends Employee {
    constructor(name, teamSize) {
        super(name);
        this.teamSize = teamSize;
    }
    role() {
        return "Manager";
    }
}
const m = new Manager("Sato", 5);
console.log("manager.role", m.role());
console.log("manager.name", m.name);
console.log("manager.teamSize=", m.teamSize);
class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getfullName() {
        return this.firstName + this.lastName;
    }
}
const n = new person("Ao", "Yoshikane");
console.log("フルネーム:", n.getfullName());
class private_age {
    constructor(value) {
        this._age = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 120) {
            console.log("120歳以下で入力してください。");
            return;
        }
        this._age = value;
    }
}
const a = new private_age(0);
a.age = 130;
console.log(a.age);
//# sourceMappingURL=index.js.map