//一問目
const score: number = 70;
 if (score >= 60) {
    console.log("pass");
 } else {
    console.log("fail")
 }

 //二問目
const age: number = 27;
const isweekend: boolean = true;
if (age >= 20 && isweekend === true) {
    console.log("You can drink")
} else {
    console.log("You cannot drink")
}

//三問目
const ismember: boolean = true;
const hascoupon: boolean = true;
if (ismember || hascoupon) {
    console.log("Discount");
} else {
    console.log("No discount");
}

//演習8
const month: number = 3;

switch (month) {
  case 3: case 4: case 5:
    console.log("spring");
    break;
  case 6: case 7: case 8:
    console.log("summer");
    break;
  case 9: case 10: case 11:
    console.log("autumn");
    break;
  case 12: case 1: case 2:
    console.log("winter");
    break;
  default:
    console.log("invalid");
    break;
}