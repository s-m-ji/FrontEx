window.onload = function () {
  // input 값
  // node 생성
  // 테이블에 추가

  var btn = document.querySelector("#container button");
  btn.addEventListener("click", function (e) {
    console.log("test");
    let username = document.querySelector("#userInput #username");
    let major = document.querySelector("#userInput #major");

    let unTxt = username.value;
    let mjTxt = major.value;
    if (unTxt.trim() !== "") {
      if (mjTxt.trim() !== "") {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.textContent = unTxt;
        td2.textContent = mjTxt;

        let newTd1 = tr.appendChild(td1);
        let newTd2 = tr.appendChild(td2);

        let tbody = document.querySelector("#attendant tbody");

        tbody.appendChild(tr);
        tbody.appendChild(newTd1);
        tbody.appendChild(newTd2);
      } else {
        alert("전공을 기입해줘잉");
      }
    } else {
      alert("이름을 기입해줘잉");
    }

    e.preventDefault();
  });
};
