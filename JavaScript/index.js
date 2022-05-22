// ? Starting the targeting of the elements.
const billInput = document.getElementById("bill");
const customInput = document.getElementById("custom");
const peopleInput = document.getElementById("ppl");
const fiveButton = document.querySelector(".five-ratio");
const tenButton = document.querySelector(".ten-ratio");
const fifteenButton = document.querySelector(".fifteen-ratio");
const twentyFiveButton = document.querySelector(".twenty-five-ratio");
const fiftyButton = document.querySelector(".fifty-ratio");
const tipResult = document.querySelector(".tip-result");
const totalResult = document.querySelector(".total-result");
const resetButton = document.querySelector(".reset");

// ? Adding the event listener to the bill input field.
billInput.onblur = function () {
  if (billInput.value === "0") {
    zeroError(billInput);
  }
};

// ? Adding the event listener to the number of people input field.
peopleInput.onblur = function () {
  if (peopleInput.value === "0") {
    zeroError(peopleInput);
  }
};

// ? Creating the function which is responsible for showing the error text and making the outline red.
function zeroError(ele) {
  ele.style.outline = "3px solid red";
  const parent = ele.parentElement;
  parent.querySelector(".error").style.display = "block";
}
