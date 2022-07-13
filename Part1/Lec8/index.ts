{
  /*
  Literal types
    타입이 아닌 특정 문자, 특정 숫자만 지정하는 것도 가능합니다.
    변수에 뭐가 들어올지 더 엄격하게 관리할 수 있습니다.
    자동완성에 있어서도 편리합니다.
  */

  let 이름: 123;
  이름 = 123;
  // 이름 = 234; => 에러

  function 함수(a: "hello"): "hello" {
    return a;
  }
  함수("hello");

  // 자료와 타입은 엄연히 다르기 때문에 정상적으로 받아들이지 못한다.
  // 해결법 => object에 타입 지정 혹은 as문법, as const 키워드 사용

  const 자료 = {
    name: "kim",
  } as const;

  function naeHamsoo(a: "kim") {}
  naeHamsoo(자료.name);
}
