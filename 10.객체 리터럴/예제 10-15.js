// 10.5 프로퍼티 접근
// 예제 10-15
var person = {
    'last-name': 'Lee',
    1: 10
};

// console.log(person.'last-name'); // SyntaxError: Unexpected sring
// console.log(person.last-name);
// 브라우저 환경: NaN
// Node.js 환경: ReferenceError: name is not defined
// console.log(person[last-name]); // ReferenceError: name is not defined
console.log(person['last-name']); // Lee

// 프로퍼티 키가 숫자로 이루어진 문자열일 경우 따옴표를 생략할 수 있다.
// console.log(person.1); // SyntaxError: Unexpected number
// console.log(person.'1'); // SyntaxError: Undexpected string
console.log(person[1]); // 10
console.log(person['1']); // 10