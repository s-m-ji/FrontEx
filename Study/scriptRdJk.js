function getAnswer() {
  var question = document.getElementById("questionInput").value;
  var answer = generateAnswer(question);
  document.getElementById("answer").textContent = answer;
}

function generateAnswer(question) {
  var lowerQuestion = question.toLowerCase();
  var answer;

  if (lowerQuestion.includes("안녕")) {
    answer = "안녕하세요!";
  } else if (lowerQuestion.includes("잘 지내")) {
    answer = "네, 잘 지내고 있어요. 당신은요?";
  } else if (lowerQuestion.includes("날씨")) {
    answer = "오늘은 맑은 날씨입니다.";
  } else if (lowerQuestion.includes("사랑")) {
    answer = "사랑은 멋진 것입니다.";
  } else if (lowerQuestion.includes("chuck norris")) {
    // Chuck Norris API 호출
    fetch("https://api.chucknorris.io/jokes/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        answer = data.value;
        document.getElementById("answer").textContent = answer;
      })
      .catch(function (error) {
        answer = "죄송해요, Chuck Norris 사실을 가져오지 못했어요.";
        document.getElementById("answer").textContent = answer;
      });
  } else {
    answer = "죄송해요, 제가 그 질문에 대해 알려드릴 답변이 없네요.";
  }

  return answer;
}
