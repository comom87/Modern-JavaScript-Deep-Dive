// 10.9 ES6에서 추가된 객체 리터럴의 확장 기능
// 예제 10-21
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {'prop-1': 1, 'prop-2': 2, 'prop-3':3}