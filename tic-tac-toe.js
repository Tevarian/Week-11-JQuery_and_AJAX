const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-dismissible alert-primary" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

let turn = 1;

$("button").on("click", function () {
  if (turn == 1) {
    $("#turn").text("O's turn");
    $(this).addClass("symbol x");
    const alertTrigger = check("x");
    if (alertTrigger) {
        appendAlert("X wins!!!", "success");
        $("#turn").text("GAME OVER");
    }
    turn = 2;
  } else {
    $("#turn").text("X's turn");
    $(this).addClass("symbol o");
    const alertTrigger = check("o");
    if (alertTrigger) {
        appendAlert("O wins!!!", "success");
        $("#turn").text("GAME OVER");
    }
    turn = 1;
  }
});

function check(symbol) {
  if (
    $(".box1").hasClass(symbol) &&
    $(".box2").hasClass(symbol) &&
    $(".box3").hasClass(symbol)
  ) {
    $(".box1").css("background-color", "green");
    $(".box2").css("background-color", "green");
    $(".box3").css("background-color", "green");
    return true;
  } else if (
    $(".box4").hasClass(symbol) &&
    $(".box5").hasClass(symbol) &&
    $(".box6").hasClass(symbol)
  ) {
    $(".box4").css("background-color", "green");
    $(".box5").css("background-color", "green");
    $(".box6").css("background-color", "green");
    return true;
  } else if (
    $(".box7").hasClass(symbol) &&
    $(".box8").hasClass(symbol) &&
    $(".box9").hasClass(symbol)
  ) {
    $(".box7").css("background-color", "green");
    $(".box8").css("background-color", "green");
    $(".box9").css("background-color", "green");
    return true;
  } else if (
    $(".box1").hasClass(symbol) &&
    $(".box4").hasClass(symbol) &&
    $(".box7").hasClass(symbol)
  ) {
    $(".box1").css("background-color", "green");
    $(".box4").css("background-color", "green");
    $(".box7").css("background-color", "green");
    return true;
  } else if (
    $(".box2").hasClass(symbol) &&
    $(".box5").hasClass(symbol) &&
    $(".box8").hasClass(symbol)
  ) {
    $(".box2").css("background-color", "green");
    $(".box5").css("background-color", "green");
    $(".box8").css("background-color", "green");
    return true;
  } else if (
    $(".box3").hasClass(symbol) &&
    $(".box6").hasClass(symbol) &&
    $(".box9").hasClass(symbol)
  ) {
    $(".box3").css("background-color", "green");
    $(".box6").css("background-color", "green");
    $(".box9").css("background-color", "green");
    return true;
  } else if (
    $(".box1").hasClass(symbol) &&
    $(".box5").hasClass(symbol) &&
    $(".box9").hasClass(symbol)
  ) {
    $(".box1").css("background-color", "green");
    $(".box5").css("background-color", "green");
    $(".box9").css("background-color", "green");
    return true;
  } else if (
    $(".box3").hasClass(symbol) &&
    $(".box5").hasClass(symbol) &&
    $(".box7").hasClass(symbol)
  ) {
    $(".box3").css("background-color", "green");
    $(".box5").css("background-color", "green");
    $(".box7").css("background-color", "green");
    return true;
  } else {
    return false;
  }
}

function resetGame()
{
   turn=1;
   $("#turn").text("X's turn");
   $(".box").removeClass("symbol x");
   $(".box").removeClass("symbol o");
   $(".box").css("background-color", "dimgrey");
}