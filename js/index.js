function timer() {
  var time;
  if (this.id == 'shortRestButton'){
    time = 45;
  }

  interval = setInterval(function (limit) {
    console.log(time);
    time -= 1;

    if (time < 0) {
      clearInterval(interval);
    }
  }, 1000);
}

timerValue = document.getElementById("timerNumber").innerHTML;

shortRestButon = document.getElementById("shortRestButton");
longRestButon = document.getElementById("longRestButton");

shortRestButon.addEventListener("click", timer);
longRestButon.addEventListener("click", timer);
