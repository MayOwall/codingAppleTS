// Q1. 이름, 나이, 출생지역을 변수로 각각 저장 해 보기

const userName = "mayOwall";
const userAge = 25;
const userLocation = "seoul";

type Lec2User = {
  [key: string]: string | number;
};

const mayOwall: Lec2User = {
  name: "mayOwall",
  age: 25,
  location: "seoul",
};

// Q2. 가장 좋아하는 곡과 가수 일므을 변수에 object 자료형으로 담아보십시오
type Lec2MusicInfo = {
  [key: string]: string;
};

const lec2FavoriteMusic: Lec2MusicInfo = {
  title: "내고향서울엔",
  musician: "검정치마",
};

// Q3. 객체 타입지정하기
type Lec2Project = {
  member: string[];
  days: number;
  started: boolean;
};

const lec2Project: Lec2Project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
