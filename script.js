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

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const updateValues = () => {
  if (
    !isNaN(bill.value) &&
    !isNaN(percentage) &&
    people.value > 0 &&
    typeof peopleNum === "number"
  ) {
    billNum = +bill.value;
    peopleNum = +people.value;
    let tip = billNum * percentage;
    tipEl.textContent = (tip / peopleNum).toFixed(2);
    totalEl.textContent = ((billNum + tip) / peopleNum).toFixed(2);
  }
};

bill.addEventListener("input", () => {
  updateValues();
});

buttons.addEventListener("click", (e) => {
  const clicked = e.target.closest("button");
  if (!clicked) return;
  percentage = parseFloat(clicked.textContent) / 100;
  updateValues();
});

people.addEventListener("input", () => {
  updateValues();
});

reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  billNum = 0;
  percentage = 0;
  peopleNum = 0;
  tipEl.textContent = "0.00";
  totalEl.textContent = "0.00";
});
