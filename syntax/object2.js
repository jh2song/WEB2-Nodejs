var f = function () {
    console.log(1+1);
    console.log(1+2);
}
console.log(f); // [Function: f]

/*
2
3
*/
f(); 

/*
2
3
*/
var a = [f]; // 배열
a[0]();

/*
2
3
*/
var o = { // 객체
    func:f
}
o.func();