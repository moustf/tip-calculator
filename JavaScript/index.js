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
const ratiosDiv = document.querySelector(".ratios");
const tipCalculatorDiv = document.querySelector(".tip-calculator");

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

// ? Created the ratio variable at the global scoop to access it from anywhere.
let ratio = null;

// ? Get the ratios value from buttons.
ratiosDiv.addEventListener(`click`, function (e) {
  ratio = Number(e.target.value) / 100;
});

// ? Get the ratios value from custom ratio input.
customInput.addEventListener("blur", (event) => {
  ratio = Number(event.target.value) / 100;
});

// ? Created the function that is responsible for calculating the tip amount and the total per person
function tipCalc() {
  const billAmount = Number.parseFloat(billInput.value);
  const numOfPpl = Number.parseInt(peopleInput.value);
  const tipPerson = (billAmount * ratio) / numOfPpl;
  const totalPerson = billAmount / numOfPpl + tipPerson;
  totalResult.textContent = `$${Number.parseFloat(totalPerson).toFixed(2)}`;
  tipResult.textContent = `$${Number.parseFloat(tipPerson).toFixed(2)}`;
  resetButton.style.opacity = 1;
}

// ? Added the event listener to the div and called the function.
tipCalculatorDiv.addEventListener("click", (e) => {
  if (ratio > 0 && billInput.value > 0 && peopleInput.value > 0) {
    tipCalc();
  }
});

// ? Added the event listener to the reset button.
resetButton.addEventListener("click", resetAll);

// ? Creating the function that is responsible for resetting the inputs and the result paras.
function resetAll() {
  billInput.value = "";
  customInput.value = "";
  peopleInput.value = "";
  ratio = null;
  tipResult.textContent = `$0.00`;
  totalResult.textContent = `$0.00`;
  resetButton.style.opacity = 0.3;
}

// ? Targeting the elements of the animation.
const spanAnimOne = document.querySelector(".top-animation");
const spanAnimTwo = document.querySelector(".right-animation");

// ? Set the width and height variables
let widthCount = 70;
let heightCount = 50;

// ? Created the animation function.
function animate() {
  if (widthCount <= 790) {
    moveWidth();
    requestAnimationFrame(animate);
  }
  if (heightCount <= 390) {
    moveHeight();
    requestAnimationFrame(animate);
  }
}

// ? Call the animation function for the first time on the page.
animate();

// ? Created the function that is responsible for raising the width.
function moveWidth() {
  spanAnimOne.style.width = `${widthCount}px`;
  widthCount += 0.01;
}

// ? Created the function that is responsible for raising the height.
function moveHeight() {
  spanAnimTwo.style.height = `${heightCount}px`;
  heightCount += 0.01;
}

// ? Added a setInterval function to repeat the animation.
setInterval(() => {
  widthCount = 70;
  heightCount = 50;
  animate();
}, 1800);
