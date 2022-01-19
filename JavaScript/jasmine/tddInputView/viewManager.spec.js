describe('클릭 이벤트 처리 및 뷰를 담당하는 함수입니다.',() => {
    //dependency injection (의존 주입) : 혼자 존재할 수 없고, 다른 객체를 자신에게 주입시켜야만 존재할 수 있는 객체
    let textManager, viewerEl, btnEl, inpTxt, viewManager;
    beforeEach( () => {
        textManager = new TextManager();
        viewerEl = document.createElement('strong');
        btnEl = document.createElement('button');
        inpTxt = document.createElement('input');

        viewManager = new ViewManager(textManager, {viewerEl, btnEl, inpTxt});
    })

    it('viewManager에 인자가 잘 전달됐는지 확인합니다.', () => {
        const textManager = null;
        //버튼 요소
        const btnEl = null;
        //우리가 넣은 텍스트가 보이는 곳, 요소
        const viewerEl = null;
        //인풋
        const inpTxt = null;
        
        //인자가 전달되는지 확인하는 함수
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        //actual에는 값이 아닌 실행할 수 있는 함수가 전달되어야 한다. 
        //toThrowError()는 jasmine 함수, 무조건 에러를 발생시킴
        expect(actual).toThrowError();
    })

    //클릭 이벤트가 발생했을 때
    it('클릭 이벤트가 발생했을 경우 changeVlaue 함수를 실행합니다.', () => {
        //spyOn은 특정한 모듈의 함수를 감시한다. 
        //viewManger의 changeValue 함수를 감시한다. 두번째 요소는 문자열로 전달해야함. 
        spyOn(viewManager, 'changeValue');
        btnEl.click();
        //toHaveBeenCalled()는 함수가 호출된 적이 있는지 판별하는 함수, 앞에 반드시 spyOn 함수가 실행되어야 함. 
        expect(viewManager.changeValue).toHaveBeenCalled();
    })

    //changeValue 함수가 실행됐을 때 이어서 실행될 함수
    it('updateView 함수를 실행합니다', () => {
        spyOn(viewManager, 'updateView');
        viewManager.changeValue()
        expect(viewManager.updateView).toHaveBeenCalled();
    })
})