window.onload = () => {
  // TODO 선생님 코드랑 비교해보기

  // geolocation if문 밖으로 ???

  let btn = document.getElementById("btnCampInfo");
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value 값에 세팅하기
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        doSomething(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("위치 정보 사용 불가 : 현재 위치를 알 수 없어용 ");
    }

    function doSomething(latitude, longitude) {
      let CampForm = document.querySelector("#CampForm");
      let formData = new FormData(CampForm);

      let params = "";
      let url = "https://apis.data.go.kr/B551011/GoCamping/locationBasedList?";
      // key/value pair를 반환
      for (let pair of formData.entries()) {
        console.log("pair[0] ", pair[0]);
        console.log("pair[1] ", pair[1]);
        if (pair[0] == "mapX" && pair[1] == "") {
          if (pair[0] == "mapX") {
            pair[1] = longitude;
          }
        }
        if (pair[0] == "mapY" && pair[1] == "") {
          if (pair[0] == "mapY") {
            pair[1] = latitude;
          }
        }
        params += `${pair[0]}=${pair[1]}&`;
      }

      url += params;
      console.log(url);

      // ES6에서 url 요청 결과를 받아옴(기본 get 방식)
      fetch(url)
        // 요청 결과가 성공이라면
        // 화살표 함수에서 코드가 한 줄인 경우 return과 { } 생략 가능
        // res.json() : javascript object로 변환
        .then((res) => res.json())
        // res.json() 값이 jsObj로 넘어감
        .then((jsObj) => {
          console.log("json", jsObj);
          if (jsObj.response.body.items.item == "") {
            alert("주변에 캠핑장이 없으니 radius값을 크게 수정해보세욜");
            return;
          }
          printCampInfo(jsObj.response.body.items.item);
        })
        .catch((err) => console.log("에에에ㅔ러러러러 ", err));
    }
    printCampInfo(jsObjItem);
  });

  let btn2 = document.getElementById("btnCampInfo2");
  btn2.addEventListener("click", (e) => {
    e.preventDefault();

    // 현재 나의 위치를 확인하고 mapX, mapY 요소의 value 값에 세팅하기
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        doSomething(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("위치 정보 사용 불가 : 현재 위치를 알 수 없어용 ");
    }

    function doSomething(latitude, longitude) {
      let CampForm = document.querySelector("#CampForm");
      let formData = new FormData(CampForm);

      let mapX = document.querySelector("input[name=mapX]");
      let mapY = document.querySelector("input[name=mapY]");

      longitude = mapX.value;
      latitude = mapY.value;

      let params = "";
      let url = "https://apis.data.go.kr/B551011/GoCamping/locationBasedList?";
      for (let pair of formData.entries()) {
        if (pair[0] == "mapX") {
          pair[1] = longitude;
        }
        if (pair[0] == "mapY") {
          pair[1] = latitude;
        }
        params += `${pair[0]}=${pair[1]}&`;
      }

      url += params;
      console.log(url);

      fetch(url)
        .then((res) => res.json())
        .then((jsObj) => {
          console.log("json", jsObj);
          printCampInfo(jsObj.response.body.items.item);
        })
        .catch((err) => console.log("에에에ㅔ러러러러 ", err));
    }
    printCampInfo(jsObjItem);
  });

  // 배열을 매개변수로 받아서 배열에 입력된 정보를 화면에 출력하는 함수를 생성
  function printCampInfo(jsObjItem) {
    let bodyTag = document.getElementsByTagName("body");

    // let jsObjItem = jsObj.response.body.items.item;
    for (obj of jsObjItem) {
      bodyTag[0].innerHTML += `<h2>${obj.facltNm}</h2>
          <h4>${obj.addr1}</h4> 
          <p>${obj.lineIntro}</p> 
          <img src="${obj.firstImageUrl}">`;
    }
  }
};
