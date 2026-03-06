const n: number = 17
if(n % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}


const score: number = 100;
if(score >= 60) {
  console.log("pass");
} else {
  console.log("fail");
}


const score2: number = 100;
if(score2 >= 90) {
  console.log("A");
} else if(score2 >= 80) {
  console.log("B");
} else if(score2 >= 70) {
  console.log("C");
} else {
  console.log("D");
}


const hour: number = 1;
if(hour >= 9 && hour <= 18) {
  console.log("open");
} else {
  console.log("closed");
}


const isMember: boolean = true;
const hasCoupon: boolean = true;
if(isMember || hasCoupon) {
  console.log("discount");
} else {
  console.log("no discount");
}

const isLoggedIn: boolean = false;
if(!isLoggedIn) {
  console.log("please login");
} else {
  console.log("OK!");
}



const month: number = 6;
switch(month) {
  case 1:
    console.log("winter");
  break;

  case 2:
    console.log("winter");
  break;

  case 3:
    console.log("spring");
  break;

  case 4:
    console.log("spring");
  break;

  case 5:
    console.log("spring");
  break;

  case 6:
    console.log("summer");
  break;

  case 7:
    console.log("summer");
  break;

  case 8:
    console.log("summer");
  break;

  case 9:
    console.log("autumn");
  break;

  case 10:
    console.log("autumn");
  break;

  case 11:
    console.log("autumn");
  break;
  default:
    case 12:
      console.log("winter")
    break;
}


const left: number = 10;
const right: number = 20;
const op: string = "+"
switch(op) {
  case "+":
    console.log(left + right);
  break;

  case "-":
    console.log(left - right);
  break;

  case "*":
    console.log(left * right);
  break;

  case "/":
    console.log(left / right);
  break;
}


const age: number = 20;
if(age >= 20) {
  console.log("OK");
}


const a: boolean = true;
const b: boolean = true;
const c: boolean = true;
console.log((a && b) || c);
console.log(a && (b || c));


for (let i = 1; i <= 20; i++) {
  console.log(i)
}


let sum: number = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum)


let ii: string = "";
for (let i = 1; i <= 50; i++) {
  if(i % 5 !== 0) {
    continue;
  }
  ii = ii + i + ",";
}

console.log(ii);


//　問題終了クラス
let endpoint: number = 10;
for (let i = 1; i <= endpoint; i++) {
  if(endpoint !== i) {
    continue;
  }
}
console.log("問題は終了です。")



process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
const lines:string[] = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line:string) => {
  lines.push(line);
});
reader.on('close', () => {
  console.log(lines[0]);
});