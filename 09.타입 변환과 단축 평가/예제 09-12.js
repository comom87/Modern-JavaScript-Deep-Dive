// 9.2 암묵적 타입 변환
// 예제 09-12
if (!false) console.log(false + ' is falsy value'); // false is falsy value
if (!undefined) console.log(undefined + ' is falsy value'); // undefined is falsy value
if (!null) console.log(null + ' is falsy value'); // null is falsy value
if (!0) console.log(0 + ' is falsy value'); // 0 is falsy value
if (!NaN) console.log(NaN + ' is falsy value'); // NaN is falsy value
if (!'') console.log('' + ' is falsy value'); //  is falsy value