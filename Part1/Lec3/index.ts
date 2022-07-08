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
{
  //lec4
  //함수에 타입 지정 해 주기
  function 나는야함수(x: number): number {
    return x * 2;
  }

  // void : 리턴이 없는 함수
  function 공허한함수(x: string): void {
    console.log(x);
  }

  // ?: 은 타입 | undefined와 같음

  function 물음표함수(x?: string): void {
    console.log(x);
  }

  // Q3. 이름을 파라미터로 입력하면 콘솔창에 안녕하세요 (이름) 을 출력해주고,
  // 아무것도 파라미터로 입력되지 않으면 "이름이 없습니다"를 출력하는 함수를 만들어봅시다.

  function 이름출력기(name?: string): string {
    return name === undefined ? "이름이 없습니다" : `안녕하세요 ${name}`;
  }

  /*
  Q4. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어 보세요.
  */
  function 자릿수출력기(x: string | number): number {
    return String(x).length;
  }

  /*
  Q5. 결혼 가능 확률을 알려주는 함수를 만들어 봅시다.
  1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
  2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
  3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
  */
  function 결혼가능한가여(
    income: number,
    isHouseOwner: boolean,
    appealPoint: "상" | "중" | "하"
  ): string | null {
    const houseScore = isHouseOwner ? 500 : 0;
    const appealScore = appealPoint === "상" ? 100 : 0;

    return income + houseScore + appealScore >= 600 ? "결혼가능" : null;
  }
}
