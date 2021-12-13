//describe는 unit의 묶음
describe('텍스트 관리자입니다.', () => {
    //beforeEach()는 jasmine 함수, unit 함수들이 호출 전에 먼저 실행되는 내용
    let textManager;
    beforeEach(() => {
        textManager = new TextManager();
    })

    //it은 unit(함수)을 뜻함
    it('텍스트 값을 전달합니다.', () => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    })

    it('텍스트 값을 수정합니다', () => {
        const newText = {data: 'Hello Zebras'};
        textManager.setValue(newText);

        //값이 변했는지 getValue로 확인
        expect(textManager.getValue()).toBe(newText.data);
    })
})

