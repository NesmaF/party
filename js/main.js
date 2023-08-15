// sidebar//

$(".setting").click(function () {
  $(".sidebar").animate({ width: "250px" }, 100);
  $(".open").animate({ marginLeft: "250px" }, 100);
});

$(".close").click(function () {
  $(".sidebar").animate({ width: "0px" }, 100);
  $(".open").animate({ marginLeft: "0px" }, 100);
});

// details////////////

$("#Details .boxHeader").click(function () {
  $(this).next().slideToggle(1000);
   $(".boxBody").not($(this).next()).slideUp(1000);
});

// counter//

var countDownDate = new Date("October 25, 2023 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".min").html(`${minutes} m`);
  $(".sec").html(`${seconds} s`);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// end counter//

// textarea/////////

let maxNum = 100;
$("textarea").keyup(function () {
  let value = $(this).val().length;
  console.log(value);
  let countdown = maxNum - value;
  console.log(countdown);
  $("#letters").text(countdown);
  if (countdown < 0) {
    $("#letters").text("your character finished");
  }
});

// // scrol//
$(".sidebar a").click(function () {
  let href = $(this).attr("href");
  let sectionTop = $(href).offset().top;
  console.log(sectionTop);
  $("html , body").animate({scrollTop:sectionTop}, 2000);
});
