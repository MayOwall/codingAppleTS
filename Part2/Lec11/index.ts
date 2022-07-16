{
  // 위치까지 고려한 배열 타입 지정 : tuple
  let bowWow: [string, boolean] = ["dog", true];

  // ?를 통해 옵션 표시 가능
  // 옵션은 무조건 맨 마지막에 위치해야 함
  let meow: [string, boolean?] = ["cat"];
  meow = ["cat", true];

  // tuple 응용

  function hamsoo(...x: [number, number, number?]) {
    console.log(x);
  }
  hamsoo(1, 2, 3);

  // 사실 이것과 별반 다를게 없음

  function hamsoo2(a: number, b: number, c: number) {
    console.log([a, b, c]);
  }
  hamsoo2(1, 2, 3);

  // 숙제 1

  const fruitCheese: [string, number, boolean] = ["fruitCheese", 4900, true];

  // 숙제 2

  let arr: [string, number, ...boolean[]] = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
  ];

  // 숙제 3

  function assign3(...[a, b, c]: [string, boolean, string | number]) {}

  assign3("a", true, 1);

  // 숙제 4

  function assign4(...rest: (string | number)[]): [string[], number[]] {
    const strArr: string[] = [];
    const numArr: number[] = [];

    rest.forEach((x) => {
      if (typeof x === "string") {
        strArr.push(x);
      } else if (typeof x === "number") {
        numArr.push(x);
      }
    });
    return [strArr, numArr];
  }
}
