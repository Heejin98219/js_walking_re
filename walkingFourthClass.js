// truthy: true인 것 처럼
// 참인 것 같은 값
// falsy: false인 것 처럼
// 거짓인 것 같은 값

// find
// 조건에 맞는 첫번째 요소만 반환
// 배열.find(콜백함수())
const ifntAge = [89, 90, 91, 91, 92, 93];
const foundValue = ifntAge.find(function (age) {
  //return age >= 91;
  if (age >= 91) {
    return true;
  }
});
console.log(foundValue);
// 91

// 실습
const 회원명부 = [
  {
    이름: "홍길동",

    나이: 25,

    성별: "male",
  },

  {
    이름: "홍길순",

    나이: 30,

    성별: "female",
  },

  {
    이름: "홍길자",

    나이: 40,

    성별: "female",
  },
];

// 회원명부에서 여자인 첫 번째 회원을 찾아보세요.(find 이용)
const guestFounded = 회원명부.find(function (guest) {
  if (guest.성별 === "female") {
    return true;
  } else {
    return false;
  }
});
console.log(guestFounded);
// { '이름': '홍길순', '나이':30, '성별': 'female'}

// sort
// 정렬
// 배열.sort()
// 문자는 잘 적용이 안 됐음..
// 배열.sort((a,b) => a - b)는 오름차순 정렬
// 배열.sort((a,b) => b - a)는 내림차순 정렬
// (1) 원본배열 영향 있음
// (2) sort도 callback 함수를 가진다
// (3) 이 callback함수는 인자(input)가 2개
// (4) 이 callback함수의 return에 필요한 것은 '숫자'
// (5) 숫자로 이루어진 배열을 정렬할 때는 b-a 가능
// (6) 문자로 이루어진 배열을 정렬할 때는 localeCompare 필요
const eundongNumb = [2, 1, 8, 3, 0];
eundongNumb.sort();
console.log(eundongNumb);
// [0, 1, 2, 3, 8]
const numbs = [2, 0, 8, 1, 7];
numbs.sort((a, b) => a - b);
console.log(numbs);
// [0, 1, 2, 7, 8]
numbs.sort((a, b) => b - a);
console.log(numbs);
// [8, 7, 2, 1, 0]

// localCompare
// ko-KR은 추가 안 해도 됨
const milk = ["초코", "딸기", "바나나", "민초", "하얀색"];
milk.sort((a, b) => b.localeCompare(a), "ko-KR");
console.log(milk);
// ['하얀색', '초코', '바나나', '민초' 딸기']
