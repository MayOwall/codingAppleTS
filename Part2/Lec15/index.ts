export {};

// index signature

interface User {
  name: string;
  age: string;
  location: string;
}

// 둘은 같다
interface User2 {
  // 모든 string 타입의 속성은 string 타입을 갖는다.. 라는 뜻
  [key: string]: string | number;
  // narrow도 가능
  age: number;
  // key 값에 숫자를 넣을 수도 있음
  // 근데 사실 이건 배열과 다를게 없음
  [key: number]: string;
}

let user: User2 = {
  name: "owall",
  age: 20,
  location: "seoul",
};

// recursive

interface MyType {
  "font-size": {
    "font-size": {
      "font-size": number;
    };
  };
}

interface Recursive {
  "font-size": Recursive | number;
}

let css: Recursive = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// 숙제 1

interface Assign1 {
  [key: string]: string | number;
}

let assign1: Assign1 = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

// 숙제 2

interface Assign2 {
  "font-size": number;
  [key: string]: Assign2 | number;
}

let assign2: Assign2 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
