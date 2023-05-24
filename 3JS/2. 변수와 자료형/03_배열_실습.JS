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

  => 1번 값을 변경하면 변수가 바뀌는 것 / 2번은 속성값이 바뀌는 것
  ==>> 속성값을 바꾸고 싶다면 변수에 담지 않고 document.getElementById("strInput").value = '' 이렇게 접근하면된다.
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
  // var stringla4 = document.getElementById("stringla4").innerText.split(" ");
  // var remove = document.getElementById("remove");
  // var add = document.getElementById("add");
  // var index = stringla4.indexOf(remove.value);
  // var index2 = stringla4.indexOf(add.value);
  // stringla4.splice(index, 1);
  // // stringla4.push(add.value);
  // stringla4.splice(1, 0, add.value); // 이렇게하면 인덱스 1번째 자리에 추가된당.
  // document.getElementById("print4").innerHTML = stringla4;
  // remove.value = "";
  // add.value = "";
  //  TODO 왜 배열의 길이가 고정되어있는걸까 ?

  // 보기에 입력된 문자열을 배열로 만들기
  let str = document.getElementById("stringla4").innerHTML;
  let arr = str.split(" ");

  // 텍스트 필드에 입력된 값을 변수에 저장
  // let remove = document.getElementById("remove").value;
  let remove = document.getElementById("remove");
  // remove.value;

  // let add = document.getElementById("add").value;
  let add = document.getElementById("add");
  // add.value;

  // 삭제할 요소의 인덱스를 확인 후 삭제
  let index = arr.indexOf(remove.value);
  if (index >= 0) {
    arr.splice(index, 1);
  }
  // 만약 indexOf()를 쓰지 않을거라면 for문으로 대체할 수 있다.
  /*
  for(i=0; i<arr.length; i++){
    if(arr[i] === remove){
      arr.splice(i,1);
      break;
    }
  }
  */

  // 추가할 요소를 배열 맨 마지막에 추가
  arr.push(add.value);
  // 배열의 마지막에 계속해서 추가할 수 없는 이유는
  // 삭제/추가하는 부분이 [보기]의 값이지 출력 창에 나타나는 배열을 수정하는 것이 아니기 때문이다.
  // 만약 출력 창에 나타난 배열에 직접 push하고 출력한다면 배열을 계속 늘릴 수 있다.

  // 출력
  document.getElementById("print4").innerHTML = arr.join(" | ");
}
