// 6.7 심벌 타입
// 예제 06-20
var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};

obj[key] = 'value';
console.log(obj); // { [Symbol(key)]: 'value' }
console.log(obj[key]); // value