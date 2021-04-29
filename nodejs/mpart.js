// mpart.js

var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

// M 객체를 바깥에서 이용하게 하겠다.
module.exports = M;