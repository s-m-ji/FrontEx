function typeTest() {
  //   document.write("와우");
  //   alert("와우");
  console.log("와우");

  // var, let, const(상수)
  let age = 20;
  let height = 180.23;

  //   let으로 선언하는 경우 변수명을 동일하게 쓸 수 없다. (재선언 불가)
  let name = "성심이";
  let name2 = "성심이";
  let name3 = ""; // 빈 문자열도 선언할 수 있다.

  //   var bread = "크리미튀소";
  //   var bread = "크리미튀소2";

  let check = false;

  let area1 = document.querySelector("#area1");
  document.querySelector(".area").innerHTML = "<h5>!와우!</h5>";
  //   한 줄 개행되는 이유는...? ^_^ 개행이 아니라 h5의 기본 margin-top값이었음.. 머쓱

  //   area1.innerHTML = "name : " + name + "type : " + typeof name + "<br>";
  //   // template literals : '', "" 대신 ``(Backtick 백틱)을 사용하여 변수(${expression})를 함께 출력
  //   area1.innerHTML += `name : ${name}, type : ${typeof name}<br>`;
  //   area1.innerHTML += `age : ${age}, type : ${typeof age}<br>`;
  //   area1.innerHTML += `height : ${height}, type : ${typeof height}<br>`;
}

function typeTest2() {
  console.log("와우2");

  // 배열 선언
  let city = ["부산", "대구", "인천", "광주", "대전", "울산"];
  let area2 = document.getElementById("area2");
  area2.innerHTML = "객체 테스트<br>";
  area2.innerHTML += `city : ${city} type : ${typeof city}<br>`;

  // 익명의 함수 선언
  // 변수에 함수를 저장할 수도 있고, 매개변수로 함수를 넘겨줄 수도 있다.
  //   let testFunc = function (num1, num2) {

  // 매개변수의 갯수가 일치하지 않아서 undefined가 지정될 경우
  // 즉, 실제 값이 들어오지 않았을 경우 오류를 대비하여 초기값을 지정
  let testFunc = function (num1 = 0, num2 = 0) {
    console.log("num1", num1, typeof num1);
    console.log("num2", num2, typeof num2);
    return num1 + num2;
  };

  // * 매개변수를 모두 넣지 않아도 (인자 갯수가 일치하지 않아도) 함수는 실행이 된다.
  /*
  console.log("testFunc", testFunc(10, 20));
  console.log("testFunc", testFunc());
  console.log("testFunc", testFunc(50));
  */

  area2.innerHTML += `testFunc : ${testFunc}, type : ${typeof testFunc}<br>`;

  // 객체 타입
  let user = {
    /* 속성 : 값,
     속성 : 값, ...
     */
    name: "성심이",
    age: 20,
    height: 160.5,
    id: "test",
    city: ["부산", "대구", "인천", "광주", "대전", "울산"],
  };
  console.log("user", user);
  console.log("user.name", user.name);
  //   console.log("user[city]", user[city][3]);        // 오류 : Cannot read properties of undefined (reading '3')
  //   console.log("user[city]", user[city[3]]);        // undefined
  //   console.log("user[city]", user[city(3)]);        // 오류 : city is not a function
  //   console.log("user.city", user[city]);            // undefined
  console.log("user.city", user.city[3]);

  area2.innerHTML += `user : ${user}, user : ${typeof user}<br>`;
  area2.innerHTML += `null : ${null}, null : ${typeof null}<br>`;
  area2.innerHTML += `undefined : ${undefined}, undefined : ${typeof undefined}<br>`;
}

function plusTest() {
  let txt1 = prompt("연산할 문자나 숫자 입력");
  let txt2 = prompt("연산할 문자나 숫자 입력");
  document.querySelector("#area3").innerHTML = txt1 + txt2;
  return txt1 + txt2;
}

function castTest() {
  let area4 = document.querySelector("#area4");
  area4.innerHTML = `${2 + "3"}<br>`;
  area4.innerHTML += `${2 + Number("3")}<br>`;
  area4.innerHTML += `${String(2) + Number("3")}<br>`;
  var number = 2;
  area4.innerHTML += `${number.toString + Number("3")}<br>`;
  // area4.innerHTML += `${(2).toString + Number("3")}<br>`;
  area4.innerHTML += `${2 + parseInt("3.1")}<br>`;
  area4.innerHTML += `${2 + parseFloat("3.1")}<br>`;

  // 16진수를 10진수로 변환
  // ff : 255
  area4.innerHTML += `${parseInt("ff", 16)}`;
  var bg = document.getElementsByTagName("body");
  let r = parseInt(color.substr(1, 2), 16);
  let g = parseInt(color.substr(3, 2), 16);
  let b = parseInt(color.substr(5, 2), 16);
  var rgbColor = `rgb${r}+${g}+${b}`;
  bg;
}

function opTest() {
  let area5 = document.getElementById("area5");

  area5.innerHTML = '"==" 연산자 테스트<br>';
  area5.innerHTML += `&nbsp 7 == 7 : ${7 == 7}<br>`;
  area5.innerHTML += `&nbsp 7 == '7' : ${7 == "7"}<br>`;
  area5.innerHTML += `&nbsp 7 != '7' : ${7 != "7"}<br>`;
  area5.innerHTML += `&nbsp '7' != '7' : ${"7" != "7"}<br><br>`;

  area5.innerHTML += '"===" 연산자 테스트<br>';
  area5.innerHTML += `&nbsp 7 === 7 : ${7 === 7}<br>`;
  area5.innerHTML += `&nbsp 7 === '7' : ${7 === "7"}<br>`;
  area5.innerHTML += `&nbsp 7 !== '7' : ${7 !== "7"}<br>`;
  area5.innerHTML += `&nbsp '7' !== '7' : ${"7" !== "7"}<br>`;
}

function forTest() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log("============ for =============");
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  console.log("============ for in =============");
  // for(변수 in 객체){}
  //  반복문 - 객체 키와 값 가져오기
  //  반복 변수에 array의 index를 순서대로 담아서 반복시킨다.
  //   객체명.속성명, 객체명[속성명]
  for (let i in array) {
    console.log(array[i]);
  }

  let student = {
    name: "성심이",
    age: "30",
    class: "제과제빵",
  };

  for (key in student) {
    console.log(key, student[key]);
    // 객체명.속성명 -> 속성명을 알고 있을 때 사용
    // console.log(key, student.key); // ERR
    // --> 이 경우는 속성명이 key인 요소를 찾는다는 의미이므로 undefined를 반환.
  }

  console.log("============ forEach =============");
  // 배열.forEach(function(변수){})
  // 배열의 요소를 함수의 매개변수로 전달
  array.forEach(function (num) {
    console.log(num);
  });

  console.log("============ while =============");
  var i = 0;
  while (true) {
    i++;
    if (i % 2 == 0) {
      continue;
    }
    console.log(i);
    if (i > 5) {
      break;
    }
  }

  console.log("============ for of =============");
  // ES6부터 추가된 for 문
  for (let element of array) {
    console.log(element);
  }
}
