# Data 구조

## 게시물 Data Schema
    * id (게시물 번호)
    * title 
    * contents
    * section
    * pubDate
    * modDate
    * viewCount

## 로그인 Data Schema
    * id (고유, 123473928749183)
    * email (고유, 로그인 id로 사용)
    * pw
    * username
    * nickname
    * sex (선택)
    * phone (선택)
    * iplocation (사용자에게는 보이지 않는 정보)

# API 명세
    * API 명세에서 CRUD는 필수입니다. 토이 프로젝트에서도 4개의 동작은 꼭 하게 해주세요
## GET
    * / - 메인화면 + 최근 게시물 3개
    * /about - 내 소개
    * /blog - 블로그 글 리스트 전부
    * /write - 로그인시에만 활성화(생성, 수정) 
        * wirte를 하고 POST로 값을 넘겨 글 작성이 DB에 성공적으로 저장된 경우 -> /blog로 이동 (글목록으로 이동할 건지, 작성한 글을 확인하게 할 건지에 따라 달라짐)
        * 저장에 실패한 경우 -> 내가 쓰고 있던 글을 그대로 보여줘야 한다. (삭제X)
    * /blod/:id - 블로그 상세 글 (blog/10), viewcount가 += 1
    * /blog/?section=:section - 해당 섹션만 모아볼 수 있도록 ?section=it 이렇게 되면 it 글만 검색 가능

## POST
    * /write
        * 1. 만약 내가 작성한 게시물로 이동해야 한다면 : title, content, section (날짜는 서버에서 처리)
        * 2. 만약 게시글 목록으로 이동해야 한다면 : success

## PUT (수정)
    * /blog/:id - title, content, section (날짜는 서버에서 처리), 로그인한 사용자만 해당 게시글 수정

## DELETE
    * /blog/:id - 삭제 완료 -> blog(게시글 목록)로 리다이렉트