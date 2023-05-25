// window.onload = () => {
//   btn1.onclick = () => {
//     console.log("고전 이벤트 모델", this);
// -> 이렇게 화살표 함수를 쓰면 여기서 this는 window가 찍힌다 !
//   };
// };

window.onload = function () {
  // 고전 이벤트 모델

  // 이벤트가 발생한 요소는 내부적으로 이벤트 발생 정보를 담고 있는 객체를 매개변수로 전달한다

  // 이벤트의 발생 정보를 확인하고 싶다면 매개변수를 입력
  //   btn1.onclick = function(event) {
  btn1.onclick = function (e) {
    console.log("고전 이벤트 모델", this);
    console.log("이벤트", e);
    // console.log(e);
    console.log("e.target ", e.target); // 이벤트가 발생한 대상
    console.log("e.button ", e.button); // 마우스 키값 반환
    console.log("e.clientX ", e.clientX); // 이벤트가 발생한 가로 위치
    console.log("e.clientY ", e.clientY); // 이벤트가 발생한 세로 위치
    console.log("e.ctrlKey ", e.ctrlKey); // ctrl 키가 눌렸는지
    console.log("e.shiftKey ", e.shiftKey); // shift 키가 눌렸는지
    // 이전 이벤트와 현재 이벤트가 발생한 시간의 차이를 밀리세컨드로 변환
    console.log("e.timeStamp ", e.timeStamp);
    console.log("e.code ", e.code); // 키보드 키코드 값
    console.log("e.key ", e.key); // 키보드
  };

  // 고전 방식으롤 이벤트를 적용할 경우 속성에 값을 주는 것이기 때문에
  // 중복 적용 불가능 : 나중에 쓴 코드가 덮어쓰기됨
  btn1.onclick = (e) => {
    // 화살표 함수에서는 this가 없어서 상위 요소의 this를 찾아서 반환해줌
    console.log("this : ", this); // window를 가리키게됨
    console.log("e.this : ", e.this); //
    console.log("e.target : ", e.target); //
    console.log("e : ", e); //
  };

  btn3.addEventListener("click", clickEventHandler);
  // btn3.addEventListener("click", clickEventHandler()); // 이렇게 ()까지 쓰면 매개변수로 기능하면서 함수가 바로 실행된다
  btn3.addEventListener("mouseenter", function () {
    // this.style.background = "#000";
    // this.style.color = "#fff";
    this.style.padding = "50px 150px";
    this.style.borderRadius = "150px";
    this.style.background =
      "radial-gradient(red, white, orange, white, yellow, white, green, white, blue, white, indigo, white, purple)";
  });
  btn3.addEventListener("mouseleave", (e) => {
    e.target.style.background = "#fff";
    e.target.style.color = "#000";
    e.target.style.padding = "5px 15px";
  });
};
function clickEventHandler() {
  console.log("표준 이벤트 모델");
}

// 2. 이벤트가 발생한 요소 객체에 접근하는 방법
// 1) 고전 이벤트 방식
window.onload = function () {
  btn4.onclick = function (e) {
    console.log("this", this);
    console.log("e.target", e.target);
    console.log("window.event.target", window.event.target);
  };

  submit.addEventListener("click", function (e) {
    // 정규식
    // 특정 규칙을 가진 문자열을 검색하거나 치환할 때 사용하는 형식 언어
    //  /패턴/으로 선언
    //  /정규식패턴/.test('문자열')
    // 문자열 정규식 패턴을 만족하는 값이 있으면 true 없으면 false를 리턴

    // ^ : 시작
    // [] : [...]내의 문자들 중 하나라도 존재
    // {m,n}은 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미
    // $ : 끝
    let regExp = /^[a-zA-Z0-9]{5,12}$/;
    let userId = document.getElementById("userId").value;

    // 패턴을 만족하지 않으면
    if (!regExp.test(userId)) {
      alert("영문,숫자로만 총 5~12자 사이로 입력해주세요.");

      // 표준 이벤트 방식에서는(이벤트 객체가 있는 경우)
      // 이벤트 객체의 preventDefault()함수를 이용하여 기본이벤트를 제거할 수 있다.
      e.preventDefault();
    }
  });

  // 2) 표준 이벤트 모델
  btn5.addEventListener("click", function (e) {
    console.log("this : ", this); // button 태그
    console.log("e.this : ", e.this); // undefined
    console.log("e.target : ", e.target); // button 태그
    console.log("e : ", e); // PointerEvent
  });

  btn5.addEventListener("click", (e) => {
    console.log("this : ", this); // window
    console.log("e.this : ", e.this); // undefined
    console.log("e.target : ", e.target); // button 태그
    console.log("e : ", e); // PointerEvent
  });
};

// 2. 인라인 방식에서 이벤트가 발생한 요소를 확인하는 방법
function test(e) {
  console.log("e", e); // undefined가 출력됨
  console.log("this", this); // window 객체가 출력됨
  console.log("window.event.target", window.event.target); // button 태그 정상 출력
  //   console.log("window.e.target", window.e.target); // 이러면 오류남 ^_^
}

function pwCheck() {
  if (pass1.value !== pass2.value) {
    alert("비밀번호가 일치하지않습니당");
    return false;
  } else {
    alert("비밀번호 입력 완료우 ~~~");
  }

  //   if (pass1.value === pass2.value) {
  //     alert("비밀번호 입력 완료우 ~~~");
  //   } else {
  //     alert("비밀번호가 일치하지않습니당");
  //     return false;
  //   }
}
