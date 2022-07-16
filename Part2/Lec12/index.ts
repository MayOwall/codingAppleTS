import { b } from "./data";
// 변수 재정의 하기

declare let a: number;

console.log(a + 1);
console.log(b + 1);

// 모든 ts 파일은 ambient module (글로벌 모듈)
// import, export가 있으면 자동으로 로컬 모듈이 됨
export {};

// 모듈이 상황에서 글로벌 변수를 만들고 싶다면 declare사용하기

declare global {
  type Lec12Global = string;
}
