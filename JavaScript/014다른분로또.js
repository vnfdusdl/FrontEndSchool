//현수님 코드
//근데 이거 중복 못 걸러주지 않나? 안 걸러지는데?
let lotto = [];

for (let i = 0; i < 6; i++) {
    let lottoNum = Math.floor(Math.random() * 45) + 1;

    for (let j = 0; j < lotto.length; j++) {
        if (lottoNum == lotto[j]) {
            lottoNum = Math.floor(Math.random() * 45) + 1;
        }
    }
    lotto.push(lottoNum);
}
lotto.sort(function (a, b) {
    return a - b;
});
alert('금주의 로또 번호는~~!!' + lotto);

//영진님 코드
function lotto(min = 1, max = 45) {
    return Math.floor(Math.random() * max + min);
}
let lottoNum = [];

for (let i = 0; i < 6; i++) {
    lottoNum.push(lotto());
    for (let j = 0; j < i; j++) {
        if (lottoNum[i] === lottoNum[j]) {
            lottoNum.pop();
            i--;
        }
    }
}
function Numsort(a, b) {
    return a - b;
}

lottoNum.sort(Numsort);

console.log(lottoNum);

//만학님 이 코드 괜찮은 거 같당
('use strict');

let randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

let generate_lotto = function () {
    let lotto = [];
    let index = 0;
    let number = 0;
    while (index < 6) {
        number = randomNum(1, 46);
        if (number == lotto.find((x) => x == number)) {
            continue;
        }
        lotto[index] = number;
        index++;
    }
    return lotto.sort(function (a, b) {
        return a - b;
    });
};

console.log(generate_lotto());

//윤재님 코드 Set을 이용해서, 중복제거를 아예 고려하지 않도ㅗㄺ 해줌.
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let count = new Set();
while (count.size < 6) {
    count.add(randomNum(1, 45));
}
console.log([...count].sort((a, b) => a - b));

//우진님 코드
let lottoSet = [];

for (let i = 0; i < 6; i++) {
    let lotto = [];
    let count = 5;
    while (count) {
        let number = getRandomNum(1, 45);
        // 중복이면 스킵
        if (isOverlap(lotto, number)) continue;
        lotto.push(number);
        count--;
    }
    lottoSet.push(lotto);
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isOverlap(arr, checkNum) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === checkNum) return true;
    }
    return false;
}

//수철님 나랑 뭐가 다르지..? 나는 왜 안돼~
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function LottoMake() {
    let numArray = [];
    while (numArray.length <= 5) {
        let num = randomNum(1, 46);
        numArray.includes(num) ? {} : numArray.push(num);
    }
    numArray.sort((a, b) => a - b);
    return numArray;
}

console.log(LottoMake());

//준홍님 코드
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function tryLotto(...input) {
    if (input.length !== 6) {
        console.log('숫자를 6개 입력해야 합니다.');
        return;
    } else if (input.length !== new Set(input).size) {
        console.log('숫자를 중복되지 않게 입력해야 합니다.');
        return;
    } else if (input.some((v) => !Number.isInteger(v) || v > 45 || v < 1)) {
        console.log('1부터 45까지 숫자 중 하나를 입력해야 합니다.');
        return;
    }

    const selected = [];
    let count = 0;
    while (count < 7) {
        const selectedNum = randomNum(1, 46);
        if (!selected.includes(selectedNum)) {
            count++;
            selected.push(selectedNum);
        }
    }
    console.log(
        `당첨번호: ${selected.slice(0, 6).join(' ')} | 보너스: ${selected[6]}`
    );
    const nums = input.filter((v) => selected.slice(0, 6).includes(v));
    switch (nums.length) {
        case 0:
        case 1:
        case 2:
            console.log('꽝!');
            break;
        case 3:
            console.log('★ 5등 당첨! ★');
            break;
        case 4:
            console.log('★★ 4등 당첨! ★★');
            break;
        case 5:
            if (input.includes(selected[6])) {
                console.log('★★★★ 2등 당첨!! ★★★★');
                nums.push(`보너스 ${selected[6]}`);
            } else console.log('★★★ 3등 당첨!! ★★★');
            break;
        case 6:
            console.log('★★★★★ 1등 당첨!!! ★★★★★');
    }
    if (nums.length > 0) console.log(`내가 맞춘 번호: ${nums.join(' ')}`);
}

tryLotto(1, 2, 3, 4, 5, 6);

