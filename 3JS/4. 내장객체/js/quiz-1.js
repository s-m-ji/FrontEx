window.onload = function () {
  var btn = document.querySelector("#container button");
  btn.addEventListener("click", function (e) {
    let unTxt = document.querySelector("#userInput #username").value;
    let mjTxt = document.querySelector("#userInput #major").value;

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
        // tbody.appendChild(newTd1);
        // tbody.appendChild(newTd2);
        // -> Tip : td가 들어간 tr만 tbody에 넣어주면 된다 (코드 줄일 수 있음)
      } else {
        alert("전공을 기입해줘잉");
      }
    } else {
      alert("이름을 기입해줘잉");
    }
    // form태그 안에 button이 하나면 submit 기능을 수행하기 때문에 기본이벤트를 제거해줌
    e.preventDefault();
  });
};
