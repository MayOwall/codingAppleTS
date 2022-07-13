{
  // class 만들 때 타입 지정 가능

  class Person {
    // 타입을 미리 지정 해 줘야 함
    data: number = 0; // 생략가능
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    // prototype 메서드들도 타입 지정 가능
    returnName(): string {
      return this.name;
    }
  }

  let person1 = new Person("may");
  let person2 = new Person("owall");

  // 숙제 1
  class Car {
    model: string;
    price: number;
    constructor(model: string, price: number) {
      this.model = model;
      this.price = price;
    }
    tax(): number {
      return this.price * 0.1;
    }
  }

  // 숙제 2
  class Word {
    num: number[];
    str: string[];
    arguments: Element;

    constructor(...params: any[]) {
      this.num = params.filter((x: number | string) => typeof x === "number");
      this.str = params.filter((x: number | string) => typeof x === "string");
    }
  }
}
