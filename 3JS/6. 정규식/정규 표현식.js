window.addEventListener("load", function () {
  btn1.addEventListener("click", function () {
    // 리터럴을 이용한 정규 표현식 객체 생성

    // 패턴 양쪽에 /를 입력(시작기호, 종료기호)
    let regExp2 = /script/;

    // 생성자 함수를 이용한 정규 표현식
    // 생성자의 매개값으로 패턴문자열을 지정
    let regExp1 = new RegExp("script");

    // 비교할 문자열도 지정
    let str1 = "javascript jqueryscript ajax";
    let str2 = "java jquery ajax";

    console.log(regExp1, typeof regExp1, regExp1 instanceof RegExp);
    console.log(regExp2, typeof regExp2, regExp2 instanceof RegExp);

    /*
    RegExp 객체에서 제공하는 메서드

    - 객체.test(문자열)
    문자열에 정규식 패턴을 만족하는 값이 있으면 true, 아니면 false를 리턴한다

    - 객체.exec(문자열)
    문자열에 정규식 패턴을 만족하는 값이 있으면 처음 매치된 문자열, 아니면 null을 리턴한다
    */

    console.log("regExp1 : ", regExp1);
    console.log("str1 : ", str1);
    console.log("str2 : ", str2);

    area.innerHTML = "<h4> 정규 표현식 객체 생성 </h4>";
    // regExp1 new 생성자 함수 (new RegExp('패턴'))
    // regExp2 리터럴을 이용한 정규 표현식 (/패턴/)

    area.innerHTML += `regExp1.test(str1) : <b>${regExp1.test(str1)}</b> <br>`;
    area.innerHTML += `regExp1.test(str2) : <b>${regExp1.test(str2)}</b> <br>`;
    area.innerHTML += `regExp1.exec(str1) : <b>${regExp1.exec(str1)}</b> <br>`;
    area.innerHTML += `regExp1.exec(str2) : <b>${regExp1.exec(str2)}</b> <br>`;

    /*
  String 객체에서 정규 표현식 객체를 이용하는 메소드
  
  - 문자열.match(정규식)
  문자열에서 정규식 패턴의 값과 일치하는 값을 리턴한다.
  
  - 문자열.replce(정규식)
    문자열에서 정규식 패턴의 값과 일치하는 부분을 바꿀 값으로 변경한다.
    
    - 문자열.search(정규식)
    문자열에서 정규식 패턴의 값과 일치하는 부분의 시작 인덱스를 리턴한다.
    
    - 문자열.split(정규식)
    문자열에서 정규식 패턴의 값과 일치하는 값을 구분자로 해서 배열 생성하여 리턴한다.
  */

    area.innerHTML += `<hr>`;
    area.innerHTML += `str1.match(regExp1) : <b>${str1.match(
      regExp1
    )}</b> <br>`;
    area.innerHTML += `str1.replace(regExp1, "스크립트") : <br><b>${str1.replace(
      regExp1,
      "스크립트"
    )}</b> <br>`;
    area.innerHTML += `str1.search(regExp1) :  <b>${str1.search(
      regExp1
    )}</b> <br>`;
    area.innerHTML += `str1.split(regExp1) :  <b>${str1.split(
      regExp1
    )}</b> <br>`;
  });

  // 플래그 사용
  btn2.addEventListener("click", function () {
    let str1 = "JavaScript &nbsp; jQuery &nbsp; Ajax";

    area2.innerHTML = "<h4>플래그 문자</h4>";
    // replace() 메소드에서 '$&'는 패턴을 만족하는 문자열을 가리킴
    area2.innerHTML += `/a/ : <b>${str1.replace(/a/, "($&)")}</b> <br>`;
    // $& : 해당문자열을 그대로 사용하겠다는..!
    area2.innerHTML += `/a/i : <b>${str1.replace(/a/i, "($&)")}</b> <br>`;
    area2.innerHTML += `/a/g : <b>${str1.replace(/a/g, "($&)")}</b> <br>`;
    area2.innerHTML += `/a/gi : <b>${str1.replace(/a/gi, "($&)")}</b> <br>`;
    area2.innerHTML += `/a/m : <b>${str1.replace(/a/m, "($&)")}</b> <br>`; // TODO m 확인
  });

  btn3.addEventListener("click", function () {
    let str = "a aa aaa aaaa";

    area3.innerHTML = "<h4>메타 문자</h4>";
    area3.innerHTML += `${str} <br>`;

    /*
     반복 검색 
     {n, m}
        앞선 패턴이 최소 n번, 최소 m번 반복되는 문자열을 의미
     +
        앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미
     ?
        앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미
    */
    area3.innerHTML += `/a{1,2}/g : <b>${str.replace(
      /a{1,2}/g,
      "($&)"
    )}</b> <br>`;
    // 3개씩
    area3.innerHTML += `/a{3}/g : <b>${str.replace(/a{3}/g, "($&)")}</b> <br>`;
    // 2개 이상
    area3.innerHTML += `/a{2,}/g : <b>${str.replace(
      /a{2,}/g,
      "($&)"
    )}</b> <br>`;
    // 1개 이상
    area3.innerHTML += `/a+/g : <b>${str.replace(/a+/g, "($&)")}</b> <br>`;
    // 0개 또는 1개
    area3.innerHTML += `/a?/g : <b>${str.replace(/a?/g, "($&)")}</b> <br>`;

    let str2 = "Javascript\nJquery\nSheelscript\nAjax";
    /* 문자열의 앞,뒤 구분
    ^는 문자열의 시작, $는 마지막을 의미 */

    area3.innerHTML += `/^j/gi : <b>${str2.replace(/^j/gi, "($&)")}</b> <br>`;
    area3.innerHTML += `/^j/gim : <b>${str2.replace(/^j/gim, "($&)")}</b> <br>`;
    area3.innerHTML += `/$ipt/gim : <b>${str2.replace(
      /ipt$/gim,
      "($&)"
    )}</b> <br>`;

    /* OR 검색
        [...] 내 문자들 중 하나라도 존재할 경우를 의미
        [a-z] [A-Z] [0-9]
        [a-zA-Z0-9] : []안에서 -는 범위 지정을 의미
        [a-zA-Z0-9 - ] 공백문자도 사용 가능
        [^a] : []안에서 ^는 부정을 의미함 
    */
    let str3 = "123 JavaScript jQuery Ajax";
    area3.innerHTML += `/[aj]/gi : <b>${str3.replace(
      /[aj]/gi,
      "($&)"
    )}</b> <br>`; // a 또는 j
    area3.innerHTML += `/[^ajr]/gi : <b>${str3.replace(
      /[^ajr]/gi,
      "($&)"
    )}</b> <br>`;
    area3.innerHTML += `/[a-z]/g : <b>${str3.replace(
      /[a-z]/g,
      "($&)"
    )}</b> <br>`;
    area3.innerHTML += `/[0-9]/g : <b>${str3.replace(
      /[0-9]/g,
      "($&)"
    )}</b> <br>`;

    /*
    임의의 문자열 검색
    . : 임의의 문자 한 개를 의미
    */
    area3.innerHTML += `<hr><h4>임의의 문자열 검색</h4>`;
    area3.innerHTML += `/...../g : <b>${str3.replace(
      /...../g,
      "($&)"
    )}</b> <br>`; // 어떤 문자든 5개(.....)를 선택

    /*
    \d : 숫자를 의미 ( = [0-9] ) 
    \D : 숫자가 아닌 문자를 의미 ( = [^0-9] ) 
    \w : 알파벳, 숫자, 언더스코어(_)를 의미 ( = [a-zA_Z0-9] ) 
    \W : 알파벳, 숫자, 언더스코어(_)가 아닌 문자를 의미 ( = [^a-zA_Z0-9] ) 
    \s : 공백문자를 의미 (띄어쓰기, 탭, 줄바꿈) ( = [\n\t] ) 
    \S : 공백문자가 아닌 문자를 의미 ( = [^\n\t] ) 
     */
  });
});
