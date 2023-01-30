// 9.2 암묵적 타입 변환
// 예제 09-13
// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
}

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
    return !!v;
}

// 모두 true를 반환한다.
console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));

// 모두 true를 반환한다.
console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy({}));
console.log(isTruthy([]));