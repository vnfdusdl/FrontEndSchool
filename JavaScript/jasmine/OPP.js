//객체지향

// 1. 모듈 패턴 
//값을 '은닉'하기 위해서 사용. 클로저 공간. -> 전역 변수를 사용하지 않을 수 있음. 
//객체를 반환하기 때문에, 첫글자를 대문자로 만들어줌. 생성자 함수는 아니고 일반 함수.
function Person() {
    let age = 35;

    return {
        getAge: function(){
            return age
        },
        setAge: function(data){
            age = data;
        }
    }
}

//return 된 책체가 person 에 담김
const person = Person();
console.log(person.getAge());  //35


//2. 사용자 정의 타입 패턴
// 인스턴스 만들기 
// 생성자 함수에서는 값이 숨겨지지 않는다. 접근 가능. 인스턴스를 통해 접근 가능하니까!
function PersonType(){
    this.age = 35;
}

PersonType.prototype.getAge = function(){
    return this.age;
}

const instancePerson = new PersonType();
console.log(instancePerson.getAge());
// 생성자 함수의 age 에서는 값이 숨겨지지 않는다. 접근 가능
console.log(instancePerson.age);

//생성자함수의 프로퍼티에는 객체 리터럴처럼 접근할 수 있다. 
//객체 리터럴과 다르게 생성자함수는 재사용성이 있다.
//그리고 생성자 함수가 훨씬 메모리적으로 효율적임. 값들과 prototype을 공유하기 때문. 
let person2 = {age: 35}
person.age2;

//3.모듈 + 사용자 정의 타입
//생성자 함수에서도 값을 은닉하기 위해서는 위에 두 케이스를 합쳐야 한다. 
//내부함수를 만들어 외부함수의 변수를 은닉하고, 내부함수를 생성자 함수로 사용한다.
function PersonType2() {
    let age = 25;
    
    //밖으로 빼내기 위해서 빈함수를 사용
    function innerPersonType(){}
    
    //getAge함수는 클로저 함수
    //prototype은 인스턴스도 사용할 수 있으므로, 인스턴스에서 접근할 수 있게함
    innerPersonType.prototype.getAge = function(){
        return age;
    }

    return innerPersonType;
}

//innerPersonType()이 리턴되어 할당
const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());

//복잡하죠..? 그래서 나온 게 클래스

// 4. IIFE 패턴으로 만들어 보기
// 즉시 실행 함수
//즉시 실행 했으므로, PersonType3에는 바로 innerPersonType이 들어간다. 
const PersonType3 = (function(){
    let age = 25;
    
    function innerPersonType(){}
    
    innerPersonType.prototype.getAge = function(){
        return age;
    }
    
    return innerPersonType;
})();

const personType3 = new PersonType3();
console.log(personType3.getAge());