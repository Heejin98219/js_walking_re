// 메서드: 호출의 주체가 있는 것
// 함수: 호출의 주체가 없는 것

// slice
// 배열.slice(시작 인덱스,자를 인덱스 +1 );
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.slice(1, 3);
console.log(newNumbers);
// [2, 3]

// some
// 논리 합 연산자
// 배열.some(콜백함수())
// 조건을 만족하는지 확인하는 함수
// if문 사용이 필수는 아님
// const result = numbers.some(function (n) {
//   return n === 2;
// });
// console.log(result);

const friends = [
  { name: "주희", age: 24 },
  {
    name: "서영",
    age: 30,
  },
  {
    name: "승원",
    age: 26,
  },
];

// 30살 이상인 사람이 한 명이라도 존재하니???
// const result = friends.some(function (Thirty) {
//   if (Thirty.age >= 30) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(result);
// true

// every
// 논리 곱 연산자
// 모든 사람이 30살 이상이니???
const result = friends.every(function (Thirty) {
  if (Thirty.age >= 30) {
    return true;
  } else {
    return false;
  }
});
console.log(result);

// 비동기
// 동기적으로 동작하지 않는 것
// 외부적으로 어떤 데이터를 가져오거나
// 입력해야 할 때 사용함
// (firebase)

// promise
// promise의 세가지 상태
// 요청중 (pending 상태)
// 성공 (fulfilled 상태)
// 실패 (rejected 상태)
// 비동기 관련 처리
// = promise 객체를 이용하여 코딩을 함
// 핸들링 할 수 있는 두가지
// 1. then, catch
// 2. async, await
// fetch("주소"): 외부에 데이터를 요청하는 함수

// async, await
// 함수명 앞에 async를 입력해야 함
async function printTest() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(result);
}
// 우리가 원하는 건
// pending을 이용해서
// 데이터가 서버로 가서
// 다시 되돌아 오는 것인데
// await을 사용하면
// fulfilled가 될 때까지
// 기다려 줄 수 있다

// Json
// promise 객체의 메서드
// fetch로 가져온 데이터는
// 항상 .Json과 같이 사용해야 함
// .JSON은 자바스크립트 객체 형태로
// (object 형태로) 변환해주는 것
// 결과를 받으려면 기다려야 함

// try ~ catch
// try {
// }
// catch {
// 안에 있는 로직이 잘못될 경우 실행
// }
