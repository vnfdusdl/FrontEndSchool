// router 폴더에 blog.js 파일
const express = require('express');
const fs = require('fs');
const path = require('path');

// 경로설정
const router = express.Router();

// 여기서의 /는 /blog임 app2.js 파일에서 확인 가능 
router.get('/', (req, res, next) => {
    res.end(fs.readFileSync(path.join(__dirname, '../resource/blog.html')));
})

// 여기서 blog/1 이런식에 url을 처리하면 됩니다.
router.get('/:id', (req, res, next) => {
    res.send(req.params.id + 'page!!');
})

module.exports = router;