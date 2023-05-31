window.onload = function () {
  // var map;
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        doSomething(position.coords.latitude, position.coords.longitude);
      },
      (err) => console.log(err)
    );
  } else {
    alert("위치 정보 사용 불가 : 현재 위치를 알 수 없어용 ");
  }

  let btn = document.querySelector("#btnCampInfo");

  // let  키워드로 선언하면 자동완성 됨
  btn.addEventListener("click", function (e) {
    // 기본이벤트 제거
    e.preventDefault();

    let campForm = document.querySelector("#campForm");
    let formData = new FormData(campForm);

    let url = "https://apis.data.go.kr/B551011/GoCamping/locationBasedList?";
    let parms = "";
    // key/value pairs 반환
    for (let pair of formData.entries()) {
      // console.log('pair[0]', pair[0]);
      // console.log('pair[1]', pair[1]);

      parms += `${pair[0]}=${pair[1]}&`;
    }

    url += parms;
    console.log("url", url);

    // 마커 클러스터러를 생성합니다
    var clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10, // 클러스터 할 최소 지도 레벨
    });

    $.get(url, function (data) {
      // 데이터에서 좌표 값을 가지고 마커를 표시합니다
      // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
      console.log("$(data.positions)", $(data.positions));
      console.log(url);

      // 캠핑장 배열 꺼내오기
      let item = data.response.body.items.item;
      console.log(item);

      // var markers = $(data.positions).map(function (i, position) {
      // 배열을 돌면서 마커를 생성하기
      markers = $(item).map(function (i, position) {
        return new kakao.maps.Marker({
          // position: new kakao.maps.LatLng(position.lat, position.lng),
          // 공공데이터의 name과 동일하게 설정
          position: new kakao.maps.LatLng(position.mapY, position.mapX),
        });
      });

      // 클러스터러에 마커들을 추가합니다
      clusterer.addMarkers(markers);
    });

    // ES6에서
    // url요청 결과를 받아 옵니다
    fetch(url)
      // 요청결과과 성공이라면
      // 화살표함수에서 한줄인경우 return문과 {}가 생략 가능
      // res.json() : javascript object로 반환
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        // 캠핑장 리스트를 매개변수로 넣어줍니다
        printCampInfo(json.response.body.items.item);
      })
      .catch((err) => console.log(err));
  });

  function doSomething(latitude, longitude) {
    let mapX = document.querySelector("input[name=mapX]");
    let mapY = document.querySelector("input[name=mapY]");

    mapX.value = longitude;
    mapY.value = latitude;

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
        level: 10, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    map = new kakao.maps.Map(mapContainer, mapOption);

    var markerPosition = new kakao.maps.LatLng(latitude, longitude);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }

  function printCampInfo(itemArr) {
    // let itemArr = jsObj.response.body.items.item;

    let resDiv = document.querySelector("#result");

    // div 초기화
    resDiv.innerHTML = "";

    resDiv.innerHTML += "<ul>";

    let positions = [];

    for (item of itemArr) {
      resDiv.innerHTML += `
            <li>
                <h1>${item.facltNm}</h1>
                <p><img src="${item.firstImageUrl}" alt="캠핑장 이미지"></p>
                <p>${item.intro}</p>
                <p>${item.mapY}</p>
                <p>${item.mapX}</p>
            </li>
        `;

      let position = {
        title: item.facltNm,
        latlng: new kakao.maps.LatLng(item.mapY, item.mapX),
      };
      positions.push(position);
      console.log(positions);
    }

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      // var marker = new kakao.maps.Marker({
      //   map: map, // 마커를 표시할 지도
      //   position: positions[i].latlng, // 마커를 표시할 위치
      //   title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      //   image: markerImage, // 마커 이미지
      // });
    }

    resDiv.innerHTML += "</ul>";
  }
};
