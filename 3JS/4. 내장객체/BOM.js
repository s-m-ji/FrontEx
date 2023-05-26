window.onload = () => {
  btn1.addEventListener("click", function () {
    // window.open(); // 새 탭으로 열림

    // window 생략 가능
    // 매개변수로 넣은 url로 이동 가능
    // open("https://www.naver.com");

    // open("https://www.naver.com", "넹잉벙"); // url, 창 이름

    open("7. BOM.html", "빙옹엠", "width=500, height=500, left=250, top=250"); // url, 창 이름, 속성
  });

  // 타이머 관련 메소드
  btn2.addEventListener("click", () => {
    let timerId = 0;

    // let newWindow = open("https://www.naver.com");
    // 아예 다른 사이트로 이동하는건 안되는가봉가..?
    // -> 보안상의 이유로 다른 도메인의 창을 열고 제어하는 것은 일반적으로 불가능할 수 있음
    let newWindow = window.open();
    newWindow.alert("2초 후에 이 페이지는 닫힙니다.");

    // setTimeout(콜백함수, 시간)
    // 일정 시간 경과 후 콜백 함수를 한 번 실행
    timerId = newWindow.setTimeout(() => {
      newWindow.close();
    }, 2000);
    // 뭔가 이상하다..! 알림창이 바로 사라져버림...

    // timerId를 clearTimeout() 에 전달하면 해당 iddml 타이머를 취소할 수 있다.
    clearTimeout(timerId);
  });

  let timerId2 = 0;
  // setInterval()이 숫자 타입을 반환하기 때문에 0으로 초기값을 설정해주었음
  btnStart.addEventListener("click", () => {
    // window.set:Interval(함수, 시간)
    timerId2 = window.setInterval(() => {
      let date = new Date();
      //   area1.innerHTML += date.getTime(); // 1970년 어쩌고부터 지금까지 초가 출력됨
      area1.innerHTML = date.toTimeString();
      area1.innerHTML = `현재 시각은 ${date.getHours()} : ${date.getMinutes()} : <span id='sc'> ${date.getSeconds()} </span>입니당`;
    }, 1000);

    // sc.style.color = "#999"; // sc를 찾아오지 못함

    console.log("timerId2 : ", timerId2);
  });
  btnStop.addEventListener("click", () => {
    clearInterval(timerId2);
    console.log("timerId2 : ", timerId2);
  });

  btn3.addEventListener("click", () => {
    area2.innerHTML = "<h4> location 객체 </h4> <br>";
    for (key in location) {
      // location.key 이게 안되는 이유는 key가 문자열을 반환해서
      area2.innerHTML += `key : ${key}, value : ${location[key]}<br>`;
      console.log("key", key);
      console.log("value", location[key]);
    }
  });
};
