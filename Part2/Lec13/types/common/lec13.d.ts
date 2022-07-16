// d.ts : 프로젝트에서 사용하는 타입들을 보관하기 위한 파일
// export를 통해 타입을 export 해 주는것이 필요
export type Lec13a = number;
interface Lec13b {
  name: string;
}

// 자동으로 글로벌 모듈이 아니기 때문에 export하는 것이 필요하다.
// export 하기 귀찮을 땐 tsconfig.json의 typeRoots 설정을 건드려주자.
// 하지만 위험할 수 있기 때문에 가능한 export import를 사용 해 주자

// d.ts 파일의 용도
// 1. 타입 정의들을 따로 보관할 파일이 필요할 때
// 2. 타입 레퍼런스 생성하고 싶으면
