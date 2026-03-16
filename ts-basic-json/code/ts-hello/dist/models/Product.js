"use strict";
// export class Product {
//   name: string;
//   price: number;
//   quantity: number;
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
//   constructor(name: string, price: number, quantity: number) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }
//   totalPrice(): number {
//     return this.price * this.quantity;
//   }
// }
class product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    totalprice() {
        return this.price * this.quantity;
    }
}
exports.product = product;
//# sourceMappingURL=Product.js.map