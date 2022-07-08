{
  // 가변적인 값을 만들고 싶을 때, UnionType
  let 회원: number | string | boolean = 123;
  회원 = "회원";

  let 회원들: (string | number)[] = [1, "2", 3];
  let 오브젝트: { a: string } = { a: "123" };

  // any : 모든 자료형 허용
  let 이름: any;

  // unknown : 모든 자료형을 허용하되, 에러를 잡아줌.
  let 이름2: unknown;

  // Q1. 변수에 타입 지정하기 1
  let user: string = "kim";
  let age: undefined | number = undefined;
  let married: boolean = false;
  let 철수: (string | undefined | boolean | number)[] = [user, age, married];

  // Q2. 변수에 타입 지정하기 2
  let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
  } = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
  };
  학교.score[4] = false;
  학교.friend = ["Lee", 학교.teacher];
}
