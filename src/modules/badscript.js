const firstModule = () => {
  const one = "this is first module";
  console.log(one);
};

module.exports = firstModule;

const secondModule = () => {
  const two = "this is second module";
  console.log(two);
};

module.exports = secondModule;
