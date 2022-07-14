{
  // never
  // 1. return 값이 없어야 함
  // 2. endpoint가 없어야 함 (에러 혹은 반복문)

  function hamsoo(): never {
    while (true) {}
  }

  // 사실 void 로 대체 가능하기에 쓸 데가 없다고 함
  // 코드를 이상하게 짜면 간혹 등장하는 타입이기 때문에 알아야 함

  function hamsoo2(a: string) {
    if (typeof a === "string") {
      console.log(a);
    } else {
      console.log(a);
      // never, 즉 절대 있을 수 없는 일이라는 뜻이기에 코드 수정이 필요한 경우가 대다수이다.
    }
  }
}
