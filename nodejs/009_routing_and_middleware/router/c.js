const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('c.js 파일에서 /c 페이지를 처리하고 있습니다.');
    res.send('<h1>hello blog<h1>');
});

module.exports = router;