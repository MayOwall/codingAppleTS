// import export
export const lec7Name = "owall";
export const lec7Age = 25;

// import {lec7Name, lec7Age} from './파일위치.js'

// type export 하기

export type Name = string;
// import {Name} from './옆에 있을 파일.js'

// namespace : ts의 옛날 import export 방식
// 지금은 import export로 할 수 있기 때문에 굳이...

namespace Namespace {
  export type Name2 = string | number;
}

///<reference path="" />
let 변수: Namespace.Name2 = "owall";

// 숙제 1

export type Lec7Car = {
  wheel: number;
  model: string;
};

// 숙제 2

export type Lec7Assign2 = (a?: object) => void;

// 숙제 3

namespace Lec7Dogs {
  export type Dog = string;
}
export interface Lec7Dog {
  name: string;
}

{
  let dog1: Lec7Dogs.Dog = "bark";
  let dog2: Lec7Dog = { name: "paw" };
}
