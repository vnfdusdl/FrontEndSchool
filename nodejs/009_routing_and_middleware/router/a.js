const express = require('express');

const router = express.Router();

// /a라고 안 하는 이유: /가 가리키는 것은, www.naver.com/a/에서 마지막 /를 가리키는 것
router.get('/', (req, res, next) => {
    console.log('a.js 파일에서 /a 페이지를 처리하고 있습니다.');
    res.send('<h1>hello about<h1>');
});

module.exports = router;