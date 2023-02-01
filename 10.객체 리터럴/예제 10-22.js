// 10.9 ES6에서 추가된 객체 리터럴의 확장 기능
// 예제 10-22
// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};

console.log(obj); // {'prop-1': 1, 'prop-2': 2, 'prop-3':3}