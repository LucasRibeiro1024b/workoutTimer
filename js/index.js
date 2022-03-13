var bInterval = false;

function timer() {
  var iTime;
  if (this.id == "shortRestButton"){
    iTime = 45;
  }
  if (this.id == "longRestButton"){
    iTime = 180;
  }

  if (!bInterval) {
    interval = setInterval(function () {
      bInterval = true;
      timerValue.innerHTML = iTime;
      iTime -= 1;
  
      if (iTime < 0) {
        bInterval = false;
        clearInterval(interval);
      }
    }, 1000);
  }
}

var timerValue = document.getElementById("timerNumber");

var shortRestButon = document.getElementById("shortRestButton");
var longRestButon = document.getElementById("longRestButton");

shortRestButon.addEventListener("click", timer);
longRestButon.addEventListener("click", timer);
