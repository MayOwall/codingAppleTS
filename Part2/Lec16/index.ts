export {};
let obj = { name: "owall", age: 20 };
Object.keys(obj);

// object의 타입 키값을 모두 가져오는 keyof

interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; // age | name

let a: PersonKeys = "age";
let b: PersonKeys = "name";

interface Person2 {
  [key: string]: number;
}

type Person2Keys = keyof Person2;

let c: Person2Keys = "name";

// 타입 변환기 : mapping

type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<T> = {
  [key in keyof T]: string;
};

type newType = TypeChanger<Car>;

// 숙제 1

type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChanger2<T> = {
  [key in keyof T]: string | number;
};

type newBus = TypeChanger2<Bus>;

// 숙제 2

type TypeChanger3<T, A> = {
  [key in keyof T]: A;
};
