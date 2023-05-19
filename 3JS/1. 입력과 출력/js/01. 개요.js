function external() {
  console.log("외부 스크립트를 실행하깅~~~");
  var sum = add(10, 20);
  console.log("sum = ", sum);
}

function add(x, y) {
  return x + y;
}
