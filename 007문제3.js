//평균 구하기
let s = [5, 4, 10, 2, 5];
let sum = 0;
for (let i = 0; i < s.length; i++) {
    sum += s[i];
}
console.log(sum / s.length);

//string의 평균 구하기
//콤마의 인덱스를 알아냄
//힌트 : '5, 4, 10, 2, 5',splite(','); -> ['5', ' 4', ' 10', ' 2', ' 5']
//내가 푼 방법
let s = '5, 4, 10, 2, 5';
let arr = s.split(','); // ['5', ' 4', ' 10', ' 2', ' 5']
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
}
console.log(sum / arr.length);
//호준님 풀이
// for of 문으로 푸네
let data = '5, 4, 10, 2, 5'.split(','); // array로 나옴. ['5', ' 4', ' 10', ' 2', ' 5']
let 합계 = 0;
for (let i of data) {
    합계 += +i; //아니면 parseInt(i) //들어오는 데이터를 확신할 수 없으면 +는 주의해서 써야한다. //+보다 parseInt를 당연히 더 많이 사용함
}
console.log(합계);
console.log(합계 / data.length);

//문자열 거꾸로 출력
let s = 'Hello world';
let temp = '';
for (let i = 0; i < s.length; i++) {
    temp = s[i] + temp;
}
// temp = H + ''
// temp = e + H + ''

//문자열 뒤집기
let n = 12345678;
n += '';
for (let i = 0; i < n.length; i++) {
    reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
    if (count < 2) {
        sample += reverse[i];
        ++count;
    } else {
        sample += reverse[i];
        sample += ',';
        count = 0;
    }
}
console.log(sample);

//평균과 분산 구하기
let arr = [10, 20, 30, 10, 20, 30, 40, 10];
//평균
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let mean = sum / arr.length;
//분산
let d = 0;
for (let j = 0; j < arr.length; j++) {}

//array 자리수 합 구하기
//내가 푼 코드
let arr = [11, 22, 33, 111, 2];
let string = '';

for (let str of arr) {
    string += str;
}
let result = 0;
for (let i = 0; i < string.length; i++) {
    result += +string[i];
}
result; //17

// 다른 방법
let arr = [11, 22, 33, 111, 2];
let str = arr.join();
console.log(str); //'11,22,33,111,2'
let sum = 0;
let num = 0;
for (string in str) {
    for (let i = 0; i < string.length; i++) {
        num += +string[i];
    }
    sum += num;
}
sum; //91
// 한자리씩 어떻게 더할까.. 하 모르겠네 ㅠ

//호준님 풀이
let data = [11, 22, 33, 111, 2];
data = data + '';
value = data.replace(/,/g, '');

let 합계 = 0;
for (let i of value) {
    합계 += parseInt(i);
}

//숫자의 자리수를 더하는 방법
합계 = 0;
for (let i of 12343 + '') {
    합계 += parseInt(i);
}
console.log(합계);

//반복문만 사용하여 숫자단위 콤마 찍기
// 실무에서 1번, 2번 코드를 보게 될 것.
// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

document.writeln(comma);

// 콤마 찍기 2
navigator.language;
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3 //실무에서 볼 코드가 아님
let n = 12345678;
n += '';
reverse = '';

// 마지막 문제 콤마 찍기, 문자열 뒤집기
// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

document.writeln(comma);

// 콤마 찍기 2
navigator.language;
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
    reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
    if (count < 2) {
        sample += reverse[i];
        ++count;
    } else {
        sample += reverse[i];
        sample += ',';
        count = 0;
    }
}
console.log(sample); // 876,543,21
