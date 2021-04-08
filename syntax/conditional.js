var args = process.argv;
console.log(args);
/*
출력
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\spec0\\Desktop\\Project\\2021\\03\\nodejs\\syntax\\conditional.js' ]
*/

console.log('A');
console.log('B');
if (args[2] === '1') { // idx 2부터 파라미터가 들어온다
    console.log('C1');
} else {
    console.log('C2');
}
console.group('D');