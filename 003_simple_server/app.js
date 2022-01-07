// 웹 서버 통신을 하기 위한 것들을 모아둔 것.. 노드 내부 모듈
const http = require('http');
const fs = require('fs');
// http 라는 곳에 정의되어 있는 걸 사용하는 거임
const app = http.createServer(function(requset, response){
    
    let url = requset.url;
    console.log(`requset : ${requset}`);
    console.log(`requset.url : ${requset.url}`);
    // url에서 맨 뒤에 /를 뜻함
    if(requset.url === '/') {
        url = '/index.html';
    } else if (requset.url === '/blog') {
        url = '/blog.html';
    } else if (requset.url === '/favicon.ico') {
        return response.writeHead(404);
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
    // 여기를 수정하여 index.html을 주면 됨.....
    response.writeHead(200);
    // response.end('hello world');
    // dirname은 현재 디렉토리까지의 경로, url은 위에 지정한 url, 즉 index.html
    // 즉, 현재 디렉토리의 index.html을 전달해주겠다는 뜻! 
    response.end(fs.readFileSync(__dirname + url));
});

app.listen(3000);
