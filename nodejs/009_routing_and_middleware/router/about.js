const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('about.js 파일에서 /about 페이지를 처리하고 있습니다.');
    res.send('<h1>hello about<h1>');
});

module.exports = router;