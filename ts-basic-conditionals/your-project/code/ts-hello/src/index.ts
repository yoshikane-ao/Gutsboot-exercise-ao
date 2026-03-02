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