let 회원정보 = [
    {
        아이디: 'kcy',
        성별: '여',
        가입연도: '2021-12-02',
    },
    {
        아이디: 'kcy2',
        성별: '남',
        가입연도: '2021-12-02',
    },
    {
        아이디: 'kcy3',
        성별: '여',
        가입연도: '2020-12-02',
    },
    {
        아이디: 'kcy4',
        성별: '남',
        가입연도: '2020-12-02',
    },
];

// 1번. 여자인사람
회원정보.filter((el) => el.성별 === '여');

// 2번 여자이면서 2021년도에 가입한 사람
// 아하, &&는 좌우항 모두 true여야 하니까
//호준님 코드 , split으로 잘라서, 그 중에 0번째 값을 가져 와서 비교
회원정보.filter(
    (el) => el.성별 === '여' && el.가입연도.split('-')[0] === '2021'
);

// 3번 아이디가 kcy인 사람
회원정보.filter( x => x.아이디 === 'kcy');
회원정보.find(x => x.아이디 === 'kcy'); // 요소를 반환, 요소의 값을 반환 

//글이 100개
//25개는 일상
//50개는 개발관련
//25개는 취미
let blogs = [
    {
        id: 1,
        title: 'title1',
        content: 'content1',
        section: '일상',
    },
    {
        id: 2,
        title: 'title2',
        content: 'content2',
        section: '취미',
    },
    {
        id: 3,
        title: 'title3',
        content: 'content3',
        section: '개발',
    },
    {
        id: 4,
        title: 'title4',
        content: 'content4',
        section: '개발',
    },
];

// section 값이 들어왔을 때 무엇을 보여줄 것인가...
let s = '개발'
let data = s? blogs.filter( x => x.section === s): blogs.filter( x => x.section); 
// 아 어짜피 이게 트루인 프로퍼티만 주는 게 아니라 요소 전체를 주니까 걸러낼 필요가 없겠네! 그냥 바로 출력하면 되는구나

//호준님 답
let data = s? blogs.filter( x => x.section === s) : blogs; 
//이렇게 하면 s에 특정 section을 검색하면 그 검색 결과가 뜨고 아무것도 검색하지 않으면 블로그 내용 전부 다가 보임



let a = new Set('a','b','c');

