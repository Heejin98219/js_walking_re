async function printTest() {
  // 데이터를 받아오기 전까지 기다리기
  // 즉, fetch함수는 promise를 return하니까
  // 그 결과를 안 기다리면 pending이 무조건
  // console.log()로 찍힐테니,
  // pending이 안 찍히도록 일단 기다려주는
  // fulfilled가 될 때까지 기다려주는게
  // await의 fetch
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");

    // 자바스크립트가 읽을 수 있도록 변환해야 하니까,
    // 변환하는 작업도 비동기적으로 동작하니까
    // await를 붙여줬다
    const users = await result.json();

    // success인지 rejected인지 결과를 출력한다.
    console.log(users);
  } catch {}

  // 함수 호출
  printTest();
  // Promise {<pending>}
}
