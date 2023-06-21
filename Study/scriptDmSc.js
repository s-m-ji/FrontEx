function search() {
  var searchInput = document.getElementById("searchInput").value;

  Kakao.init("34cc89466e4f97338667a41243a60985"); // YOUR_API_KEY를 발급받은 API 키로 변경하세요.

  Kakao.API.request({
    url: "/v2/search/web",
    data: {
      query: searchInput,
    },
  })
    .then(function (response) {
      displayResults(response.documents);
    })
    .catch(function (error) {
      console.log("검색에 실패했습니다.", error);
    });
}

function displayResults(results) {
  var searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "검색 결과가 없습니다.";
    return;
  }

  for (var i = 0; i < results.length; i++) {
    var result = results[i];
    var title = result.title;
    var url = result.url;

    var resultElement = document.createElement("div");
    var titleElement = document.createElement("a");
    titleElement.href = url;
    titleElement.textContent = title;

    resultElement.appendChild(titleElement);
    searchResults.appendChild(resultElement);
  }
}
