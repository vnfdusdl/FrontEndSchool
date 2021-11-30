//평균 구하기
let s = [5, 4, 10, 2, 5];
let sum = 0;
for(let i = 0; i < s.length; i++) {
    sum += s[i];
}
console.log(sum/s.length);

//string의 평균 구하기
//콤마의 인덱스를 알아냄
//힌트 : '5, 4, 10, 2, 5',splite(','); -> ['5', ' 4', ' 10', ' 2', ' 5']
let s = '5, 4, 10, 2, 5';
let arr = s.split(','); // ['5', ' 4', ' 10', ' 2', ' 5']
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += parseInt(arr[i]);
}
console.log(sum/arr.length);
// for of 문으로 푸네



//문자열 거꾸로 출력
let s = 'Hello world';
let temp = '';
for (let i = 0; i <s.length; i++){
    temp = s[i] + temp;
};
// temp = H + ''
// temp = e + H + ''

//평균과 분산 구하기
let arr = [10, 20, 30, 10, 20, 30, 40, 10];
//평균
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let mean = sum/arr.length;
//분산
let d = 0;
for(let j = 0; j < arr.length; j++) {
    
}

//array 자리수 합 구하기
let arr = [11, 22, 33, 111, 2];





//반복문만 사용하여 숫자단위 콤마 찍기