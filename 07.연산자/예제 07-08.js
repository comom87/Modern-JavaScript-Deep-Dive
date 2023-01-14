// 7.1 산술 연산자
// 예제 07-08
// 문자열 연결 연산자
console.log('1' + 2); // '12'
console.log(1 + '2'); // '12'

// 산술 연산자
console.log(1 + 2); // 3

// true는 1로 타입 변환된다.
console.log(1 + true); // 2

// false는 0으로 타입 변환된다.
console.log(1 + false); // 1

// null은 0으로 타입 변환된다.
console.log(1 + null); // 1

// undefined는 숫자로 타입 변한되지 않는다.
console.log(+undefined); // NaN
console.log(1 + undefined); // NaN