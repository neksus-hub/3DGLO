const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");
  const time = 1;
  let step = 100;

  const outNum = (num) => {
    let n = 0;

    if (num < 100) {
      step = 1;
    } else if (num > 100 && num < 1000) {
      step = 10;
    } else if (num > 1000 && num < 10000) {
      step = 100;
    } else if (num > 10000) {
      step = 1000;
    } else if (num > 100000) {
      step = 10000;
    }

    let t = Math.round(time / (num / step));

    let interval = setInterval(() => {
      n += step;
      if (n == num) {
        clearInterval(interval);
      }
      total.textContent = n;
    }, t);
  };

  const countCalc = function () {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let calcCountValue = 1;
    let calcDayValue = 1;
    let totalSec = 0;

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcCount.value > 1) {
      calcCountValue += calcCount.value / 10;
    }

    if (calcType.value && calcSquare.value) {
      totalSec =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
      console.log(totalSec);
      outNum(totalSec);
    } else {
      total.textContent = 0;
    }
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};

export default calc;
