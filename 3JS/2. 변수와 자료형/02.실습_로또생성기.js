window.onload = function () {
  console.log("로딩 완료");

  let btn1 = document.getElementById("btn1");
  let lottoDiv = document.querySelector("div[id=lottoDiv]");

  btn1.onclick = function () {
    // let num = parseInt(Math.random() * 45) + 1; // 숫자를 무작위로 선택해서 변수에 담는 작업 또한 반복적으로 실행해야하기 때문에
    // let nums = [1, 2, 3, 4, 5];

    lottoDiv.innerHTML = "";
    // for (i = 0; i < nums.length; i++) { // 0~4까지 출력됨
    // for (i in nums) { // 0~4까지 출력됨
    // for (let i of nums) {
    for (i = 0; i < 5; i++) {
      console.log(`${i}번째 숫자 출력`);
      let num = parseInt(Math.random() * 45) + 1;
      console.log(num);
      //   lottoDiv.innerHTML = ""; // for문 안에 초기화를 넣으면 반복적으로 초기화되면서 결국 가장 마지막 값만 들어간 1개만 출력된다
      lottoDiv.innerHTML += `<div class="ball">${num}</div>`;
    }

    let ballColor = document.querySelectorAll("div[class=ball]");
    // for (let i in ballColor) { // TODO 여기서 계속 오류가 생겼던 이유는 ?
    for (i = 0; i < ballColor.length; i++) {
      let color = getColor();
      ballColor[i].style.backgroundColor = color;
    }

    /* 
    해당 오류는 ballColor[i]에서 undefined에 속성을 설정하려고 하기 때문에 발생합니다. 
    오류는 ballColor의 배열 요소 중에 undefined가 있기 때문입니다. 
    이는 querySelectorAll() 메서드가 반환하는 NodeList 객체에 포함된 요소 중에 
    .ball 클래스를 가지지 않는 요소가 있기 때문입니다.

    가장 간단한 해결책은 for...in 루프 대신 forEach() 메서드를 사용하는 것입니다. 
    forEach() 메서드는 NodeList의 각 요소에 대해 콜백 함수를 실행하므로 undefined를 걱정할 필요가 없습니다.
    */
  };

  function getColor() {
    console.log("색상");
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
};
