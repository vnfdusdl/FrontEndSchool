// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require('path');

console.log(`구분자 : ${path.sep}`); //구분자는 OS마다 다를 수 있다.  ./ 이런 게 아닐 수도 있음. 그래서 폴더나 파일 경로를 사용할 때 path.sep을 사용해야 한다.*
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
console.table(path.parse(__filename));
console.log(path.join(__dirname, 'source')) // 디렉토리 경로에 파일명을 붙이려고 할 때는 join 사용
// console.log(path.join(__dirname+'/node')) //  이렇게 사용하면 안되고 join을 사용해야 합니다

