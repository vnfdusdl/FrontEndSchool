const express = require('express');

const app = express();

app.get('/',(req, res, next) => {
    console.log('get으로 페이지에 요청이 들어왔습니다!');
    res.send('hello world');
    //응답 값으로 보내는 것. 
});

app.listen(8080);
