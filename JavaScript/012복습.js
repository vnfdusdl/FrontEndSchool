//팩토리얼
function factorial(n) {
    if( n <= 1) return n;
    return n * factorial(n-1);
}
factorial(5); // 120

// 풀이
// factorial(5) == 5 * factorial(4) =120
//factorial(4) == 4 * factorial(3) =24
//factorial(3) == 3* factorial(2) = 6
//factorial(2) == 2 * factorial(1) = 2
//factorial(1) == 1

//문자열 뒤집기
function reverse(text) {
    text += ''; //string 이외의 값이 입력될 수 있으므로 string으로 변환
    if (text.length <= 1) return text;
    return reverse(text.slice(1)) + text[0]
}

reverse('hello'); //olled

//풀이
//reverse('hello') -> reverse('ello') + 'h' == 'o' + 'l' +'l' + 'e' +'h'
//reverse('ello') -> reverse('llo') + 'e' == 'o' + 'l' +'l' + 'e'
//reverse('llo') -> reverse('lo') + 'l' == 'o' + 'l' +'l'
//reverse('lo') -> reverse('o') + 'l' == 'o' + 'l'
//reverse('o') -> 'o'

//피보나치 수열
// 1 1 2 3 5 8 13 21 ...
//Fn+2 =Fn+1 + Fn 

function fib(n) {
    if (n <= 2) return n;
    return fib(n-1) + fib(n-2)
}

fib(4); //5

//풀이
// fib(4) == fib(3)+fib(2)
// fib(3) == fib(2)+fib(1)
// fib(2) == 2
// fib(1) == 1
// fib(2) == 2
// fib(4) == 3+2

//함수에서는 return되고 나면 함수가 종료되면서 return값도 휘발되기 때문에
//특정변수에 담아주지 않으면 다시 쓸 수 없음
//그래서 필요할 때마다 다시 계산해 주어야 한다. 

//fibo()함수로 계산되어지는 값을 fibo_cache()에 담고
//나중에 똑같은 계산을 반복하지 않고 불러오려고 하는 것.

let fibo_cache = [];
function fibo(n) {
    if (n in fibo_cache) {
        return fibo_cache[n]
    }
    fibo_cache[n] = n < 2 ? n : fibo(n-1) + fibo(n-2)
    return fibo_cache[n]
}

//fibo_cache = []
//fibo(4) == fibo_cache[4] = fibo(3)+fibo(2)
//fibo(3) == fibo_cahce[3] = fibo(2)+fibo(1)
//fibo(2) == fibo_cache[2] = fibo(1)+fibo(0)
//fibo(1) == fibo_cache[1] =1
//fibo(0) == fibo_cache[0] = 0
//-> fibo_cache = [0,1,1,2,3] , fibo(4) = 3

//배열 
var foods = ['만두', '떡볶이', '피자', '푸팟퐁커리', '스테이크'];
0 in foods; //true
8 in foods; //true
'피자' in foods; //false , index값을 입력해야한다.
'length' in foods; //true, length는 array의 속성이다
'slice' in foods; // true, slice는 array의 속성이다
'push' in foods; // true, push는 array의 속성이다

//객체 
var me = {
    name: 'Kim',
    age: 20,
    address: 'Busan',
};
0 in me; //false, 객체는 index값이 아닌 property의 key를 입력해야한다.
'name' in me; //true
'address' in me; //true
'Busan' in me; //false, value값이 아닌 key값을 입력해야한다. 

//익명 즉시 함수
(function () {
    var a = 1;
    var b = 2;
    return a + b;
}());

//기명 즉시 함수
(function foo() {
    var a = 1;
    var b = 2;
    return a + b;
}());

foo(); 
// ReferenceError: foo is not defined
// 어차피 실행하지 못해서 기명의 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리

//map() 메서드
let array = [1, 4, 9, 16];
let 값1 = array.map( x => x * 2);
값; //[2, 8, 18, 32]
array; //[1, 4, 9, 16]

function 제곱(x) {
    return x ** 2;
}

//제곱은 콜백함수
let 값2 = array.map(제곱);
값2; // [1, 16, 81, 256]
array; // [1, 4, 9, 16]

//sqrt는 square root
let 값3 = array.map(Math.sqrt); 
값3; //[1,2,3,4]

//루트를 씌워준 후 세제곱
let 값4 = array.map(Math.sqrt).map(x => x ** 3); 
값4; //[1, 8, 27, 64]

let data = [
    {
        반: 1,
        번: 1,
        이름: 'k',
        중간고사점수: 55,
    },
    {
        반: 1,
        번: 2,
        이름: 'l',
        중간고사점수: 60,
    },
    {
        반: 1,
        번: 3,
        이름: 'z',
        중간고사점수: 20,
    },
    {
        반: 1,
        번: 4,
        이름: 'w',
        중간고사점수: 100,
    }
    
];

let data1 = data.map(x => x.중간고사점수);
data1; //[55, 60, 20, 100]

let data2 = data.map(x => [x.이름, x.중간고사점수]);
data2; // ['k', 55] ['l', 60] ['z', 20] ['w', 100]

let sum = 0;
let data3 = data.map(x => x.중간고사점수).forEach(y => sum += y);
sum; //235
data3; // undefined -> forEach는 리턴값이 없기 때문에.data3에 저장되는 값이 없다. 

//forEach와 map()
function 제곱(x) {
    return x ** 2;
}

[1,2,3,4].forEach(제곱); //undefined

let arr = [1,2,3,4];
let arr2 = arr.forEach(제곱);
arr2; //undefined

let arr3 = arr.map(제곱);
arr3; //[1, 4, 9, 16]

result = [];
array.forEach(x => result.push(x ** 2)); //[1, 16, 81, 256]

array.map(x => result.push(x ** 2)); //[1, 16, 81, 256]


let arr = [1,2,3,4];
let a = arr.forEach(function(x){
	return x;
});
console.log(a);//undefined

let arr = [1,2,3,4];
let a = arr.map(function(x){
	return x;
});
console.log(a); //[1, 2, 3, 4]

//map()
//다차원 배열에서 요소의 값을 *2 해주기
let data = [[1,2,3],[4,5,6],[7,8,9]];

let newData = data.map(array => array.map(number => number*2));
//[[2, 4, 6],[8, 10, 12],[14, 16, 18]]

// Array.filter
let 회원정보 = [
    {
        아이디: 'kcy',
        성별: '여',
        가입연도: '2021-12-02',
    },
    {
        아이디: 'kcy2',
        성별: '남',
        가입연도: '2021-12-02',
    },
    {
        아이디: 'kcy3',
        성별: '여',
        가입연도: '2020-12-02',
    },
    {
        아이디: 'kcy4',
        성별: '남',
        가입연도: '2020-12-02',
    },
];

// 여자인사람
회원정보.filter( x => x.성별 === '여');

//여자이면서 2021년도에 가입한 사람
회원정보.filter(x => x.성별 === '여' && x.가입연도.split('-')[0] === '2021');

// 아이디가 kcy인 사람
회원정보.find(x => x.아이디 === 'kcy');
