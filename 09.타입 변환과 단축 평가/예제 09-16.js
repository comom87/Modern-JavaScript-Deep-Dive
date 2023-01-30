// 9.3 명시적 타입 변환
// 예제 09-16
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x')); // true
console.log(Boolean('')); // false
console.log(Boolean('false')); // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // true
// null 타입 => 불리언 타입
console.log(Boolean(null)); // false
// undefined 타입 => 불리언 타입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x'); // true
console.log(!!''); // false
console.log(!!'false'); // true
// 숫자 타입 => 불리언 타입
console.log(!!0); // false
console.log(!!1); // true
console.log(!!NaN); // false
console.log(!!Infinity); // true
// null 타입 => 불리언 타입
console.log(!!null); // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{}); // true
console.log(!![]); // true