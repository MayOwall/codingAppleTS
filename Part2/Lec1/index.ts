{
  // rest parameter에 타입 지정

  function hamsoo(...params: number[]) {}
  hamsoo(1, 2, 3);

  // cf. rest parameter와 spread operator는 다른 문법이다.

  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr = [...arr1, ...arr2];

  // cf. 구조분해할당도 알아두도록 하자.

  let [value1, value2] = ["hello", "world"];

  let {
    name,
    age,
  }: {
    name: string;
    age: number;
  } = {
    name: "owall",
    age: 25,
  };

  // 숙제 1

  function biggest(...params: number[]): number {
    const newArr = params.sort((a, b) => a - b);
    return newArr[newArr.length - 1];
  }
  biggest(1, 3, 2, 65, 7);

  // 숙제 2
  interface Object {
    user: string;
    comment: number[];
    admin: boolean;
  }

  function object({ user, comment, admin }: Object): void {
    console.log(user, comment, admin);
  }

  object({ user: "kim", comment: [3, 5, 4], admin: false });

  // 숙제 4

  function array([a, b, c]: (number | string | boolean)[]): void {
    console.log(a, b, c);
  }
}
