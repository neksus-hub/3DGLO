const timer = (deadLine) => {
  const timerDays = document.getElementById("timer-days");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = function () {
    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();

    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    if (days < 10) {
      days = "0" + days;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return {
      days,
      hours,
      minutes,
      seconds,
      timeRemaining,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      setInterval(function () {
        getTime = getTimeRemaining();
        timerDays.textContent = getTime.days;
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
      }, 1000);
    }
  };

  updateClock();
};

export default timer;
