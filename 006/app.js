const fs = require('fs');

// rename, readFile, writeFile, appendFile, copyFile, mkdir;

// 1. rename
// let 변수 = '이호준'; // 사용자 이름
// let 날짜 = new Date();
// fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
//     console.log(err);
// });

//2. redaFile
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     console.log(err); //null
//     console.log(data); //hello world
// });

//3. readdir
fs.readdir('./', (err, data) => {
        console.log(err);
        console.log(data); //[ 'app.js', 'test.txt' ]
    })
    

// 4. writeFile
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err)
// });

// 5. appendFile
// fs.appendFile('./test2.txt', '\nhello world 3', (err)=>{
//     console.log(err)
// });

// 6. copyFile
fs.copyFile('./test2.txt', './test3.txt', (err)=>{
    console.log(err)
});

// 6. mkdir
fs.mkdir('./yoyo', (err)=>{
    console.log(err)
});