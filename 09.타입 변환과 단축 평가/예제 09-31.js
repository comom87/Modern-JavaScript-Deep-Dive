// 9.4 단축 평가
// 예제 09-31
// Falsy 값인 0이나 ''도 기본갑스로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = '' || 'default string';
console.log(foo); // "default string"