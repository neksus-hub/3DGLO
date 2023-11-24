const valid = () => {
  const calcInputs = document.querySelectorAll(".calc-block>input[type=text]");

  calcInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/g, "");
    });
  });

  const validInput = function () {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      if (input.type === "text" && !input.classList.contains("calc-item")) {
        input.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/[^а-яА-Я-\s]+/g, "");
        });
        input.onblur = function () {
          input.value = input.value.replace(/--+/g, "-");
          input.value = input.value.replace(/\s\s+/g, " ");
          input.value = input.value.replace(/^[\s-]+/, "");
          input.value = input.value.replace(/[\s-]+$/, "");
          input.value = input.value.replace(/( |^)[а-яёa-z]/g, function (x) {
            return x.toUpperCase();
          });
        };
      } else if (input.type === "tel") {
        input.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/[^0-9()-]+/g, "");
        });
        input.onblur = function () {
          input.value = input.value.replace(/--+/g, "-");
          input.value = input.value.replace(/\s\s+/g, " ");
          input.value = input.value.replace(/^[\s-]+/, "");
          input.value = input.value.replace(/[\s-]+$/, "");
        };
      } else if (input.type === "email") {
        input.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/[^a-zA-Z0-9-@_.!~*']+/g, "");
        });
        input.onblur = function () {
          input.value = input.value.replace(/--+/g, "-");
          input.value = input.value.replace(/\s\s+/g, " ");
          input.value = input.value.replace(/^[\s-]+/, "");
          input.value = input.value.replace(/[\s-]+$/, "");
        };
      }
    });
  };

  validInput();
};

export default valid;
