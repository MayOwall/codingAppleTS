export {};

// 삼항 연산자

3 > 1 ? console.log("yes") : console.log("no");

// 조건문 써서 타입 만들기

type Age<T> = T extends string ? T : unknown;
let age: Age<number> = 25;
let agge: Age<string> = "agge";

type FirstItem<T> = T extends any[] ? T[0] : any;

// infer

type Person<T> = T extends infer R ? R : unknown;

type exact<T> = T extends () => infer R ? R : unknown;
