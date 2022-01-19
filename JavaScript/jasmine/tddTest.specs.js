//jasmine 함수, test unit 들의 모음, sectioning 요소, unit들의 합
describe('자스민 테스트 입니다.', () => {
    //test unit이다.
    it('덧셈을 하는 함수입니다.', () => {
        let num = 10;
        //expect() : jasmine 함수, 실행할 함수의 결과값을 인수로 전달한다. 기대식
        //toBe() : jasmine 함수, 내가 기대한 결과가 일치하는지 판단하는 함수이다.
        //pulsOne() 함수가 있다고 예상하고, 테스트 코드를 만드는 것.
        expect(plusOne(num)).toBe(num + 1);
    });
});
