console.log("Hello world");
window.onload = function () {
  let btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", function () {
    // console.log("btn1.addEventListener");
    /* 선언적 함수
        - 선언: function 함수이름(매개변수, ...){ }
        - 호출: 함수명()
    */
    test();
  });

  let btn2 = document.getElementById("btn2");
  btn2.addEventListener("click", function () {
    console.log("2) 익명 함수 btn2.addEventListener 호출");
  });

  let btn3 = document.getElementById("btn3");
  btn3.addEventListener("click", () => {
    argTest("안녕안녕?");
    argTest(); // 초기값이 출력됨
    argTest("안녕안녕?", "안녕????"); // 첫번째 매개변수만 출력됨
  });

  // arguments
  let btn4 = document.getElementById("btn4");
  btn4.addEventListener("click", () => {
    let res = sum_arg(11, 22, 33);
    console.log("sum_arg 합계 :", res);
  });

  let btn5 = document.getElementById("btn5");
  btn5.addEventListener("click", function () {
    let number = random();
    console.log(`nubmer : ${number}`);
  });

  let btn6 = document.getElementById("btn6");
  btn6.addEventListener("click", () => {
    /*
    let func = funcTest();
    func();
    */
    funcTest()(); // 위의 2줄을 이렇게 1줄로 요약하여 쓸 수도 있다.
  });

  //   let btn7 = document.getElementById("btn7");
  //   btn7.addEventListener("click", () => {
  //     let calc = document.getElementById("calc").value;
  //     console.log(typeof calc);
  //     alert(eval(calc));
  //     let calc2 = document.getElementById("calc");
  //     console.log(typeof calc2.value);
  //     alert(eval(calc2.value));
  //   });

  btn7.addEventListener("click", () => {
    console.log("input : ", calc.value);
    let res = eval(calc.value);
    console.log("res : ", res);
  });

  btn8.addEventListener("click", () => {
    let num0 = 10 / 0;
    let num1 = -10 / 0;
    let num2 = -10 / "a";
    // let p = document.getElementById("p3");
    p.innerHTML = `10 / 0 : ${num0}<br>`;
    p.innerHTML += `-10 / 0 : ${num1}<br>`;
    p.innerHTML += `10 / 'a' : ${num2}<br>`;
    p.innerHTML += `num0 == Infinity' : ${num0 == Infinity}<br>`;
    p.innerHTML += `num1 == -Infinity' : ${num1 == -Infinity}<br>`;
    p.innerHTML += `num2 == NaN' : ${num2 == NaN}<br>`;
    p.innerHTML += `num2 != NaN' : ${num2 != NaN}<br>`;
    p.innerHTML += `isNaN(num2)' : ${isNaN(num2)}<br>`;
  });
};

function funcTest() {
  // 클로저
  // 내부함수가 사용하는 외부함수의 지역변수는
  // 내부함수가 소멸할 때까지 소멸되지않는 특성이다.

  let name = "네티";
  return function () {
    alert(`천사소녀 ${name}`);
  };
}

function random() {
  let number = parseInt(Math.random() * 100 + 1);
  return number;
}

// arguments : 매개변수의 갯수가 가변적인 경우 사용하는 속성
function sum_arg() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

// 매개변수가 있는 함수
function argTest(value = "없어요.없어요?아니,없어요") {
  alert(value);
}

function test() {
  console.log("1) 선언적 함수 test() 호출");
}

// 익명의 함수를 변수에 대입
let sum = function (a, b) {
  return a + b;
};

// console.log("함수 실행 결과 :", sum(10, 20));
// console.log(`함수 실행 결과 : ${sum(20, 30)}`);

// 즉시 실행 함수
(function (a, b) {
  let sum = a * b;
  //   console.log(`a: ${a}, b: ${b} | a * b = ${sum}`);
})(10, 20);

// 화살표 함수
const hi1 = function () {
  return alert("Hello World");
};

const hi2 = () => {
  return alert("=> Hello World");
};

// 명령문이 한 줄일 때는 { }, return 생략이 가능하다
const hi3 = () => alert("생략, Hello World");

// console.log("hi1(), hi2(), hi3()");
