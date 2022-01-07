const express = require('express');
let blogs = require('../database/dataBlog')
const router = express.Router();

// /는 8080/blog를 뜻함
// */url에 최신 게시물 3개 응답
// */blog - 블로그 글 모두 응답
// */blog?section=it - it 관련된 글 모두 응답

router.get('/', (req, res, next) => {
    console.log(req.query);
    const section = req.query.section;
    const data = section ? blogs.filter(blog => blog.section === section) : blogs; 
    // qeury로 받은 section에 blog의 section과 같으면 그것만 보이게 하고 아니라면 그냥 blogs를 보이게 함
    res.status(200).json(data);
})
// */blog/1 했을 때 1번 게시물 상세보기
// */blog/2 했을 때 2번 게시물 상세보기
router.get('/:id', (req, res, next) => {
    console.log(req.params);
    const id = req.params.id;
    const data = blogs.find(blog => blog.id === +id) //숫자로 변환하려고 +id 해준 것.  
    // qeury로 받은 section에 blog의 section과 같으면 그것만 보이게 하고 아니라면 그냥 blogs를 보이게 함
    res.status(200).json(data);
})

router.post('/', (req, res, next) => {
    console.log(req.body);
    const id = blogs.length + 1;
    const title = req.body.title;
    const content = req.body.content;
    const section = req.body.section;
    const viewCount = 0;
    const pubDate = new Date().toString();
    const modDate = new Date().toString();
    const blog = {id, title, content, section, viewCount, pubDate, modDate};
    
    // 나중에 DB로 연결할 때 밑에 있는 코드 수정해주면 된다. 
    blogs.push(blog);

    res.status(201).json(blogs); //201은 create
})

/* postman 에서 시험 해볼 때, 
post : http://localhost:8080/blog
body
{
    "title" : "title4",
    "content" : "content4",
    "section" : "section4"
} 
*/


router.put('/:id', (req, res, next) => {
    // user 인증 코드 삽입
    const id = req.params.id;

    // 나중에 DB 연결해서 수정해야 하는 코드
    const data =  blogs.find(blog => blog.id === +id);
    
    if (data) {
        data.title = req.body.title;
        data.content = req.body.content;
        data.section = req.body.section;
        data.modDate = new Date().toString();
        res.status(200).json(blogs)
    } else {
        res.status(404);
    }
});



router.delete('/:id', (req, res, next) => {
    // user 인증 코드를 삽입해야 한다. 본인 글만 삭제할 수 있도록. 
    const id = req.params.id;

    // 나중에 DB로 연결할 때 밑에 있는 코드 수정해주면 된다. 
    blogs = blogs.find(blog => blog.id !== +id);
    res.status(200).json(blogs);

})

module.exports = router;