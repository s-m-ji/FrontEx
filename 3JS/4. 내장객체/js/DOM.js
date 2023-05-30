window.onload = () => {
  // 텍스트 노드가 있는 요소 노드 생성
  btn1.addEventListener("click", () => {
    // 엘리먼트 노드 생성
    let elementNode = document.createElement("h3");
    // 텍스트 노드 생성
    let textNode = document.createTextNode("앙뇽");
    // 연결(자식 요소로 등록) : 부모 요소의 맨 마지막 요소로 추가가 됨
    elementNode.appendChild(textNode);
    area1.appendChild(elementNode);

    let emNode2 = document.createElement("ul");
    let emNode2_1 = document.createElement("li");
    let txtNode2 = document.createTextNode("리스트");
    emNode2.appendChild(emNode2_1);
    emNode2_1.appendChild(txtNode2);
    area1.appendChild(emNode2);
    // area1.appendChild(
    //   emNode2.appendChild(emNode2_1.appendChild(txtNode2))
    // ); // 이렇게 적을 경우 textNoed2 "리스트" 하나만 가지고 온다

    area1.innerHTML += `[innerHTML] <br>`;
    // area1.innerText += "[innerText]";
    area1.innerHTML += "[innerText]";
  });

  // 텍스트 노드가 없는 요소 노드 생성
  // 요소의 속성을 설정하는 방법
  btn2.addEventListener("click", function () {
    // img 요소 노드 생성
    let imgNode = document.createElement("img");
    // 속성 설정 방법

    imgNode.src = "images/morning.jpg";
    imgNode.setAttribute("width", "150px");
    imgNode.setAttribute("height", "100px");

    area2.appendChild(imgNode);

    area2.innerHTML += `<img src="images/morning.jpg" alt="" width='200px' height='150px'>`;
  });

  remove.addEventListener("click", function (e) {
    // let areaImg = document.querySelector("#area2 img");
    // areaImg.remove();

    // area2.removeChild(e);

    let target = e.target;
    console.log(target);

    // 상위 요소를 반환
    console.log(target.parentNode);

    let delNode = document.getElementById("area3");
    // 상위요소의 자식노드를 삭제
    target.parentNode.removeChild(delNode);
  });

  btn4.addEventListener("click", () => {
    let pNode = document.createElement("p");
    let txtNode = document.createTextNode("학원 사이에 피어난 장미");
    pNode.appendChild(txtNode);
    console.log(pNode);

    let body = document.querySelector("body");
    let h1 = document.querySelector("h1");

    // insertBefore(추가할 요소, 추가할 위치의 요소)
    body.insertBefore(pNode, h1);

    body.appendChild(pNode); // 이렇게 덮어쓰기하면 h1이 아니라 body 뒤에 생긴다
  });
};
