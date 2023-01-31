// 9.4 단축 평가
// 예제 09-25
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

console.log(getStringLength()); // 0
console.log(getStringLength('hi')); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str='') {
    return str.length;
}

console.log(getStringLength()); // 0
console.log(getStringLength('hi')); // 2