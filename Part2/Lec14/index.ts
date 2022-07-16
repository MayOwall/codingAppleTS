export {};

interface CarType {
  model: string;
  price: number;
}

// implements : class의 속성 확인 문법, 할당하는 것은 아님

class Car implements CarType {
  price: number = 10000;
  constructor(public model: string) {
    this.model = model;
  }
}

let 타요 = new Car("버스");
