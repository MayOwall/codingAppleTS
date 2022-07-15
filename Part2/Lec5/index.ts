{
  // extends : class 재활용
  class User {
    x = 10;
  }

  class User2 extends User {
    y = 20;
  }

  // protected
  class Protected {
    // extend된 class 내부에서도 사용가능
    protected x: number = 10;
  }

  class Protected2 extends Protected {
    y = 20;
    logX() {
      console.log(this.x);
    }
  }

  // static
  class Static {
    // static : 부모 class에서만 사용할 수 있도록 함 자식들에게 복사되지 않음.
    // 출력을 해도 보이지 않음
    static x = 10;
    // private / protected / public + static 도 가능하다
    private static y = 20;
  }

  class Profession {
    static skill = "js";
    intro = "전문가입니다";
  }

  let may = new Profession();

  // 숙제 1

  class Assign1 {
    private static x = 10;
    // 자식 사용 불가, 외부 접근 불가
    public static y = 20;
    // 자식 사용 불가, 외부 접근 가능
    protected z = 30;
    // 자식 사용 가능, 외부 접근 불가능
  }

  // 숙제 2

  class Assign2 {
    private static x = 10;
    public static y = 20;
    addOne(num: number): string {
      Assign2.x += num;
      return `정상적으로 ${num}이 더해졌습니다.`;
    }
    printX() {
      console.log(Assign2.x);
    }
  }

  const assign2 = new Assign2();
  assign2.addOne(1);
  assign2.printX();

  // 숙제 3

  class Square {
    constructor(
      protected width: number,
      protected height: number,
      protected color: string
    ) {
      this.width = width;
      this.height = height;
      this.color = color;
    }
    draw() {
      const positionX = Math.floor(Math.random() * 370);
      const positionY = Math.floor(Math.random() * 370);

      const box = document.createElement("div");
      box.style.width = `${this.width}px`;
      box.style.height = `${this.height}px`;
      box.style.backgroundColor = this.color;

      box.style.display = "fixed";
      box.style.top = `${positionX}px`;
      box.style.left = `${positionY}px`;

      document.appendChild(box);
      // 이...이게 맞나..!
    }
  }
}
