// 사용자로부터 출생년도를 입력받아서 나이를 출력하는 프로그램 작성

// 전역 변수
var date = new Date(); // 내장 객체
var year = date.getFullYear();

// 함수 레벨
function getAge() {
  // 블록 레벨
  if (true) {
    // 지역 변수
    let birth_year = prompt("출생년도를 입력해줘잉");
    var age = year - birth_year;
    console.log(`당신의 나이는 ${age}세 입니당`);
    console.log(birth_year);
  }
}
// var 키워드는 함수 레벨
// console.log(`당신의 나이는 ${age}세 입니당`);

// let 키워드는 블록 레벨
// console.log(birth_year); // ERR

/*
    스코프 : 예약어에 따라 스코프가 달라짐.
    함수레벨 (var)
        함수 외부에서 참조 불가
    블록레벨 (let, const)
        블록 외부에서 참조 불가

    * 주의 
        예약어를 붙이지 않은 경우에는, 오류가 발생하지 않고 전역 변수로 생성됨.
*/
aa = "aa";

// 전역 변수 (global variable) : 함수 외부에서 변수를 선언
g_str1 = "전역변수";
var g_str2 = "var 전역변수";
let g_str3 = "let 전역변수";

console.log("---------- 전역변수 ----------");
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);

// window 객체 :
// 브라우저에서 제공하는 브라우저창에 대한 정보를 담고있는 객체
// 전역 변수 사용 시 window.변수명 또는 this.변수명으로 사용 가능

// var로 선언하면 window객체에 연결
console.log("---------- window.변수명 ----------");
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);
console.log("---------- this.변수명 ----------");
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);

// 함수명을 호출해야 실행 가능
function test() {
  console.log("==================== function test() 전역 ====================");
  console.log("---------- 전역변수 ----------");
  console.log(g_str1);
  console.log(g_str2); // 동명의 지역변수 선언하면서 호이스팅에 의해 값이 undefined로 출력됨
  console.log(g_str3);
  console.log("---------- window.변수명 ----------");
  console.log(window.g_str1);
  console.log(window.g_str2);
  console.log(window.g_str3);
  console.log("---------- this.변수명 ----------");
  console.log(this.g_str1);
  console.log(this.g_str2);
  console.log(this.g_str3);

  //   지역변수(local variable) : 함수 외부에서 접근 불가
  l_str1 = "지역변수";
  var l_str2 = "var 지역변수";
  let l_str3 = "let 지역변수";

  console.log("==================== function test() 지역 ====================");
  console.log("---------- 지역변수 ----------");
  console.log(l_str1);
  console.log(l_str2);
  console.log(l_str3);
  console.log("---------- window.변수명 ----------");
  console.log(window.l_str1);
  console.log(window.l_str2);
  console.log(window.l_str3);
  console.log("---------- this.변수명 ----------");
  console.log(this.l_str1);
  console.log(this.l_str2);
  console.log(this.l_str3);

  // 전역변수와 동일한 이름의 지역 변수 선언 시 지역변수가 우선!
  // 상단 출력이 undefined로 나오며 전역변수는 영향받지않음
  //   g_str2 = "전역변수 재선언";    // test()함수 실행하면 전역변수의 값이 변경된다.

  /*
  호이스팅
  자바스크립트 파서가 프로그램 실행 전에
  변수와 함수의 메모리 공간을 미리 할당 하는 것
  변수 선언문과 함수 선언문 유효 범위 최상단에 선언(변수는 undefined초기화)
  */
  console.log("호이스팅 g_str2", g_str2);
  //   console.log("선언되지않은 g_str222", g_str222);   // ERR 선언되지 않은 변수는 찾을 수 없음
  var g_str2 = "전역변수와 동명으로 지역변수 선언";
  console.log("g_str2", g_str2); // 지역변수에서 전역변수와 같은 이름으로 재선언

  // 블럭 레벨 스코프 테스트
  if (true) {
    b_str1 = "블럭 선언"; // 전역
    var b_str2 = "var 블럭 선언"; // 함수
    let b_str3 = "let 블럭 선언"; // 블록
    // 상수 : 선언과 동시에 초기화(변경 불가)
    const b_str4 = "contst 블럭 선언"; // 블록
  }

  console.log(b_str1);
  console.log(b_str2);
  //   블럭 내부에서 선언되었기 때문에 외부에서 접근 불가
  //   console.log(b_str3); // ERR
  //   console.log(b_str4); // ERR
}

// test();

console.log("---------- 함수 외부 지역변수 ----------");
// console.log(l_str1); // ERR
// -> 전역변수 역할을 하는 친구도 변수가 선언된 함수가 실행되고 난 후에 등록되어 접근 가능
// console.log(l_str2); // ERR
// console.log(l_str3); // ERR
console.log("---------- window.변수명 ----------");
console.log(window.l_str1);
console.log(window.l_str2);
console.log(window.l_str3);
console.log("---------- this.변수명 ----------");
console.log(this.l_str1);
console.log(this.l_str2);
console.log(this.l_str3);

// 페이지가 모두 로드되고 나면 바로 실행
window.onload = function () {
  console.log("onload 실행 - 페이지 로딩 완료");

  // var 예약어의 중복 선언
  var num = 0;
  console.log(num);
  var num = 10;
  console.log(num);

  // let, const 중복 선언
  //   let으로 선언 시 num1 선언문이 나오기 전에 사용 불가
  // let, const도 호이스팅이 되지만 TDZ에 위치
  // TDZ (Temporal dead zone) : 선언 전에 변수를 사용하는 것을 비 허용하는 개념상의 공간
  num2 = 10;
  let num2 = 0;
  //   let num2 = 10; ERR
  num2 = 10;

  // const 값 재할당 불가 (선언과 동시에 초기화)
  const num3 = 0;
  //   const num3;
  //   const num3 = 10;
  //   num3 = 10; ERR
};
