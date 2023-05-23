window.onload = function () {
  let btn1 = document.getElementById("btn1");
  let area1 = document.getElementById("area1");

  //   btn1.onclick = function () {
  //     // alert("헤이");
  //     area1.innerHTML += "헤이";
  //   };

  let fontSize = 1; // 초기 글자 크기

  btn1.addEventListener("click", function () {
    // area1.innerHTML += "와우";

    fontSize += 0.5; // 글자 크기를 2씩 증가
    area1.style.fontSize = fontSize + "em"; // 글자 크기를 적용

    let array1 = new Array(); // [] 빈 배열 하나 생성 ~
    let array2 = new Array(5); // [empty * 3] 5칸짜리 빈 배열 하나 생성 ~
    let array3 = new Array("새", "롭", "게", "떠", "오", "른"); // 직접 값을 입력 ~
    let array4 = ["외", "로", "움", "을", "봐", "요"]; // 직접 값을 입력 ~
    let array5 = [
      "새소년", // String
      10, // Number
      true, // Boolean
      ["여", "름", "깃"], // 배열
      function () {
        // 함수
        return 1;
      },
      {}, // 객체
    ];

    console.log("array1 : ", array1);
    console.log("array2 : ", array2);
    console.log("array3 : ", array3);
    console.log("array4 : ", array4);
    console.log("array4 : ", array5);

    // 2. 배열에 값을 추가하기
    array1[0] = "귤";
    array1[1] = "꿀";
    array1[2] = "뀰";
    console.log("---------- 수정된 array1 ---------- ", array1);

    area1.innerHTML =
      `array1(빈 배열)에 값 대입 : [${array1}]<br>` +
      `array1.length : ${array1.length} <br>`;

    // 배열의 길이를 3으로 정했으나 값을 대입하면서 자동으로 늘어남
    array2[0] = "a";
    array2[1] = "p";
    array2[2] = "p";
    array2[3] = "l";
    array2[4] = "e";

    area1.innerHTML +=
      `array2(빈 배열)에 값 대입 : [${array2}]<br>` +
      `array2.length : ${array2.length} <br>`;
  });

  // 배열의 메소드
  // indexOf()
  let btn2 = document.querySelector("#btn2");
  let area2 = document.querySelector("#area2");

  btn2.addEventListener("click", function () {
    // area2.innerHTML = "우와";

    let array = ["일", "식", "조", "식"];
    // let searchValue = "식";
    let searchValue = prompt(
      '"일, 식, 조, 식"에서 인덱스 번호를 알고싶은 글자를 쓰세용'
    );

    if (!array.includes(searchValue)) {
      alert("일.식.조.식 외 값은 쓸 수 없어용");
    }

    let indices = [];

    array.forEach((element, index) => {
      if (element === searchValue) {
        indices.push(index);
      }
    });

    area2.innerHTML =
      `array : [${array}] <br>` +
      `첫번째 '식' index : ${array.indexOf("식")}<br>` +
      `두번째 '식' index : ${array.indexOf("식")}<br>` +
      `'${searchValue}'의 인덱스들 : [${indices.join(", ")}]`;
  });

  // concat()
  let btn3 = document.querySelector("#btn3");
  let area3 = document.querySelector("#area3");

  btn3.addEventListener("click", function () {
    let array = ["실", "리"];
    let array2 = ["카", "겔"];
    area3.innerHTML =
      `array + array2 : ${array.concat(array2)}<br>` +
      `array2 + array : ${array2.concat(array)}<br>` +
      `array + array : ${array.concat(array)}<br>` +
      `array : [${array}]<br> ※ concat은 원본 배열에 영향을 미치지 않습니다.`;
  });

  // join()
  // 매개값으로 구분자를 입력할 수 있다.
  let btn4 = document.querySelector("#btn4");
  let area4 = document.querySelector("#area4");

  btn4.addEventListener("click", function () {
    let array = ["매직", "스트로베리", "사운드"];
    area4.innerHTML =
      `array : [${array}]<br>` +
      `array.toStirng : [${array.toString}]<br>` +
      `array.toStirng() : [${array.toString()}]<br>` +
      // join하면 문자열로 바뀜
      `array.join : ${array.join}<br>` +
      `array.join() : ${array.join(" &nbsp | &nbsp ")}<br>` +
      `typeof(array.join()) : ${typeof array.join(" &nbsp | &nbsp ")}<br>` +
      // split하면 배열으로 바뀜
      `array.join().split(' ') : ${array.join().split(" ")}<br>` +
      `typeof(array.join()).split(' ') : ${typeof array.join().split(" ")}<br>`;
  });

  // reverse()
  let btn5 = document.querySelector("#btn5");
  let area5 = document.querySelector("#area5");

  btn5.addEventListener("click", function () {
    let array = ["스", "트", "로", "베", "리"];
    // Array.of() : ES6에서 추가된 배열 생성 메소드
    let array2 = Array.of("사", "운", "드");
    area5.innerHTML =
      `array : [${array}]<br>` +
      `array.reverse() : [${array.reverse()}]<br>` +
      `array2.reverse() : [${array2.reverse()}]<br>` +
      // 원본이 영향을 받음
      `array : [${array}]<br> ※ reverse함수는 원본 배열에 영향을 줍니다.`;
  });

  // sort()
  // 매개변수가 없으면 ASC(아스키)문자 오름차순으로 정렬
  let btn6 = document.querySelector("#btn6");
  let area6 = document.querySelector("#area6");

  btn6.addEventListener("click", function () {
    let array = ["퍼", "가", "요", "~", "♡"];
    let array2 = Array.of(4, 9, 2, 5, 8, 1, 3, 7);
    let array3 = Array.of(4000, 19, 12, 51, 800, 100, 33, 77);
    area6.innerHTML =
      `array : [${array}]<br>` +
      `array.sort() : [${array.sort()}]<br>` +
      // 원본이 영향을 받음
      `array : [${array}]<br> ※ sort함수는 원본 배열에 영향을 줍니다.<br>` +
      `array2 : [${array2}]<br>` +
      `array2.sort() : [${array2.sort()}]<br>` +
      `array3 : [${array3}]<br>` +
      `array3.sort() : [${array3.sort()}]<br>`;

    // 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
    array.sort(function (left, right) {
      return left - right; // 오름차순 정렬
    });
    area6.innerHTML += `array 오름차순 정렬 : [${array}]<br>`;
    array2.sort(function (left, right) {
      return left - right; // 오름차순 정렬
    });
    area6.innerHTML += `array2 오름차순 정렬 : [${array2}]<br>`;
    array3.sort(function (left, right) {
      return left - right; // 오름차순 정렬
    });
    area6.innerHTML += `array3 오름차순 정렬 : [${array3}]<br>`;

    array.sort(function (left, right) {
      return right - left; // 내림차순 정렬
    });
    area6.innerHTML += `array 내림차순 정렬 : [${array}]<br>`;
    array2.sort(function (left, right) {
      return right - left; // 내림차순 정렬
    });
    area6.innerHTML += `array2 내림차순 정렬 : [${array2}]<br>`;
    array3.sort(function (left, right) {
      return right - left; // 내림차순 정렬
    });
    area6.innerHTML += `array3 내림차순 정렬 : [${array3}]<br>`;
  });

  // push(), pop()
  let btn7 = document.querySelector("#btn7");
  let area7 = document.querySelector("#area7");

  btn7.addEventListener("click", function () {
    let array = ["쳇바퀴를", "굴려봐요", "햄토리"];

    area7.innerHTML = `array : [${array}]<br>`;
    // 배열에 요소를 추가 후 배열의 길이를 반환
    console.log(array.push("제일", "좋아하는건"));
    area7.innerHTML += `array : [${array}]<br>`;
    console.log(array.push("까만", "해바라기씨"));
    area7.innerHTML += `array : [${array}]<br>`;
    area7.innerHTML += `array.pop() : [${array.pop()}]<br>`;
    // 배열의 마지막 요소를 반환하고 제거
    area7.innerHTML += `array : [${array}]<br>`;
    area7.innerHTML += `array.pop() : [${array.pop()}]<br>`;
    area7.innerHTML += `array : [${array}]<br>`;
  });

  // shift(), unshift()
  let btn8 = document.querySelector("#btn8");
  let area8 = document.querySelector("#area8");

  btn8.addEventListener("click", function () {
    let array = ["꼬마", "마법사", "도레미"];

    area8.innerHTML = `array : [${array}]<br>`;

    console.log(array.shift());
    area8.innerHTML += `array.shift() : [${array}]<br>`;

    console.log(array.shift());
    area8.innerHTML += `array.shift() : [${array}]<br>`;

    area8.innerHTML += `array.unshift("메이") : [${array.unshift("메이")}]<br>`;
    area8.innerHTML += `array : [${array}]<br>`;

    area8.innerHTML += `array.unshift("마조리카") : [${array.unshift(
      "마조리카"
    )}]<br>`;
    area8.innerHTML += `array : [${array}]<br>`;
  });

  //  slice(), splice()
  let btn9 = document.querySelector("#btn9");
  let area9 = document.querySelector("#area9");

  btn9.addEventListener("click", function () {
    let array = ["도", "레", "미", "파", "솔", "라", "시"];

    area9.innerHTML = `array : [${array}]<br>`;

    // 끝 인덱스는 포함하지 않음 !
    area9.innerHTML += `array.slice(2,5) : [${array.slice(2, 5)}]<br>`;
    area9.innerHTML += `array : [${array}]<br>`;
    area9.innerHTML += `array.splice(1,2) : [${array.splice(1, 2)}]<br>`;
    area9.innerHTML += `array : [${array}]<br>`;
    area9.innerHTML += `array.splice(1,0,"도도") : [${array.splice(
      1,
      0,
      "도도"
    )}]<br>`;
    area9.innerHTML += `array : [${array}]<br>`;
  });
};
