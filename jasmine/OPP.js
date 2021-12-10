//객체지향

// 1. 모듈 패턴 -> 값을 은닉하기 위해서 사용. 클로저 공간. -> 전역 변수를 사용하지 않을 수 있음. 
//객체를 반환하기 때문에, 첫글자를 대문자로 만들어줌. 생성자 함수는 아니고 일반 함수.
function Person() {
    // let age = 35;

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
// 생성자 함수에서는 값이 숨겨지지 않는다. 접근 가능
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

//3. 생성자 함수에서도 값을 숨기기 위해서는 위에 두 케이스를 합쳐야 한다. 