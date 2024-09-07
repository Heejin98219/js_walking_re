// 변수 //
// 1. 변수 이름: word
// 변수: 변하는 수
// 어떤 공간에 값을 넣고
// 재활용 하는 용도로 쓰인다.
// Hello World를
// 15번째줄, 20줄에서도 치면,
// 100개, 200개를 쓰면,
// Hello World에서 Hello를
// My로 변경한다면
// 몇 백번을 바꿔야 한다...
// 하지만 변수를 사용하면
// 그럴 필요가 없다.
// 2. 변수 값: "Hello World"
// 3. 변수 선언: 저장하는 행위 const word
// 4. 변수 할당: const word = "Hello World";
// 5. 변수 참조: console.log(word);
// 메모리에 저장하는 과정
// 메모리: 컴퓨터 저장 장소

const word = "Hello World";
//console.log(word);
// Hello World

// const, let, var
// var는 사용하지 않는다.

// 데이터 타입 //
// 숫자
// 정수
const a = 1.1;
// 실수
const b = 1.1;
// 문자열
const str = "this is javascript";

// 문자열의 길이
const lengthOfstr = str.length;
console.log(lengthOfstr);
// 18

// 문자열 대체
const replacedOfstr = str.replace("javascript", "coding");
console.log(replacedOfstr);
// this is coding

// slice, splice, concat

//불리언 타입
// 따옴표("", '')가 없어서 문자가 아님
// true: 참
// false: 거짓
const bool1 = true;
const bool2 = false;

// undefined, null
// undefined
//값이 없음
// 개발자의 의도가 없다.
let x;
console.log(x);
// undefined
//null
let y = null;
console.log(y);
// null
// 개발자가 명시적으로 표현

// 객체
// key:value가 한 pair
// JSON 형태
// 문자, 숫자, 배열, 객체, 함수도 들어갈 수 있음
let myDog = {
  name: "은동",
  age: 6,
};
console.log(myDog.name);
// 은동
console.log(myDog.age);
// 6
// 하위 객체
let me = {
  name: "희진",
  age: 26,
  birthday: "980219",
  sex: "female",
  family: {
    father: "있음",
    mother: "있음",
    youngerSister: "바보 자식",
  },
};
// 객체 배열
let AboutMe = {
  cm: "148cm",
  kg: "54kg",
  // bloodtype [{ O }, { A }]
  // O, A가 string 타입이라면 따옴표를 해줘야 하고,
  // 변수라면 선언을 해줘야 한다.
  // bloodtype: [{ cm: "148cm" }, { kg: "54kg" }],
};
const dessert = [
  {
    first: {
      name: "아아",
      taste: "담배빤물 왜마셔 노맛",
    },
    second: {
      name: "바닐라라떼",
      taste: "내 원픽",
    },
    third: {
      name: "조각 케이크",
      taste: "맛있자나",
    },
    fourth: {
      name: "마카롱",
      taste: "없어서 못먹어 너무좋아",
    },
    fifth: {
      name: "와플",
      taste: "생크림 좀 더주지",
    },
    sixth: {
      name: "샌드위치",
      taste: "야채 들어가서 싫어",
    },
  },
];

// 배열
// 완벽히 객체는 아님
// 객체의 한 종류
// 프로그래밍 세계에서는 0부터 시작
let ifntMembers = ["성규", "동우", "우현", "성열", "L", "성종"];
let ifntDebutDate = [2, 0, 1, 0, 0, 6, 0, 9];

// 형변환
// 문자열을 숫자로 변환
// 숫자로 변환은 Number()
// 문자열로 변환은 String()
let strNum = "42";
let actualNum = 8;
console.log(strNum + actualNum);
// 428
strNum = Number(strNum);
console.log(strNum + actualNum);
// 50
// 숫자를 문자열로 반환
// String()
let age = 30;
let message = "My age is" + String(age);

// 형변환 실습
const num1 = 45;
const num2 = "5";
const num3 = Number(num2);
console.log(num1 + num3);
// 50

// 연산자 (+, -, *, /, %)
console.log(2 + 3);
// 5
console.log(3 - 2);
// 1
console.log(3 * 2);
// 6
console.log(3 / 2);
// 1.5
console.log(3 % 2);
// 1

// NAN (Nat A Number)
console.log("Hello" % 6);
// NAN

// 실습
const number1 = 20;
const number2 = 6;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);

// 등호연산자
// 할당할 변수 = 변수 + 새로운 값
// 변수 + 새로운 값은
// 할당할 변수를 참조하는 값
// = 를 기준으로 좌항과 우항을 생각할 때
// 좌항은 할당할 변수명을
// 우항은 (어떠한 값을 넣을지)
// 변수를 참조한다.
// 그 결과를 할당할 변수 자리에 넣어준다.
let z = 10;
console.log(z);
// 10
z = z + 5;
console.log(z);
// 15
// c=c-5;
let c;
c -= 5;
// d=d*5;
let d;
d *= 5;

// 일치연산자(===) vs 동등연산자(==)
// 일치연산자는 데이터 타입까지 확인
// 일치연산자를 사용하는 것을 권장
console.log(2 === "2");
// false
console.log(2 == "2");
// true

// 불일치연산자(!==) vs (!=)
const 남자여부 = true;
if (
  //(남자여부 !== true) {
  //(!남자여부){
  남자여부 === false
) {
  console.log("저는 여자입니당");
}

// 논리 곱(&&)
// And 조건
// 모두 true여야 true
// 하나가 false면 false
const bool3 = true;
const bool4 = true;
const bool5 = false;
console.log(bool3 && bool4);
// true
console.log(bool3 && bool5);
// false

// 논리 합 (||)
// Or 조건
// 하나만 true면 true
// 하나만 false면 false
const bool6 = true;
const bool7 = true;
const bool8 = false;
const bool9 = false;
console.log(bool6 || bool7);
// true
console.log(bool7 || bool8);
// true
console.log(bool8 || bool7);
// true
console.log(bool8 || bool9);
// false

// 함수 (function)
// 함수명, 인풋, 아웃풋이 필요
// 인풋 = 매개변수 = 파라미터(parameter)
// 인풋은 쉼표를 기준으로 여러개 입력 가능
// 선언 → 사용
// function (input1, input2 ..) {
// return output;
// }
// 스코프 ({ }범위)안에서 동작이 이뤄지게 함
// 함수 선언문
// function 함수명 (input1, input2 ..) {
// return output;
// }
//함수 표현식
// const 함수명 function (input1, input2 ..) {
// return output;
// }
function FuncAdd(addNum1, addNum2) {
  console.log(addNum1 + " 그리고 " + addNum2);
}
FuncAdd(20, 6);
// 20 그리고 6
FuncAdd(98, 2);
// 98 그리고 2
function FuncMinus(minusNum1, MinusNum2) {
  return console.log(minusNum1 - MinusNum2);
}

FuncMinus(148, 48);
// 100
