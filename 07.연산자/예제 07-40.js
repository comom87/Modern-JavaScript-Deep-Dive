// 7.11 연산자의 부수 효과
// 예제 07-40
var x;

x = 1;
console.log(x); // 1

x++;
console.log(x); // 2

var o = { a: 1 };

delete o.a;
console.log(o); // {}