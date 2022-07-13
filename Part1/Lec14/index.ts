{
  //interface

  interface Square {
    // 오 2개를 혼용해도 봐주네, 근데 좋진 않겠지
    color: string;
    width: number;
  }

  let square: Square = { color: "red", width: 200 };

  // interface는 중복선언이 가능하다 (중첩됨)
  interface Square {
    height?: number;
  }

  // extends 활용하기

  interface Student {
    name: string;
  }
  interface Teacher extends Student {
    age: number;
  }

  let student: Student = {
    name: "학생",
  };
  let teacher: Teacher = {
    name: "선생",
    age: 20,
  };

  // type alias와 &(intersection type)

  type Animal = { name: string };
  type Cat = { age: number } & Animal;

  // 숙제 1
  interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
  }

  let product = {
    brand: "Samsung",
    serialNumber: 1350,
    model: ["Tv", "phone"],
  };

  // 숙제 2
  interface Cart {
    product: string;
    price: number;
  }

  const cart: Cart[] = [{ product: "청소기", price: 12500 }];

  // 숙제 3
  interface NewCart extends Cart {
    card: boolean;
  }

  const newCart: NewCart[] = [
    {
      product: "cart",
      price: 12400,
      card: false,
    },
  ];

  // 숙제 4
  interface ThisObject {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
  }
  const thisObject: ThisObject = {
    plus(a, b) {
      return a + b;
    },
    minus(a, b) {
      return a - b;
    },
  };
}
