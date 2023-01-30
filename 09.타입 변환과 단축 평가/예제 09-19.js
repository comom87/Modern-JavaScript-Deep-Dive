// 9.4 단축 평가
// 예제 09-19
// 논리합(||) 연산자
console.log('Cat' || 'Dog'); // Cat
console.log(false || 'Dog'); // Dog
console.log('Cat' || false); // Cat

// 논리곱(&&) 연산자
console.log('Cat' && 'Dog'); // Dog
console.log(false && 'Dog'); // false
console.log('Cat' && false); // false