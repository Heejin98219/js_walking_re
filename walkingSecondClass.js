// 조건문
const a = 3;
if (a === 3) {
  console.log("a는 3입니다!");
} else {
  console.log("a는 3이 아닙니다.");
}

// 문제 1
function checkNumber(num) {
  // 여기에 if-else 문을 작성하세요
  if (num > 0) {
    console.log("양수입니다.");
  } else if (num < 0) {
    console.log("음수입니다.");
  } else {
    console.log("0 입니다.");
  }
}

// 예시 출력
checkNumber(5); // 출력: "양수입니다."
checkNumber(-3); // 출력: "음수입니다."
checkNumber(0); // 출력: "0입니다."

// 문제 2
function checkAge(age) {
  // 여기에 if-else 문을 작성하세요
  if (age >= 18) {
    console.log("Access granted");
  } else if (age <= 18) {
    console.log("Access denied");
  }
}

// 예시 출력
checkAge(20); // 출력: "Access granted"
checkAge(16); // 출력: "Access denied"

// 문제 3
function checkEvenOdd(num) {
  // 여기에 if-else 문을 작성하세요
  if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
}

// 예시 출력
checkEvenOdd(4); // 출력: "짝수입니다."
checkEvenOdd(7); // 출력: "홀수입니다."

// 문제 4
function assignGrade(score) {
  // 여기에 if-else if-else 문을 작성하세요
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

// 예시 출력
assignGrade(95); // 출력: "A"
assignGrade(85); // 출력: "B"
assignGrade(75); // 출력: "C"
assignGrade(65); // 출력: "D"
assignGrade(50); // 출력: "F"

// 문제 5
function compareToTen(num) {
  // 여기에 if-else if-else 문을 작성하세요
  if (num > 10) {
    console.log("10보다 큽니다.");
  } else if (num < 10) {
    console.log("10보다 작습니다.");
  } else {
    console.log("10과 같습니다.");
  }
}

// 예시 출력
compareToTen(15); // 출력: "10보다 큽니다."
compareToTen(5); // 출력: "10보다 작습니다."
compareToTen(10); // 출력: "10과 같습니다."

// 반복문 (for문)
// for( let 변수 =시작조건; 변수 = 종료조건; 변수++;){}

for (let i = 0; i < 10; i++) {
  // console.log(i);
  // 0 1 2 3 4 5 6 7 8 9
}

for (let j = 2; j <= 9; j++) {
  //console.log(j);
  // 2 3 4 5 6 7 8 9
}

for (let e = 1; e <= 9; e = e + 2) {
  //console.log(e);
  // 1, 3, 5, 7, 9
}

for (let f = 0; f <= 100; f += 5) {
  //console.log(f);
}
// 0, 5, 10 ~ 100

// 문제 1
function printNumbers() {
  // 여기에 for 문을 작성하세요
  for (let i = 1; i <= 10; i++) {
    // console.log(i);
  }
}

// 함수 호출
printNumbers();
// 출력: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// 문제 2
function sumUpTo(n) {
  let sum = 0;
  // 여기에 for 문을 작성하세요
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

// 예시 출력
sumUpTo(5); // 출력: 15 (1+2+3+4+5)
sumUpTo(10); // 출력: 55 (1+2+3+4+5+6+7+8+9+10)

// 문제 3
function printEvenNumbers(arr) {
  // 여기에 for 문과 if 문을 작성하세요
  for (let j = 1; j <= arr.length; j++) {
    if (arr[j] % 2 === 0) {
      console.log(arr[j]);
    }
  }
}

// 예시 출력
printEvenNumbers([1, 2, 3, 4, 5, 6]); // 출력: 2, 4, 6
printEvenNumbers([10, 15, 20, 25, 30]); // 출력: 10, 20, 30

function PrintTest(arr) {
  for (let e; e < arr.length; e++) {
    if (arr[e] % 3 === 0) {
      console.log(arr[e]);
    }
  }
}

// 4번
function printReversed(arr) {
  // 여기에 for 문을 작성하세요
  for (let i = arr.length; i > 0; i--) {}
}

// 예시 출력
printReversed([1, 2, 3, 4, 5]); // 출력: 5, 4, 3, 2, 1
printReversed([10, 20, 30, 40]); // 출력: 40, 30, 20, 10

// 5번
function getName(person) {
  // 여기에 이름을 반환하는 코드를 작성하세요
  return person.name;
}

// 예시 출력
const name1 = getName({ name: "Alice", age: 25 });
console.log(name1); // 출력: Alice

const name2 = getName({ name: "Bob", age: 30 });
console.log(name2); // 출력: Bob
