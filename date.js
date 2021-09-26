//module.exports.getDate <-exports.function/ exports. short
exports.getDate = function () {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
