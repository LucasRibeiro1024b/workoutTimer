function timer() {
  var time;
  if (this.id == "shortRestButton"){
    time = 45;
  }
  if (this.id == "longRestButton"){
    time = 180;
  }

  interval = setInterval(function () {
    timerValue.innerHTML = time;
    time -= 1;

    if (time < 0) {
      clearInterval(interval);
    }
  }, 1000);
}

timerValue = document.getElementById("timerNumber");

shortRestButon = document.getElementById("shortRestButton");
longRestButon = document.getElementById("longRestButton");

shortRestButon.addEventListener("click", timer);
longRestButon.addEventListener("click", timer);
