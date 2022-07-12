// 타입의 종류 : string, number, boolean, null, undefined, [], {}...
{
  // 문자열 타입 지정
  let 이름: string = "kim";
  // 배열 타입 지정
  let 이름배열: string[] = ["kim", "park"];
  // 객체 타입 지정
  let 이름객체: { name?: string } = { name: "kim" };
  // 여러개의 타입 지정
  let 이름여러개: string | number = "kim";
  이름여러개 = 123;

  // 타입을 변수에 담아 사용하기
  type Name = string | number;
  let 이름변수: Name = "이름";

  // 함수에 타입 정해주기
  function 함수(x: string): string {
    return x;
  }
  함수("문자열");
  // 함수(123);

  // array에 쓸 수 있는 tuple 타입
  type Member = [number, boolean];
  let owall: Member = [123, true];

  // object 키 속성 한번에 정해주는 방법
  type Info = {
    [key: string]: string;
  };
  let may: Info = { name: "may", location: "seoul" };

  // class 타입 지정
  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
}
