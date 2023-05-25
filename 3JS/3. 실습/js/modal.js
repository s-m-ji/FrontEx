// document.getElementById("open").addEventListener("click", function () {
//   document.getElementById("modal-box").style.display = "flex";
// });

// document.getElementById("close").addEventListener("click", function () {
//   document.getElementById("modal-box").style.display = "none";
// });

// document.getElementById("open").addEventListener("click", function () {
//   document.getElementById("modal-box").classList.toggle("on");
// });

// document.getElementById("close").addEventListener("click", function () {
//   document.getElementById("modal-box").classList.toggle("on");
// });

window.onload = () => {
  // 아이디명에 특수문자가 들어가있어서 바로 호출 불가
  mBox = document.getElementById("modal-box");
  // window의 내장 객체여서 바로 호출 불가
  open = document.getElementById("open");
  // window의 내장 객체여서 바로 호출 불가
  close = document.getElementById("close");

  body = document.getElementsByTagName("body")[0];

  open.onclick = () => {
    mBox.classList.toggle("on");
    stop();
  };
  close.onclick = () => {
    mBox.classList.toggle("on");
    console.log("무지개");
    interval = setInterval(rainbow);
  };

  deg = 0;
  function rainbow() {
    deg += 0.25;
    body.style.background = `url(images/pf2.png),
    linear-gradient(
      ${deg}deg,
      rgba(255, 0, 0, 0.65),
      rgba(255, 166, 0, 0.65),
      rgba(255, 255, 0, 0.65),
      rgba(0, 128, 0, 0.65),
      rgba(0, 0, 255, 0.65),
      rgba(76, 0, 130, 0.65),
      rgba(128, 0, 128, 0.65)`;
  }
  var interval = setInterval(function () {
    rainbow();
  });

  function stop() {
    clearInterval(interval);
  }

  // 내부 함수는 외부에서 호출 불가
  function test() {
    console.log("test");
  }
  test();
};
// test();
