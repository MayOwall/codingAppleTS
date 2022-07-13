{
  // 함수타입 표현방법
  // type alias에 함수 타입 저장해서 쓰는 법

  type Hamsoo = (a: string) => number;
  let hamsoo: Hamsoo = function (a) {
    return 1;
  };

  // 메서드 : object안에 함수 저장하기 (타입도 지정 가능)

  type ChangeName = (a: string) => void;

  let memberInfo: {
    name: string;
    changeName: ChangeName;
  } = {
    name: "mayOwall",
    changeName: (a) => {
      memberInfo.name = a;
    },
  };
  memberInfo.changeName("오월");

  // 숙제 2

  type CutZero = (number: string) => string;

  const cutZero: CutZero = (number) => {
    return String(Number(number));
  };

  cutZero("00123");

  type RemoveDash = (value: string) => number;

  const removeDash: RemoveDash = (value) => {
    return Number(value.replace(/\-/g, ""));
  };

  // 숙제 3

  type Callback = (
    param1: string,
    cutZero: CutZero,
    removeDash: RemoveDash
  ) => number;

  const callback: Callback = (param1, cutZero, removeDash) => {
    return removeDash(cutZero(param1));
  };
}
