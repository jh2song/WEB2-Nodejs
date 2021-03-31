var name = 'k8805';
// var letter = 'Dear ' + name + ' \n\nfsdkajahsflsjlhsajd ' + name + ' sjasjdhla s hdjahfsadhjfds' + name + ' sjdhjlasdhfa dh dsajh ' + name + ' dsjslad lasd lsdafhj';

var letter = `Dear ${name} 

fsdkajahsflsjlhsajd ${name} sjasjdhla s ${1+1} hdjahfsadhjfds ${name} sjdhjlasdhfa dh dsajh ${name} dsjslad lasd lsdafhj`;

console.log(letter);
/*
출력: 
Dear k8805 

fsdkajahsflsjlhsajd k8805 sjasjdhla s hdjahfsadhjfds k8805 sjdhjlasdhfa dh dsajh k8805 dsjslad lasd lsdafhj
*/