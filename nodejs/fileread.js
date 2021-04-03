var fs = require('fs');
/*
fs.readFile('sample.txt', function(err, data) {
    console.log(data);
});

출력
<Buffer 6c 6f 72 65 6d 20 6c 6f 72 65 6d 20 6c 6f 72 65 6d 20 6c 6f 72 65 6d 20 6c 6f 72 65 6d 
20 6c 6f 72 65 6d 20 6c 6f 72 65 6d 20 6c 6f 72 65 6d 6c 6f 72 ... >
*/

fs.readFile('sample.txt', 'utf8', function(err, data) {
    console.log(data);
});