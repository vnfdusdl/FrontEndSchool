//랜덤한 숫자 출력하기
Math.random(); // 0이상 1미만의 숫자를 랜덤하게 뽑음 

// 1~45번, 중복 안됨, 6개의 숫자
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//숫자 뽑기는 되는 거
function lotto() {
    let i = 0;
    let result = [];
    while (i < 6) {
        function randomNum() {
            return Math.floor(Math.random() * 45 + 1);
        }
        result.push(randomNum());
        i++;
    }
    return result;
}

lotto(); //[43, 12, 34, 19, 17, 1]

//중복 숫자를 거르고 싶은데..
function lotto() {
    let i = 0;
    let result = [];
    for (let i = 0; i < result.length; i++) {
        function randomNum() {
            return Math.floor(Math.random() * 45 + 1);
        }
        result.push(randomNum());
    }
    return result;
}
lotto();

// 삼항연산자..
// 안 걸러지네... -> 다시 수정해보자
function randomNum() {
    return Math.floor(Math.random() * 45 + 1);
}
function lotto() {
    let result = [];
    while (result.length < 6) {
        let getNumber = randomNum();
        result.includes(getNumber)
            ? (result = result)
            : result.push(randomNum());
    }
    return result;
}
lotto();

//while이랑 includes로
//됐다!!!!!!
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function lotto() {
    let result = [];
    while (result.length < 6) {
        let getNumber = randomNum(46, 1);
        if (!result.includes(getNumber)) {
            result.push(getNumber);
        }
    }
    return result;
}
lotto();

//얘는 왜 안돌아가지 ????
function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function lotto() {
    let result = [];
    while (result.length < 6) {
        let getNumber = randomNum(46, 1);
        result.forEach((x) => {
            if (x !== getNumber) {
                result.push(getNumber);
            }
        });
    }  
    return result;
}
lotto();


//forEach는 이렇게 써줘야 하는 건가??
function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function lotto() {
    let result = [];
    while( result.length < 6) {
        let getNumber = randomNum(46,1);
        let sameNumber = false;
        result.forEach(x => {
            if(x === getNumber){
                sameNumber = true;
            }
        })
        if (!sameNumber) {
            result.push(getNumber);
        }
    }
    return result
}
lotto();


//Set으로 해보자!!
function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function lotto() {
    let lottoSet = new Set();
    while (lottoSet.size < 6) {
        let getNumber = randomNum(46, 1);
        lottoSet.add(getNumber);
    }
    return lottoSet
}
lotto();