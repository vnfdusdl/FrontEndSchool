// function 안에 있기때문에 지역변수
function a(){
    var i = 0;
}
// for문에서 선언한 건 전역변수
for(var i = 0; i<5; i++){
    a();
    document.write(i);
}
