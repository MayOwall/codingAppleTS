import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Profile />
      <Props name="props"></Props>
    </div>
  );
}

// 컴포넌트에 타입 지정하기

function Profile(): JSX.Element {
  return <div>프로필입니다.</div>;
}

// 컴포넌트 props 타입 지정하기
// react에서는 props때문에 수많은 버그들이 발생한다. 이러한 버그를 막기 위해 props 타입을 잘 지정 해 주는 것이 필요하다.
function Props(props: { name: string }): JSX.Element {
  return <div>props 타입 지정을 위한 컴포넌트 입니다.</div>;
}

// useState 타입 지정하기

function UseState() {
  let [state, setState] = React.useState("state");
  // 사실 자동으로 타입 지정이 된다.
  // 2개 이상의 타입을 넣고 싶을 땐 (사실 그렇게 만들면 안됨) |를 이용하면 된다.
}
export default App;
