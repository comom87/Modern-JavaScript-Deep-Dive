// 8.4 break 문
// 예제 08-20
// foo라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1); // 1
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}
console.log('Done!'); // Done!