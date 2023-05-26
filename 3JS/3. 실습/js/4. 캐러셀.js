window.onload = function () {
  // i와 pics를 전역 변수로 만들어야 함수 외부에서도 참조 가능하다.
  // const pics = [

  pics = [
    "pic-1.jpg",
    "pic-2.jpg",
    "pic-3.jpg",
    "pic-4.jpg",
    "pic-5.jpg",
    "pic-6.jpg",
  ];
  i = 0;
  container.style.backgroundImage = "url(images/" + pics[i] + ")";
  left.addEventListener("click", function () {
    i--;
    // if (i < 0) {
    //   i = pics.length - 1;
    // }
    if (i == -1) {
      i += pics.length;
      //   i = pics.length - 1;
    }
    container.style.backgroundImage = "url(images/" + pics[i] + ")";
  });
  right.addEventListener("click", function () {
    i++;
    if (i > pics.length - 1) {
      i = 0;
    }
    container.style.backgroundImage = "url(images/" + pics[i] + ")";
  });
  //   마우스 올렸다가 내릴 때 캐러셀 액션 제어하기
  container.addEventListener("mouseenter", function () {
    // stop();
  });
  container.addEventListener("mouseleave", function () {
    console.log("setInterval 재실행");
    // interval = setInterval(imgChange, 1000);
  });
};

//

// 일정 간격 반복적으로 콜백 함수를 실행
// setInterval(콜백함수, 대기시간(밀리세컨드), (콜백함수의 인자 나열));
function imgChange() {
  i++;
  if (i >= pics.length) {
    i = 0;
  }
  container.style.backgroundImage = "url(images/" + pics[i] + ")";
}
var interval = setInterval(function () {
  //   imgChange();
}, 1000);

function stop() {
  console.log("setInterval 중지");
  clearInterval(interval);
}
