window.onload = () => {
  btn1.addEventListener("click", () => {
    // 객체 선언
    let product = {
      pName: "갤럭시",
      price: 100,
      price: 10000, // 중복 선언 시 마지막에 입력된 값으로 셋팅
      brand: "쌤썽",
      spec: ["OLED", "AD"],
    };
    console.log("product : ", product);
    area1.innerHTML = "~~~  객체 선언 테스또 ~~~  <br>";
    area1.innerHTML += `객체명['속성명']으로 접근 -> pName : ${product["pName"]} <br>`;
    area1.innerHTML += `객체명.속성명으로 접근 -> price : ${product.price}<br>`;
    area1.innerHTML += `spec : ${product["spec"]}<br>`;
    area1.innerHTML += `product["spec"][0] : ${product["spec"][0]}<br>`;

    let user = {
      "user name": "체리",
      user_age: 13,
      "id!!": "sakura",
    };

    console.log("user : ", user);
    area1.innerHTML = `"user name" : ${user["user name"]}<br>`;
    area1.innerHTML = `"user.user_age" : ${user.user_age}<br>`;
    area1.innerHTML = `"id!!" : ${user["id!!"]}<br>`;
  });

  btn2.addEventListener("click", () => {
    // let name = '청명';
    // 객체 선언
    let card = {
      name: "체리",
      level: 10,
      //   객체의 메소드
      kind: function (card) {
        // 객체의 내부속성에 접근하기 위해 this 사용
        console.log(`level.${this["level"]} ${card} ${this.name}`);
      },
    };
    card.kind("카드캡터");
  });

  btn3.addEventListener("click", () => {
    let comic = {
      title: "카드캡터체리",
      price: 0,
      character: ["체리", "케로", "샤오랑"],
      writer: true,
    };

    console.log(comic);
    for (const key in comic) {
      console.log(`key : $[key], comic[key] : ${comic[key]}`);
    }
  });

  btn4.addEventListener("click", () => {
    // 빈 객체를 선언
    let ani = {};

    // 객체 속성을 추가
    // 속성이 없으면 추가, 이미 존재하면 값을 업데이트
    ani.name = "카드캡터체리";
    ani.age = 20;
    ani["character"] = "청명";

    // 객체에 메소드 추가
    ani.ImGround = function () {
      let str = "";
      for (const key in this) {
        if (typeof this[key] !== "function") {
          str += `${key} : ${this[key]} \n`;
        }
      }
      return str;
    };

    // 객체에 속성을 제거
    delete ani.age;

    console.log("《 ani 》", ani);
    console.log("《 ani.ImGround() 》 \n", ani.ImGround());
    // 객체에 해당 속성이 정의되어 있으면 true, 없으면 false
    console.log('《 "character" in ani 》 ', "character" in ani);
  });
};
