"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    total() {
        let sum = 0;
        for (const item of this.items) {
            sum = sum + item.totalPrice();
        }
        return sum;
    }
}
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map