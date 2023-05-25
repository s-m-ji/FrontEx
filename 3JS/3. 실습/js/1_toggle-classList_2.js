// window.onload = () => {
//   view.addEventListener("click", () => {
//     detail.classList.toggle("hidden");
//   });
// };

// $(document).ready(function () {
//   $("#view").click(function () {
//     if ($("#detail").hasClass("hidden")) {
//       $("#detail").show(500);
//       $("#detail").removeClass("hidden");
//     } else if ($("#detail").hasClass("")) {
//       $("#detail").hide(500);
//       $("#detail").addClass("hidden");
//     }
//   });
// });

// ---> 위 코드 간결 버전
// $(document).ready(function () {
//     $("#view").click(function () {
//       $("#detail").toggle(500).toggleClass("hidden");
//     });
//   });

// $(document).ready(function () {
//   $("#open").click(function () {
//     $(this).toggleClass("on");
//     $("#close").toggleClass("on");
//     $("#detail").toggle(500).toggleClass("hidden");
//   });
//   $("#close").click(function () {
//     $(this).toggleClass("on");
//     $("#open").toggleClass("on");
//     $("#detail").toggle(500).toggleClass("hidden");
//   });
// });

// ---> 위 코드 간결 버전
$(document).ready(function () {
  $("#open, #close").click(function () {
    $("#open, #close").toggleClass("on");
    $("#detail").toggle(500).toggleClass("hidden");
  });
});

// TODO 버튼 비활성화 표시에서는 아예 클릭이 되지 않도록 하고싶음..
