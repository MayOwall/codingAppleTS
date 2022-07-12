{
  // Narrowing
  // 타입이 하나로 확정되지 않았을 경우 type narrowing을 사용해야 함

  function 함수(x: number | string) {
    if (typeof x === "number") {
      return x + 1;
    } else {
      return "숫자를 입력 해 주세요";
    }
  }

  // Assertion (타입 덮어쓰기)
  // union타입들 중 하나의 타입으로 확정하고 싶을 때
  // 어떤 타입이 들어올지 100% 확실할 때
  // 잘못 쓰면 사수가 빠따를 들고 올지도...
  // 즉 비상용으로 쓰자

  function Assertion(x: number | string) {
    let array: number[] = [];
    array[0] = x as number;
    // 문자에 number의 탈을 억지로 뒤집어 쓰게 할 수도 있음 => 버그 추적을 못하게 됨
  }

  // 숙제 1.

  function 클리닝함수(x: (number | string)[]): number[] {
    const newArray: number[] = [];
    x.map((x) => {
      newArray.push(Number(x));
    });
    return newArray;
  }

  // 숙제 2.

  function 과목찾기(x: { subject: string | string[] }): string {
    return typeof x.subject === "string"
      ? x.subject
      : x.subject[x.subject.length - 1];
  }
}
