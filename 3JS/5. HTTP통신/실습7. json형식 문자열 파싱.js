// 버튼이 클릭되면 json 형식 문자열을 파싱해서 화면에 출력
window.onload = () => {
  //   console.log(jsObj);
  // 참고로 [ 배열 ]로 값을 넣었을 경우에는 undefined가 출력되므로 반복문을 이용하여 값을 꺼내온다
  // jsObj가 배열 값을 가지게되면 이 console도 읽어올 수 없다. jsObj[i] 이런식으로 콘솔을 출력해야함

  // json 형식의 문자열
  let jsonStr = `
    [
        { "name" : "도레미",
         "major" : "꼬마마법사1",
         "grade" : 2 } ,

        { "name" : "메이",
        "major" : "꼬마마법사2",
        "grade" : 10 } ,

        { "name" : "마조리카",
        "major" : "꼬마마법사3",
        "grade" : 100 }
    ]
    `;

  // jsObj로 변경
  let jsObj = JSON.parse(jsonStr);
  //   register.addEventListener("click", (e) => {
  window.addEventListener("scroll", (e) => {
    // 화면에 출력
    e.preventDefault();

    // for (let i = 0; i < jsObj.length; i++) {
    // for (i in jsObj) {
    //   let name = jsObj[i].name;
    //   let major = jsObj[i].major;
    //   let grade = jsObj[i].grade;

    // 아래와 같이 for of 반복문을 사용하면 [i]번째 변수를 선언하지 않고도 배열의 요소에 바로 접근할 수 있음

    for (obj of jsObj) {
      let tbody = document.querySelector("#attendant > tbody");

      let newTr = document.createElement("tr");

      let newTdName = document.createElement("td");
      //   newTdName.innerHTML = name;
      newTdName.innerHTML = obj.name;

      let newTdMajor = document.createElement("td");
      //   newTdMajor.innerHTML = major;
      newTdMajor.innerHTML = obj.major;

      let newTdGrade = document.createElement("td");
      //   newTdGrade.innerHTML = grade;
      newTdGrade.innerHTML = obj.grade;

      newTr.appendChild(newTdName);
      newTr.appendChild(newTdMajor);
      newTr.appendChild(newTdGrade);

      tbody.appendChild(newTr);
    }
  });
};
