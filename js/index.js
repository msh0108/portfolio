$(document).ready(function () {
  //no 애니메이션
  var btn = setInterval(function () {
    $(".no").animate({ bottom: "80px" }, 1200);
    $(".no").animate({ bottom: "100px" }, 1200);
  }, 1500);

  var k = 1;
  $(window).mousewheel(function () {
    // 기본 휠 기능을 제거
    return false;
  });

  //마우스 휠
  $(".contents").mousewheel(function (e, delta) {
    k = $(this).attr("data-n") - delta;
    if (k == 0) {
      k = 1;
      return false;
    }
    if (k == 6) {
      k = 5;
      return false;
    }
    var target = $(".con" + k).offset().top;
    $("body, html").stop().animate({ scrollTop: target });
    return false;
  });

  //상단메뉴
  $("#main_menu ul li a, .btn").click(function () {
    k = $(this).attr("data-n");
    target = $(".con" + k).offset().top;
    $("body, html").stop().animate({ scrollTop: target });
    return false;
  });

  //intro
  setTimeout(function () {
    $("#intro h1").animate({ left: "50%", opacity: "1" });
  }, 200);
  setTimeout(function () {
    $("#intro p").animate({ left: "50%", opacity: "1" });
  }, 500);
  setTimeout(function () {
    $(".no1").animate({ opacity: "1" });
  }, 700);

  //
  $(window).scroll(function () {
    $("#main_menu ul li a").removeClass("on"); /*공통 class제거*/
    $(".btn").removeClass("sel"); /*공통 class제거*/
    $("#bottom").css({ position: "", left: "", bottom: "", "z-index": "" });

    var con1 = $(".con1").offset().top;
    var con2 = $(".con2").offset().top;
    var con3 = $(".con3").offset().top;
    var con4 = $(".con4").offset().top;
    var con5 = $(".con5").offset().top;

    var scroll = $(window).scrollTop();

    if (scroll < con2) {
      //1페이지
      $("#main_menu ul li a:eq(0)").addClass("on");
      $(".btn1").addClass("sel");
      k = 1;
    } else if (scroll >= con2 && scroll < con3) {
      //2페이지
      $("#main_menu ul li a:eq(1)").addClass("on");
      $(".btn2").addClass("sel");
      $("#about_bg div:eq(0)").animate(
        { opacity: "1" /*, "right" : "50%"*/ },
        500
      );
      $("#about_bg > div:eq(0) h1").animate(
        { opacity: "0.8", left: "-5%" },
        800
      );
      $(".backfont").animate({ opacity: "1", right: "-5%" }, 800);

      k = 2;
    } else if (scroll >= con3 && scroll < con4) {
      //3페이지
      $("#main_menu ul li a:eq(2)").addClass("on");
      $(".btn3").addClass("sel");
      $("#project_bg div:eq(0)").animate({ opacity: "1", left: "50%" }, 500);
      $("#project_bg > div:eq(0) h1").animate(
        { opacity: "0.8", left: "5%" },
        800
      );

      $(".cir1")
        .circleProgress({
          value: 1, //그래프에 표시될 값
          fill: "#ff0000", //그래프에 채우기색
          size: 180, //그래프 크기
          thickness: 15, //그래프 두께
          startAngle: 100, //그래프시작지점
        })
      $(".cir2")
        .circleProgress({
          value: 1,
          size: 180,
          thickness: 15,
          startAngle: 100,
          fill: "#264de4",
        })

      $(".cir3")
        .circleProgress({
          value: 1,
          size: 180,
          startAngle: 100,
          fill: "yellow",
        })

      $(".cir4")
        .circleProgress({
          value: 1,
          fill: "#ff0000",
          size: 180,
          thickness: 17,
          startAngle: 100,
          fill: "#61dafb",
        })

      $(".cir5")
        .circleProgress({
          value: 1,
          size: 180,
          thickness: 15,
          startAngle: 100,
          fill: { gradient: ["#3771a2", "yellow"] },
        })

      $(".cir6")
        .circleProgress({
          value: 1,
          size: 180,
          startAngle: 100,
          fill: { gradient: ["#027396"] },
        })

      $(".cir7")
        .circleProgress({
          value: 1,
          size: 180,
          thickness: 15,
          startAngle: 100,
          fill: "#172c45",
        })

      $(".cir8")
        .circleProgress({
          value: 1,
          size: 180,
          thickness: 15,
          startAngle: 100,
          fill: { gradient: ["#659ad2", "#004482"] },
        })

      $(".cir9")
        .circleProgress({
          value: 1,
          size: 180,
          thickness: 15,
          startAngle: 100,
          fill: "Black",
        })

      $(".cir10")
        .circleProgress({
          value: 1,
          size: 180,
          thickness: 15,
          startAngle: 100,
          fill: { gradient: ["#ea7600", "#265787"] },
        })

      $(".cir11")
        .circleProgress({
          value: 1,
          size: 180,
          thickness: 15,
          startAngle: 100,
          fill: "#4fc7ec",
        })

      $(".cir12")
        .circleProgress({
          value: 1,
          size: 180,
          thickness: 15,
          startAngle: 100,
          fill: "#fd7904",

        })


      k = 3;
    } else if (scroll >= con4 && scroll < con5) {
      //4페이지
      $("#main_menu ul li a:eq(3)").addClass("on");
      $(".btn4").addClass("sel");
      $("#work_bg >  h1").animate({ opacity: "0.8", left: "20%" }, 800);
      $("#portfolio li:eq(0)").delay(100).animate({ opacity: "1" }, 500);
      k = 4;
    } else {
      //5페이지
      $("#main_menu ul li a:eq(4)").addClass("on");
      $(".btn5").addClass("sel");
      $("#contact_bg div:eq(0)").animate({ opacity: "1", top: "50%" }, 500);
      $("#bottom").css({
        position: "fixed",
        left: "0",
        bottom: "0",
        "z-index": "50",
      });
      k = 5;
    }
    return false;
  });

  // ↓ 이동
  var h = $(window).height();
  $(".no1").click(function () {
    $("html").stop().animate({ scrollTop: h }, 500);
  });
  $(".no2").click(function () {
    $("html")
      .stop()
      .animate({ scrollTop: h * 2 }, 500);
  });
  $(".no3").click(function () {
    $("html")
      .stop()
      .animate({ scrollTop: h * 3 }, 500);
  });
  $(".no4").click(function () {
    $("html")
      .stop()
      .animate({ scrollTop: h * 4 }, 500);
  });
}); //end
