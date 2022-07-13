{
  let 제목 = document.querySelector("#title");
  // 1. selector로 찾은 태그는 narrowing을 해 주어야 한다.
  if (제목 !== null) {
    제목.innerHTML = "반가워요.";
  }

  // narrowing의 방법은 5가지.
  // 2. instanceof 연산자.
  if (제목 instanceof Element) {
    제목.innerHTML = "난 instanceof로 바뀜";
  }

  // 3. as 키워드
  제목 = document.querySelector("#title") as Element;
  제목.innerHTML = "as keyword";

  // 4.
  if (제목.innerHTML) {
    제목.innerHTML = "존재";
  }

  // 5. 무식한(?) 해결책 : tsconfig의 설정 바꾸기.

  // 결론 narrowing을 잊지 말자.

  // href는 HTMLAnchorElement 타입을 사용해야 한다.
  // html 태그들은 종류별로 정확한 타입 명칭이 있는데, 백만개를 전부 외울 필요는 없고, 자동완성으로 해결하도록 하자.

  // optional 연산자도 narrowing으로 인정 해 준다.

  // 숙제 1

  const image = document.querySelector("img");

  if (image instanceof HTMLImageElement) {
    image.src = "new.jpg";
  }

  const aList = document.querySelectorAll("a");
  aList.forEach((a) => {
    if (a instanceof HTMLAnchorElement) a.href = "https://kakao.com";
  });
}
