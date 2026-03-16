const user = {
  name: "Ao Yoshikane",
  age: 26,
};

console.log(user);


interface User {
  name: string;
  age: number;
}

const user2: User ={
  name: "Ao Yoshikane",
  age: 26,
};

console.log("user.name", user.name);




class Product {
  name: string;
  price: number;
  quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  totalPrice(): number {
    return this.price * this.quantity;
  }
}

const p = new Product("pwn", 300, 11);
console.log("合計金額=", p.totalPrice());



class carprice {
  body: number;
  price: number;

  constructor(body: number, price: number) {
    this.body = body;
    this.price = price;
  }

  carprice(): number {
    return this.body * this.price;
  }

  carkind(): string {
    if(this.body * this.price >5000){
      return "High"
    } else if (this.body * this.price > 2000) {
      return "midle"
    } else (this.body * this.price <= 2000)
      return "Low"
  };
}
  const totalprice = new carprice(1000, 1500);
  console.log("車の種類", totalprice.carprice, totalprice.carkind())






class counter {
  private value: number;
  
  constructor(value: number) {
  this.value = value;
  }

  increment(): void {
    this.value = this.value + 1;
  }

  getvalue(): number {
    return this.value;
  }
}

const c = new counter(0);
c.increment();
console.log("counter=", c.getvalue());



class Employee {
 name: string;

  constructor(name: string){
  this.name = name;
  }

  role(): string {
    return "Empluyee"
  }
}

class Manager extends Employee {
  teamSize: number;

  constructor(name: string, teamSize: number) {
    super(name);
    this.teamSize = teamSize;
  }

  role(): string {
    return "Manager";
  }
}

const m = new Manager("Sato", 5);
console.log("manager.role", m.role());
console.log("manager.name", m.name);
console.log("manager.teamSize=", m.teamSize);





class person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getfullName(): string {
    return this.firstName + this.lastName;
  }
}

const n = new person("Ao", "Yoshikane");
console.log("フルネーム:", n.getfullName())




class private_age {
  _age: number;

  constructor(value: number) {
    this._age = value;
  }

  get age() :number {
      return this._age;
  }

  set age(value: number) {
    if (value >= 120) {
      console.log("120歳以下で入力してください。");
      return;
    }
    this._age = value;
  }
}

const a = new private_age(0);
a.age = 130;
console.log(a.age)
