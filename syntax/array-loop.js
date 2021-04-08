var number = [1, 400, 12, 34];
//하나씩 출력
//var i = 0;
//while(i < number.length) {
//  console.log(number[i]);
//  i = i + 1;
//}

// 합 구하기
var i = 0;
var total = 0;
while(i < number.length) {
    total = total + number[i];
    i = i + 1;
}
console.log(`total : ${total}`); // total : 447