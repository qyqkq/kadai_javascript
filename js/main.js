var hours = 0;
var minutes = 0;
var seconds = 0;
var tens = 0;
var appendHours = document.getElementById("hours");
var appendMinutes = document.getElementById("minutes");
var appendSeconds = document.getElementById("seconds");
var appendTens = document.getElementById("tens");
var buttonStart = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonReset = document.getElementById("reset");
var interval;


function startTimer() {
  tens++;
  
  if (tens <= 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 9) {
    seconds++;
    appendSeconds.innerHTML = seconds;
    tens = 0;
    appendTens.innerHTML = "0";
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if (minutes > 59) {
    hours++;
    appendHours.innerHTML = hours;
    minutes = 0;
    appendMinutes.innerHTML = "0" + 0;
  }
}

buttonStart.onclick = function () {
  interval = setInterval(startTimer, 100);
  $("#start").addClass("grayed_out");
  $("#stop").removeClass("grayed_out");
  $("#reset").removeClass("grayed_out");
};

buttonStop.onclick = function () {
  clearInterval(interval);
  $("#start").removeClass("grayed_out");
  $("#stop").addClass("grayed_out");
  $("#reset").removeClass("grayed_out");
};

buttonReset.onclick = function () {
  clearInterval(interval);
  tens = "0";
  seconds = "0";
  minutes = "0";
  hours = "0";
  appendHours.innerHTML = hours;
  appendMinutes.innerHTML = minutes;
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
  $("#start").removeClass("grayed_out");
  $("#stop").addClass("grayed_out");
  $("#reset").addClass("grayed_out");
};



// 電卓
var result = document.getElementById("result");
    function update(){
      result.value = "";
    }
    function edit(elem) {
      result.value = result.value + elem.value;
    }
    function calc() {
      result.value = new Function("return " + result.value)();
    }
    
    
// リアルタイムフィルター
var $keyWords = $('.image_box');
$('#search').keyup(function() {
  var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
  
  $keyWords.show().filter(function() {
    var text = $(this).text().replace(/\st/g, ' ').toLowerCase();
    return !~text.indexOf(val);
  }).hide();
})



// slickのスライドショー
$(document).ready(function(){
  $('.slide').slick({
    autoplay:true,
    autoplaySpeed:4000,
    dots:true,
    pauseOnFocus:false,
    pauseOnHover:false
  });
});

