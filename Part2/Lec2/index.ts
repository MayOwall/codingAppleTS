{
  // null / undefined 타입체크는 ?:를 사용하자

  function hamsoo1(a?: string): string {
    if (a) {
      return "이것은 undefined이 아닙니다.";
    }
    return "이것은 undefined 입니다.";
  }

  // in 연산자를 이용한 narrowing

  type Fish = { swim: string };
  type Bird = { fly: string };

  function animal(animal: Fish | Bird): string {
    if ("swim" in animal) {
      return "이것의 타입은 Fish입니다.";
    }
    return "이것의 타입은 Bird입니다.";
  }

  // instanceof 연산자를 이용한 narrowing

  let date = new Date();
  if (date instanceof Date) {
    console.log("date is instance of Date");
  }

  // narrowing이란 결국 특정할 수 있게 하는 것. 수단은 상관없다.
}
