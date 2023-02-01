// 10.9 ES6에서 추가된 객체 리터럴의 확장 기능
// 예제 10-23
// ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
}

obj.sayHi(); // Hi! Lee