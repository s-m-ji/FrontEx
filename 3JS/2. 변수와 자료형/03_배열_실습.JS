// ======================================== 문제 1)  ========================================
console.log("load");
// var btn = document.querySelector("#text" + button);
function arrayTest1() {
  // la1 요소
  var la1 = document.getElementById("la1").innerText.split(",");
  var la2 = document.getElementById("la2").innerText.split(",");
  var la3 = document.getElementById("la3").innerText.split(",");
  var la4 = document.getElementById("la4").innerText.split(",");

  //   var array = la1.join(la2).split(",");

  //   console.log(la1);
  //   console.log(la2);
  //   console.log(la3);
  //   console.log(la4);

  let arr = la1.concat(la2, la3, la4);
  let text = document.getElementById("text").value;
  let index = arr.indexOf(text);
  if (index >= 0) {
    alert(`index : ${index}`);
  } else {
    alert("존재하지 않습니다");
  }

  document.getElementById("text").value;
}

// ======================================== 문제 2)  ========================================
function reverseTest() {
  let stringla1 = document
    .getElementById("stringla1")
    // .innerText.split(",") 이렇게 ,를 쓸 경우에는
    // <label id="stringla1">k b</label> 여기서 값을 ,로 구분한 것이 아니기 때문에 적용되지않는다.
    .innerText.split(" ")
    .reverse();
  let stringla2 = document
    .getElementById("stringla2")
    .innerText.split(" ")
    .reverse();
  let bklove = stringla1.concat(stringla2);
  let str = bklove.join(" ");
  let print = document.getElementById("print");
  print.innerHTML = str;
}

// ======================================== 문제 3)  ========================================
var array = Array.of();
// array = ""; // array.push가 정의되지 않았다고 나옴
function input() {
  //   var strInput = document.getElementById("strInput").value;
  //   array.push(strInput);
  //   strInput = " ";

  var strInput = document.getElementById("strInput");
  array.push(strInput.value);
  strInput.value = " ";

  /*
  두 코드의 차이점은 첫 번째 코드에서는 strInput 변수가 문자열 값을 담고 있지만, 
  두 번째 코드에서는 strInput 변수가 실제 입력 요소 자체를 참조한다는 점입니다. 
  이로 인해 두 코드의 동작은 약간 다를 수 있습니다. 
  예를 들어, 첫 번째 코드에서 strInput 변수에 값을 할당한 후에는 해당 값이 변수에 그대로 남아 있습니다. 
  그에 반해 두 번째 코드에서는 strInput.value를 변경하여 입력 요소의 값 자체가 바뀌게 됩니다. 
  */
}

// print
function print() {
  var print2 = document.getElementById("print2");
  //   var output = array.reverse().pop(); // 마지막에 pop을 해버리면 제일 마지막에 하나만 나온다.
  var output = array.sort().reverse();
  //   var output = array.reverse(); // 이렇게 쓰면 정렬되지 않은 상태에서 그냥 거꾸로 반환만 된다구 ~
  print2.innerHTML = "";
  print2.innerHTML += output;
}

// -------------------- 선생님이 짜신 코드 --------------------
// let array = new Array();
// function input() {
//   let strInput = document.getElementById("strInput");
//   array.push(strInput.value);
//   strInput.value = "";
// }
// function print() {
//   let print2 = document.getElementById("print2");
//   print2.innerHTML = "";
//   array.sort().reverse();
//   print2.innerHTML = array;
//   array = [];
// }

// ======================================== 문제 4)  ========================================
function arrayTest3() {
  var stringla4 = document.getElementById("stringla4").innerText.split(" ");

  var remove = document.getElementById("remove").value;
  var add = document.getElementById("add").value;

  var index = stringla4.indexOf(remove);
  var index2 = stringla4.indexOf(add);

  stringla4.splice(index, 1);
  stringla4.splice(index2, 0, add);
  //   stringla4.concat(add);

  document.getElementById("print4").innerHTML = stringla4;

  console.log(stringla4);
}
