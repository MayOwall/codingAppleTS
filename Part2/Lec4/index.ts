{
  // public, private

  class User {
    // public : name을 자유롭게 접근, 수정 가능
    public name: string;
    // private : 클래스 내부에서만 접근, 수정 가능
    private age?: number;

    // constructor를 사용하는 이유 : parameter를 사용할 수 있기 때문에
    constructor(name: string, age?: number) {
      this.name = name;
      this.age = age;
    }
  }

  let user1 = new User("may");
  user1.name = "may2";

  let user2 = new User("owall", 25);
  // user2.age = 20; // 에러

  // public을 이용하면 타입 지정을 생략할 수 있음

  class Person {
    constructor(public name: string) {}
  }
  const person = new Person("이름");
}
