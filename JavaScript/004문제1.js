let result = 0;
for( let x = 0; x < 101; x++) {
    //&&는 둘 다 true일 때만 true -> 15의 배수만 나오는 코드
    // ||는 하나만 true여도 true -> 3배수, 5배수 나오는 코드
    if (x % 3 === 0 || x % 5 === 0) {
        result += x
    }
}
console.log(result);