window.onload = function () {
  // getElementsBy : 노드리스트(배열)이 반환되므로 몇번째 요소인지 선택해야함
  // let body = document.getElementsByTagName("body")[0];
  let body = document.querySelector("body");
  body.addEventListener("keydown", function (e) {
    console.log("e.code", e.code);
    console.log("e.key", e.key);
    console.log("e.keyCode", e.keyCode);
    result.innerHTML += `${e.code} ${e.key} ${e.keyCode} &nbsp`;
  });
};
