{
  // 타입을 파라미터로 입력하는 Generic
  function hamsoo<T>(x: T[]): T {
    return x[0];
  }
  // 타입스크립트에 타입 자동 변환을 기대하면 안됨
  let a = hamsoo<number>([2, 4]);

  // 타입 제한하기 : extends
  function hamsoo2<T extends number>(x: T) {
    return x - 1;
  }
  let b = hamsoo2<number>(100);

  // 커스텀 타입으로도 파라미터 제한 가능

  interface LengthCheck {
    length: number;
  }
  function hamsoo3<T extends LengthCheck>(x: T) {
    return x.length;
  }
  let c = hamsoo3<string[]>(["100"]);

  // 숙제 1

  function assign1<T extends string | unknown[]>(x: T): number {
    return x.length;
  }

  assign1("hello");
  assign1(["nice", "to", "meet"]);

  // 숙제 2

  interface Animal {
    name: string;
    age: number;
  }

  let data = '{"name" : "dog", "age" : 1 }';

  function assign2<T>(x: string): T {
    const parsedX = JSON.parse(x);
    return parsedX;
  }

  assign2<Animal>(data);

  // 숙제 3

  class Person<T> {
    name: T;
    constructor(a: T) {
      this.name = a;
    }
  }
  let person = new Person<string>("어쩌구");
  person.name; //any 타입이 되었넹
}
