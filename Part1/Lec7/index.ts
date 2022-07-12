{
  // type alias
  // 타입이 너무 길고 복잡할 땐, 타입을 변수에 넣어 지정할 수 있음
  // 변수명으로는 영어 대문자가 국률.
  // 재정의도 불가능함.

  type Animal = string | number | undefined;
  let 동물: Animal;

  type Object = {
    name: string;
    age: number;
  };
  let owall: Object = { name: "owall", age: 25 };

  // readonly
  // 읽기 전용. 수정 불가능

  type Boyfriend = {
    readonly name: string;
  };
  const basalophe: Boyfriend = {
    name: "baba",
  };

  // type 합치기

  type Name = string;
  type Age = number;
  type Person = Name | Age;

  // & 연산자로 object 타입 합치기 (object extend)

  type PositionX = { x: number };
  type PositionY = { y: number };

  type NewType = PositionX & PositionY;

  let position: NewType = { x: 10, y: 10 };

  // 숙제 1.
  // object를 extend 할 때 중복된 속성이 있다면 하나의 속성으로 합쳐진다.

  // 숙제 2.

  type ThisType = {
    color?: string;
    size: number;
    readonly position: number[];
  };

  // 숙제 3.
  type Name2 = string;
  type Phone = number;
  type Email = string;

  type Profile = {
    name: Name2;
    phone: Phone;
    email: Email;
  };

  const profile: Profile = {
    name: "owall",
    phone: 1111111111,
    email: "email@naver.com",
  };

  type Adult = { adult: boolean };

  type NewUser = Profile & Adult;

  const newUser: NewUser = {
    name: "owall",
    phone: 1111111111,
    email: "email@naver.com",
    adult: true,
  };
}
