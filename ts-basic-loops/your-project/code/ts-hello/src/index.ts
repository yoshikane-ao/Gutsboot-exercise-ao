for (let i =1; i <= 5 ; i++) {
  console.log(i);
}

// let sum: number = 0;
//  for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
//  }
//  console.log("sum(1..10)=", sum);

 //演習1
 for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//演習2
let sum: number = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("合計値", sum);

//演習3
let result: string = "";

for (let i = 1; i <= 50; i++) {
  if (i % 5 !== 0) {
    continue;
  }
  result = result + i + ",";
}
console.log("evens:", result);

//演習5
let i: number = 1;

while (i <= 10) {
  console.log(i);
  i = i + 1;
}

//演習6
let attempt: number = 0;
do {
  console.log("attempt", attempt);
  attempt = attempt + 1;
} while (attempt < 3);

// attempts（試行回数）を0で初期化
// do-while を使い、試行回数を表示しながら増やす
// attempts が 3 未満の間だけ続ける
// attempt: 0
// attempt: 1
// attempt: 2