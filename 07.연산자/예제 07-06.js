// 7.1 산술 연산자
// 예제 07-06
var x = '1';

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // "1"

// 불리언 값을 숫자로 타입 변환한다.
x = true
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // true

x = false
console.log(+x); // 0
console.log(x); // false

// 문자열은 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = 'Hello';
console.log(+x); // NaN
// 부수 효과는 없다.
console.log(x); // "Hello"