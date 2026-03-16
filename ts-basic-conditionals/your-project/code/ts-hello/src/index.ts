//一問目
//scoreを定数にして、number型の70を代入する
const score: number = 70;
//scoreが60以上の条件のとき
 if (score >= 60) {
  //passと出力
    console.log("pass");
    //もし60以上出なかった時、
 } else {
  //failと出力
    console.log("fail")
 }

 //二問目
 //定数ageにnumber型の27を代入する。
const age: number = 27;
//定数isweekendに初期値trueのboolean型を代入する
const isweekend: boolean = true;
//もしageが20以上の時かつ、isweekendがtrueの時
if (age >= 20 && isweekend === true) {
  //You can drinkと出力
    console.log("You can drink")
    //もし違った場合
} else {
  //You cannot drinkと出力
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