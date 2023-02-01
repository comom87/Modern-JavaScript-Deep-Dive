// 10.9 ES6에서 추가된 객체 리터럴의 확장 기능
// 예제 10-24
// ES6
var obj = {
    name: 'Lee',
    sayHi() {
        console.log('Hi! ' + this.name);
    }
}

obj.sayHi(); // Hi! Lee