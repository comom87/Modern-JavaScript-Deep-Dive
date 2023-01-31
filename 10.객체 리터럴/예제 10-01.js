// 10.2 객체 리터럴에 의한 객체 생성
// 예제 10-01
var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person); // object
console.log(person); // { name; 'Lee', sayHello: [Function: sayHello] }