const valid = () => {
  const select = document.querySelector(".calc-type");
  const calcInputs = document.querySelectorAll(".calc-block>input[type=text]");

  calcInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/g, "");
    });
  });

  const validInput = function () {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      if (input.type === "text") {
        input.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/[^а-яА-Я-\s]+/g, "");
        });
      } else if (input.type === "tel") {
        input.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/[^0-9()-]+/g, "");
        });
      } else if (input.type === "email") {
        input.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/[^a-zA-Z0-9-@_.!~*']+/g, "");
        });
      }
    });
  };

  validInput();
};

export default valid;
