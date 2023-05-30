window.onload = () => {
  const btn = document.querySelector("#bttn");
  const notiBox = document.querySelector("#noti-box");
  btn.addEventListener("click", function () {
    console.log("test");
    let noti = document.createElement("div");
    notiBox.appendChild(noti);
    let txt = document.createTextNode("와우");
    noti.appendChild(txt);
    noti.classList.add("noti");

    setTimeout(() => {
      noti.remove();
    }, 1500);
  });
};
