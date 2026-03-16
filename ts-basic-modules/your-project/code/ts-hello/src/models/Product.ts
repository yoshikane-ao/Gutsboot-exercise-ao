// export class Product {
//   name: string;
//   price: number;
//   quantity: number;

//   constructor(name: string, price: number, quantity: number) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//   }

//   totalPrice(): number {
//     return this.price * this.quantity;
//   }
// }


export class product {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    
    totalprice(): number {
        return this.price * this.quantity;
    }
}