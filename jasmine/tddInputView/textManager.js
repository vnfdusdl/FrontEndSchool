const TextManager = (() => {
    //은닉될 값
    //원시 값은 instance를 새로 생성할 때마다, 값이 복사되어서 들어가기 때문에, 
    //값이 계속해서 새로 할당된다. 인스턴스 간에 값 공유가 불가능하다.
    //그래서 객체 자료형으로 만든다  
    // let value = "Hello Lions"
    let value = {data: 'Hello Lions'};

    function innerTextManager() {}
    
    innerTextManager.prototype.getValue = function() {
        return value.data;
    }
    innerTextManager.prototype.setValue = function(newValue) {
        value = newValue;
    }

    return innerTextManager;
})();

// const myInstance = new TextManager();

