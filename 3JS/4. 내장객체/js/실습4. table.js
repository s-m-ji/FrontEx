window.onload = function () {
  console.log("load");
  let reg = document.querySelector("#register");
  reg.addEventListener("click", function (e) {
    e.preventDefault();

    let name = document.querySelector("#username").value;
    let major = document.querySelector("#username").value;

    let tbody = document.querySelector("#attendant > tbody");

    let newTr = document.createElement("tr");

    let newTdName = document.createElement("td");
    newTdName.innerHTML = name;

    let newTdMajor = document.createElement("td");
    newTdMajor.innerHTML = major;

    newTr.appendChild(newTdName);
    newTr.appendChild(newTdMajor);

    tbody.appendChild(newTr);
  });
};
