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
}
