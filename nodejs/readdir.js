var testFolder = './data'
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
});
// 출력: [ 'CSS', 'HTML', 'JavaScript', 'main.js' ]