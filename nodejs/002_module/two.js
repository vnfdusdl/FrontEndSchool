let 이름 = '호준';
let 나이 = 10;
function 한살더먹음 () {
    나이 += 1;
}
function 값가져오기() {
    return 나이
}
// 이름을 이름으로 밖으로 빼주겠다!
module.exports.이름 = 이름;
module.exports.나이 = 나이;
module.exports.한살더먹음 = 한살더먹음;
module.exports.값가져오기 = 값가져오기;