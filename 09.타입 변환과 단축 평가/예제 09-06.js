// 9.2 암묵적 타입 변환
// 예제 09-06
// 숫자 타입
console.log(0 + ''); // "0"
console.log(-0 + ''); // "0"
console.log(1 + ''); // "1"
console.log(-1 + ''); // "-1"
console.log(NaN + ''); // "NaN"
console.log(Infinity + ''); // "Infinity"
console.log(-Infinity + ''); // "-Infinity"

// 불리언 타입
console.log(true + ''); // "true"
console.log(false + ''); // "false"

// null 타입
console.log(null + ''); // "null"

// undefined 타입
console.log(undefined + ''); // "undefined"

// 심벌 타입
// console.log((Symbol()) + ''); // TypeError: Cannot convert a Symbol value to a string

// 객체 타입
console.log(({}) + ''); // "[object Object]"
console.log(Math + ''); // "[object Math]"
console.log([] + ''); // ""
console.log([10, 20] + ''); // "10,20" 
console.log((function(){}) + ''); // "function(){}"
console.log(Array + ''); // "function Array() { [native code] }"