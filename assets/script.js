function updateTime(){
  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var rowTimeBlock = parseInt($(this).attr("id").split("-")[1])
    if(rowTimeBlock < currentHour){
      $(this).addclass("past");
    }else if (rowTimeBlock === currentHour){
      $(this).removeClass("past");
      $(this).addClass("present");
    }else{
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
};

let currentDate = moment().format("llll");
$("#currentDay").html(currentDate);
  var today = moment().format('LL');
  //display current date
  $("#currentDay").text(today);

  //will save whatever is scheduled for that day
  $(".b9").on("click", function() {
    var inputText = $(".e9").val();
    localStorage.setItem("9:00", inputText);
  });
$(".e9").val(localStorage.getItem("9:00"));

$(".b10").on("click", function() {
  var inputText = $(".e10").val();
  localStorage.setItem("10:00", inputText);
});
$(".e10").val(localStorage.getItem("10:00"));

$(".b11").on("click", function() {
  var inputText = $(".e11").val();
  localStorage.setItem("11:00", inputText);
});
$(".e11").val(localStorage.getItem("11:00"));

$(".b12").on("click", function() {
  var inputText = $(".e12").val();
  localStorage.setItem("12:00", inputText);
});
$(".e12").cal(localStorage.getItem("12:00"));

$(".b1").on("click", function() {
  var inputText = $(".e1").val();
  localStorage.setItem("1:00", inputText);
});
$(".e1").val(localStorage.getItem("1:00"));

$(".b2").on("click", function() {
  var inputText = $(".e2").val();
  localStorage.setItem("2:00", inputText);
});
$(".e2").val(localStorage.getItem("2:00"));

$(".b3").on("click", function() {
  var inputText = $(".e3").val();
  localStorage.setItem("3:00", inputText);
});
$(".b4").val(localStorage.getItem("3:00"));

$(".b4").on("click", function() {
  var inputText = $(".e4").val();
  localStorage.setItem("4:00", inputText);
});
$(".e4").val(localStorage.getItem("4:00"));

$(".b5").on("click", function() {
  var inputText = $(".e5").val();
  localStorage.setItem("5:00", inputText);
});
$(".e5").val(localStorage.getItem("5:00"));