// 배열 API
// 요소는 어떤 형태든 상관 없음
// [ ].로 접근할 수 있음
// 배열 변수.로 접근할 수 있음
const color = ["분홍색", "보라색"];
console.log(color);
// [ '분홍색', '보라색']
// 요소 추가
// push()
color.push("노란색");
console.log(color);
// ['분홍색', '보라색', '노란색']
color.push("민트색");
console.log(color);
// ['분홍색', '보라색', '노란색', '민트색']
// 마지막 요소 리턴
// pop()
const colorTest = color.pop();
console.log(colorTest);
// 민트색

// 실습
const arr = [30, 1, 5, 40];
// 100을 넣기 (끝에)
arr.push(100);
// 넣은 100을 빼서(pop) 변수에 할당하기
arr.pop();
// 할당한 100을 console.log에 찍어보기
console.log(arr);
// [30, 1, 5, 40]

// forEach
// for문과 비슷
// 배열.forEach(콜백함수())
// 콜백함수의 매개변수에는 배열의 각 요소가 차례대로 할당됨
// 매개변수 이름은 뭐든 상관 없음
// (1) forEach는 배열의 메서드다.
// (2) 이 배열 메서드는 input(매개변수)을 갖는다.
// (3) 그 매개변수는 함수다(매개변수로 들어오는 함수를 = 콜백함수)
// (4) 그 매개변수로 들어온 함수는 input(매개변수)을 갖는다.
// (5) 그 매개변수에는 호출의 주체가 된 배열의 각 요소가 차례대로 할당된다.
// 아웃풋이 없음
// 내보내는 값은 배열
for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
}
// 분홍색
// 보라색
// 노란색
color.forEach(function () {
  console.log("안녕ㅠ");
});
// 안녕ㅠ
// 안녕ㅠ
// 안녕ㅠ
const dogs = [
  {
    id: 1,
    name: "말티즈",
  },
  { id: 2, name: "진돗개" },
  {
    id: 3,
    name: "풍산개",
  },
  { id: 4, name: "제주개" },

  { id: 5, name: "삽살개" },
];

for (let i = 0; i < dogs.length; i++) {
  console.log("우리나라 토종견: " + dogs[i].name);
}
color.forEach(function (color) {
  console.log(color);
});
// 분홍색
// 보라색
// 노란색
//const testArr = ["윤창식", "최원장", "박가현", "김병연"];
//testArr.forEach(function (tutor) {
//console.log(tutor);
//});
// 윤창식
// 최원장
// 박가현
// 김병연

// 실습
// const testArr = [
//   {
//     name: "홍길동",

//     age: 21,
//   },

//   {
//     name: "홍길순",

//     age: 23,
//   },

//   {
//     name: "김르탄",

//     age: 40,
//   },
// ];
// 나이가 30살 이상인 경우만 이름을 출력하기
// testArr.forEach(function (person) {
//   if (person.age >= 30) {
//     console.log(person.name);
//   }
// });

// map
// 배열.map(콜백함수())
// 값을 변경해서 반환
// return값이 있음
const kakao = ["어피치", "죠르디", "춘식이"];
kakao.map(function () {
  console.log("안녕?");
});
// 안녕?
// 안녕?
// 안녕?
kakao.map(function (characters) {
  console.log(characters);
});
// 어피치
// 죠르디
// 춘식이
// const copyTutor = testArr.map(function (tutor) {
//   return tutor;
// });
// console.log(copyTutor);
// [
// { name: '홍길동', age: 21 },
// { name: '홍길순', age: 23 },
// { name: '김르탄', age: 40 }
// ]

// filter
// 배열.filter(콜백함수())
// return문에 filter의 조건을 넣음
// return true;는 모든 요소가 true;로 반환
// 즉, 모든 요소들이 반환됨
// return false;는 모든 요소가 false;로 반환
// 즉, 어떤 요소도 반환되지 않음
// 내보내는 값은 배열
const myTest = [9, 8, 0, 2, 19];
// 10보다 크거나 같은 값을 myArr로부터 뽑아내기
const myArr = myTest.filter(function (numb) {
  console.log(numb);
  // 9
  // 8
  // 0
  // 2
  // 19
});
console.log(myArr);
// []
const adultAge = myTest.filter(function (numb) {
  if (numb >= 19) {
    return true;
  }
});
console.log(adultAge);
// [ 19 ]
const familyAge = [55, 52, 26, 24, 6];
const filteredAge = FamilyAge.filter(function (age) {
  if (age > 30) {
    return true;
  }
});
console.log(filteredAge);
// [ 55, 52 ]
const tutors = [
  {
    name: "윤창식",

    job: "tutor",
  },

  {
    name: "최원장",

    job: "developer",
  },

  {
    name: "김병연",

    job: "tutor",
  },

  {
    name: "박가현",

    job: "tutor",
  },
];

const realTutors = tutors.filter(function (tutor) {
  if (tutor.job === "tutor") {
    return true;
  } else {
    return false;
  }
});
console.log(realTutors);
// { name: '윤창식', job: 'tutor'}
// { name: '김병연', job: 'tutor'}
// { name: '박가현', job: 'tutor'}
