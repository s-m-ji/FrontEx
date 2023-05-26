window.onload = () => {
  let body = document.querySelector("body");
  //   let Ps = document.querySelectorAll("p");
  let p = document.querySelector("p");
  let newP = document.createElement("p");

  btn1.addEventListener("click", () => {
    let java = document.createTextNode("Java");
    newP = document.createElement("p");
    newP.appendChild(java);
    body.insertBefore(newP, p);
  });

  btn2.addEventListener("click", () => {
    let newP2 = document.createElement("p");
    let Oracle = document.createTextNode("Oracle");
    newP2.appendChild(Oracle);
    if (!document.contains(newP)) {
      alert("Java를 먼저 클릭해주세요.");
    } else {
      body.insertBefore(newP2, newP);
    }
    // body.insertBefore(newP2, p);
    // body.insertBefore(newP2, Ps[0]);
  });

  btn3.addEventListener("click", () => {
    let newP3 = document.createElement("p");
    let JSP = document.createTextNode("JSP/Servlet");
    newP3.appendChild(JSP);
    body.appendChild(newP3);
  });

  btn4.addEventListener("click", () => {
    let newP4 = document.createElement("p");
    let SPRING = document.createTextNode("SPRING");
    newP4.appendChild(SPRING);
    body.appendChild(newP4);
  });

  //   ------------------------------------------------------------------------------------------------

  let list = document.querySelectorAll("#items li");
  let li = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  let li4 = document.createElement("li");
  txtN1 = document.createTextNode("Java");
  txtN2 = document.createTextNode("Oracle");
  txtN3 = document.createTextNode("JSP/Servlet");
  txtN4 = document.createTextNode("SPRING");
  li.appendChild(txtN1);
  li2.appendChild(txtN2);
  li3.appendChild(txtN3);
  li4.appendChild(txtN4);
  items.insertBefore(li, list[0]);
  items.insertBefore(li2, list[0]);
  items.appendChild(li3);
  items.appendChild(li4);
};
