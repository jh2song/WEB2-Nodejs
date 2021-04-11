var fs = require('fs');

/*
// readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8'); // 동기, 리턴한다
console.log(result);
console.log('C');

출력:
A
B
C
*/

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result) {
    console.log(result);
}); // 비동기, readFile은 리턴하지 않는다.
console.log('C');

// 출력
// A
// C
// B