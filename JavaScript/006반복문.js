let array = [10, 20, 30, 40, 50];
let i = 0;

for(; i < array.length;){
    document.write[array[i],'<br>'];
    i++;
}

//for of 문을 이용해서 평균 구하기
//내가 푼 코드
//호준님 코드랑 똑같다
let array = [10, 20, 30, 40, 50];
let result = 0;

for (let value of array) {
    result += value;
}
console.log(result/array.length);

//while문
let i = 0;
while( i < 10) {
    console.log(i);
    i++
}

//100까지 짝수만 더하기
//내가 짠 코드
//호준님 코드도 같음
let i = 0;
result = 0;
while( i <= 100) {
    result += i;
    i += 2
}
console.log(result);

//시안님 코드
let i = 1;
let sum = 0;

while (i <= 100) {
    if (i % 2 == 0) {
        sum += i;
    }
    i++;
}
console.log(sum);

//while 문으로 구구단
//왜 i가 증가 안 하지? -> 헐 강사님 그걸 의도한 거래
let i = 2;
let j = 1;
while( i < 10) {
    while( j < 10) {
        console.log(`${i}X${j} = ${i*j}`);
        j++;
        //while문을 나오면서 j가 10이 되어버려서 여기를 못들어 온다고 함
        //그래서 초기화를 해야한다고 함
    }
    //j의 초기화
    j = 1;
    i++;
}
//for문은 괄호 안에 초기화 구문이 같이 있는 것

//5단 됐을 때 멈추도록
let i = 2;
let j = 1;
while( i < 10) {
    if( i === 5) break;
    while( j < 10) {
        console.log(`${i}X${j} = ${i*j}`);
        j++;
    }
    j = 1;
    i++;
}

//5까지만 곱하고 싶을 때
let i = 2;
let j = 1;
while( i < 10) {
    while( j < 10) {
        console.log(`${i}X${j} = ${i*j}`);
        if( j === 5) break;
        j++;
    }
    j = 1;
    i++;
}

//호준님 코드
let i = 2;
let j = 1;
while (i < 10) {
while (j < 10) {
    console.log(`${i} X ${j} = ${i*j}`);
    if (j == 5){
        break;
    }
    j++;
}
i++;
j = 1;
}