const express = require('express');
let blogs = require('../database/dataBlog');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.query);
    const section = req.query.section;
    const data = section ? blogs.filter(b => b.section === section) : blogs;
    res.render('post.html', {data});
})

router.get('/write', (req, res, next) => {
    res.render('write.html');
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const blog = blogs.find(b => b.id == id);
    res.render('postdetails.html', {blog});
})

router.post('/', (req, res, next) => {
    const id = blogs.length + 1;
    const title = req.body.title;
    const content = req.body.content;
    const section = req.body.section;
    const pubDate = new Date().toString();
    const modDate = new Date().toString();
    let blog = {id, title, content, section, pubDate, modDate};
    blogs.push(blog);
    // res.status(201).json(blog); // 201은 create
    res.redirect("/blog"); // 게시글 작성했을 때 게시글 목록으로 이동하기 
    // res.redirect(`/blog/${id}`) // 게시글 작성했을 때 작성한 게시글로 이동하기
})

router.put('/:id', (req, res, next) => {
    //이 과정 전에 쿠키를 통해서 사용자 검증을 해야한다. 
    const id = req.params.id; //블로그 글의 id
    const blog = blogs.find(b => b.id == id) //db연결 시 문법을 수정해줘야 한다. 
    if (blog){ // 각각의 값이 비어있을 수도 있음
        blog.title = req.body.title;
        blog.content = req.body.content;
        blog.section = req.body.section;
        blog.modDate = new Date().toString();
        res.status(200).json(blogs);
    } else {
        res.status(404);
    }
})

// 삭제(DELETE) : blog/:id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    blogs = blogs.filter(b => b.id != id) 
    res.status(200).json(blogs); //굳이 204를 보내줄거면 200로
})


module.exports = router;
// module.exports.blogs = blogs; // 좋은 방법은 아닙니다. DB 할 때 다시 리펙토링 해야합니다.