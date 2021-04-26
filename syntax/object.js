// Array
var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]); // k8805

/*
array loop egoing
array loop k8805
array loop hoya
*/
var i = 0;
while(i < members.length) {
    console.log('array loop', members[i]);
    i = i + 1;
}

// Object
var roles = {
    'programmer':'egoing',
    'designer':'k8805',
    'manager':'hoya'
}
console.log(roles.designer); // k8805
console.log(roles['designer']); // k8805

/*
object =>  programmer value =>  egoing
object =>  designer value =>  k8805
object =>  manager value =>  hoya
*/
for (var name in roles) {
    console.log('object => ', name, 'value => ', roles[name]);
}