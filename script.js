"use strict";
const form = document.querySelector("form");
let bill = document.querySelector("#bill");
const buttons = document.querySelector(".buttons");
let people = document.querySelector("#people");
let custom = document.querySelector("#custom");
let tipEl = document.querySelector("#tip-el");
let totalEl = document.querySelector("#total-el");
const reset = document.querySelector(".reset");

let billNum = 0;
let percentage = 0;
let peopleNum = 0;
let customTip = 0; // ✅ Initialize customTip

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const updateValues = () => {
  billNum = +bill.value;
  peopleNum = +people.value;

  if (!isNaN(billNum) && !isNaN(percentage) && peopleNum > 0) {
    if (!isNaN(customTip) && customTip > 0) {
      percentage = customTip / 100; // Override percentage if custom tip is provided
    }

    let tip = billNum * percentage;
    tipEl.textContent = (tip / peopleNum).toFixed(2);
    totalEl.textContent = ((billNum + tip) / peopleNum).toFixed(2);
  }
};

bill.addEventListener("input", updateValues);
people.addEventListener("input", updateValues);

buttons.addEventListener("click", (e) => {
  const clicked = e.target.closest("button");
  if (!clicked) return;
  percentage = parseFloat(clicked.textContent.trim()) / 100;
  custom.value = ""; // Clear custom tip input when a button is clicked
  customTip = 0;
  updateValues();
});

custom.addEventListener("input", () => {
  customTip = +custom.value;
  percentage = 0; // Reset percentage if custom tip is used
  updateValues();
});

reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  custom.value = "";
  billNum = 0;
  percentage = 0;
  peopleNum = 0;
  customTip = 0;
  tipEl.textContent = "0.00";
  totalEl.textContent = "0.00";
});
