
//예전부터 쓰던 문법 그래서 현업에 코드는 이걸로 되어있을 것...
// const 개인프로필 = require('./two');


//최신 문법
// import {이름, 나이, 한살더먹음, 값가져와} from './two.js';
// console.log(이름);
// console.log(나이);
// 한살더먹음();
// 한살더먹음();
// console.log(나이); //이번에는 출력이 되었죠?
// console.log(값가져와());

//최신 문법
import * as 개인프로필 from './two.js';

console.log(개인프로필.이름);
console.log(개인프로필.나이);
개인프로필.한살더먹음();
개인프로필.한살더먹음();
console.log(개인프로필.나이); //이번에는 제대로 12가 출력이 되었죠?
console.log(개인프로필.값가져와());