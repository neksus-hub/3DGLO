const todayBlock = document.getElementById("today-block");

const currentTime = function () {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }

  todayObj = {
    dayOfTheWeek: today.getDay(),
    currentHour: hour,
    currentMinutes: minute,
    currentSeconds: second,
  };
};

const untilTheNewYear = function () {
  let newYear = new Date("31 december 2023").getTime();
  let dateNow = new Date().getTime();
  let timeRemaining = Math.floor((newYear - dateNow) / 1000 / 60 / 60 / 24);
  let remainder = `До Нового года осталось ${timeRemaining} дней`;

  const newYearDays = document.createElement("p");
  newYearDays.textContent = remainder;
  todayBlock.append(remainder);
};

const getCurrentTime = function () {
  let time = document.createElement("p");
  time.textContent = `Текущее время: ${todayObj.currentHour}:${todayObj.currentMinutes}:${todayObj.currentSeconds} PM`;
  todayBlock.append(time);
};

const getTimesOfDay = () => {
  let timesOfDay;
  if (todayObj.currentHour >= 17 && todayObj.currentHour <= 22) {
    timesOfDay = "Добрый вечер";
  } else if (
    todayObj.currentHour > 22 &&
    (todayObj.currentHour >= 0 || todayObj.currentHour <= 3)
  ) {
    timesOfDay = "Доброй ночи";
  } else if (todayObj.currentHour >= 4 && todayObj.currentHour <= 11) {
    timesOfDay = "Доброго утра";
  } else if (todayObj.currentHour >= 12 && todayObj.currentHour < 17) {
    timesOfDay = "Добрый день";
  }

  const timesOfDayP = document.createElement("p");
  timesOfDayP.textContent = timesOfDay;
  todayBlock.append(timesOfDayP);
};

const getDayOfTheWeek = () => {
  if (todayObj.dayOfTheWeek === 1) {
    todayObj.dayOfTheWeek = "Понедельник";
  } else if (todayObj.dayOfTheWeek === 2) {
    todayObj.dayOfTheWeek = "Вторник";
  } else if (todayObj.dayOfTheWeek === 3) {
    todayObj.dayOfTheWeek = "Среда";
  } else if (todayObj.dayOfTheWeek === 4) {
    todayObj.dayOfTheWeek = "Четверг";
  } else if (todayObj.dayOfTheWeek === 5) {
    todayObj.dayOfTheWeek = "Пятница";
  } else if (todayObj.dayOfTheWeek === 6) {
    todayObj.dayOfTheWeek = "Суббота";
  } else if (todayObj.dayOfTheWeek === 7) {
    todayObj.dayOfTheWeek = "Воскресенье";
  }

  const dayOfTheWeek = document.createElement("p");
  dayOfTheWeek.textContent = `Сегодня: ${todayObj.dayOfTheWeek}`;
  todayBlock.append(dayOfTheWeek);
};

const start = () => {
  currentTime();
  getTimesOfDay();
  getDayOfTheWeek();
  getCurrentTime();
  untilTheNewYear();
};

start();
