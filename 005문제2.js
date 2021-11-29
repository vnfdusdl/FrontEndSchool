//1번문제 
false || true //true 

//2번문제
true && false // false 

//3번문제
!true // flase

//4번문제
!((true && false) || (true && false)) // true

//5번문제
let x = 10
!((x % 5 == 0 && x % 2 == 0) || (x / 2 == 5 && false)) // false

//6번 문제
let y = 10
(false && y % 2 == 0) && (y / 2 == 5 && false) // false

//7번문제
let z = 3
(true && z % 3 == 0) || (z / 2 !=!= 5 && false) // !=!=는 잘못된 문법입니다.과연 뒤에것을 볼 필요가 없을 때, Code는 뒤에 것을 확인하는가? -> ㄴㄴ 단축평가함! 그러나 에러는 잡음
// error

// 드모르간 법칙
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)

//조건부 연산자(삼항연산자)
let age = 10;
let accessAllowed = (age > 18) ? true : false;  //false

// 조건부 연산자(삼항연산자) 대체 용법
true && '완료' || '미완료';

//구구단
for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
}
// 이거는 숫자가 연산되지 않고 변수의 값 그 자체로 출력됨
for( let i = 2;  i <10; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(`${i} X ${j} = ${i}*${j}`);
    }
}

// 내가 해 본 코드
//배열에 담아보기
let arr = [];
for(let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++){
    arr.push(i*j);
    }
}
console.log(arr);


//객체에 담아보기
// 객체에 담기 -> 객체가 81개가 만들어짐...
for(let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++){
    let obj = {
        [`${i} X ${j}`]: i*j
    };
    console.log(obj);
}
}

//이렇게 하면 하나의 객체 안에 81개의 프로퍼티가 담김

let obj = {};
for(let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++){
    obj[`${i} X ${j}`]= i*j;
}
}
console.log(obj);

//내가 푼 거
let result = 0;
for(let i = 1; i <= 10000; i++) {
    let text = (i + '');
    for(let j = 0; j < text.length; j++) {
        if(text[j] === '8') {
            result += 1;
        }
    }

}
console.log(result);

let result = 0;
for(let i = 1; i <= 10000; i++) {
    let text = toString(i);
    for(let j = 0; j < text.length; j++) {
        if(text[j] === '8') {
            result += 1;
        }
    }
}
console.log(result);
//호준님이 푸신 거..
let text = '';
let count = 0;
for (let i = 0; i < 10001; i++) {
    text += i;
}
typeof text; //이게 왜 string이지? 훔... 아! 처음부터 ''라고 string이라고 선언했구나

for ( let i = 0; i < text.length; i++) {
    if (text[i] === '8') {
        count += 1;
    }
}

//최댓값 구하기
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0]

for(let i = 0; i < sample.length; i++) {
    if (temp < sample[i]){
        temp = sample[i];
    }
}
console.log(temp);

//최솟값 구하기
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];
for(let i = 0; i < sample.length; i++) {
    if (temp > sample[i]){
        temp = sample[i];
    }
}
console.log(temp);

// 삼항 조건 연사자로 최댓값, 최솟값 구하기
let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0]
for(let i = 0; i < sample.length; i++){
    temp > sample[i] ? temp = temp : temp = sample[i] 
}
console.log(temp);

//두 글자씩 끊기
let text = 'javascript';
for(let i = 0; i < text.length - 1; i++) {
    console.log(text[i], text[i+1]);
}
//위 아래 같은 거
let text = 'javascript';
for(let i = 1; i < text.length; i++) {
    console.log(text[i-1], text[i]);
}

let arr =[1, 3, 4, 8, 13, 17, 20];
let temp = arr[1] - arr[0]
let result = 0;

for(let i = 0; i < arr.length; i++) {
    if( (arr[i+1] - arr[i]) < temp) {
        temp = (arr[i+1] - arr[i]);
        result = i;
    }
}
console.log(arr[result], arr[result+1]);


//10점 만점에서 5점짜리 코드랭
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0]
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = (value[i+1] - value[i])
        result = i;
    }
}

console.log(value[result], value[result+1]);

//첫 번째 순회
//temp = 4 -1 = 3, i=0
for (let i = 0; i < 8; i++) {
    if ( 3> (value[1] - value[0])){ //false -> if문 들어가지 못하고 끝남
        temp = (value[i+1] - value[i])
        result = i;
    }
}

//두 번째 순회
//temp = 3, i = 1
for (let i = 0; i < 8; i++) {
    if ( 3 > (value[2] - value[1])){ // 6-4=2, true
        temp = (value[2] - value[1]) // temp = 2
        result = i; // i = 1
    }
}

//세 번째 순회
//temp = 2, i = 2
for (let i = 0; i < 8; i++) {
    if ( 2 > (value[3] - value[2])){ // 8-6=2, false -> if 문 들어가지 못함
        temp = (value[i+1] - value[i]) 
        result = i; 
    }
}

