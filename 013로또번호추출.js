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

//삼항연산자..
// 안 걸러지네... -> 다시 수정해보자
function randomNum() {
    return Math.floor(Math.random() * 45 + 1);
}
function lotto() {
    let result = [];
    while (result.length < 6) {
        let getNumber = randomNum()
        result.includes(getNumber)? result = result : result.push(randomNum());
    }
    return result;
}
lotto();

//얘도 아니야
function randomNum() {
    return Math.floor(Math.random() * 45 + 1);
}
function lotto() {
    let result = [];
    while (result.length < 6) {
        let getNumber = randomNum();
        if (result.includes(randomNum())) {
            result = result;
        } else {
            result.push(randomNum());
        }
    }
    return result;
}
lotto();

//얘는 왜 안돌아가지
function lotto() {
    let result = [];
    while (result.length < 6) {
        function randomNum() {
            return Math.floor(Math.random() * 45 + 1);
        }
        result.forEach(x => {
            if (x !== randomNum()) {
                result.push(randomNum());
            }
        });
    }
    return result;
}
lotto();

//