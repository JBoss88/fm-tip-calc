"use strict";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let bill = document.querySelector("#bill");
let custom = document.querySelector("#custom");
let people = document.querySelector("#people");
let tipEl = document.querySelector("#tip-el");
let totalEl = document.querySelector("#total-el");
const buttons = document.querySelector(".buttons");

const calc = () => {
  let totalAmount = "";
  let clickedTipText = "";

  let tipNum = "";
  let peopleNum = "";
  let totalNum = "";

  bill.addEventListener("input", () => {
    totalEl.textContent = bill.value;
    totalAmount = totalEl.textContent;
    totalNum = Number(totalAmount);
    check();
  });

  buttons.addEventListener("click", (e) => {
    const clicked = e.target.closest("button");
    if (!clicked) return;
    clickedTipText = clicked.textContent;

    tipNum = parseFloat(clickedTipText) / 100;
    check();
  });

  people.addEventListener("input", () => {
    peopleNum = Number(people.value);
    console.log(peopleNum);
    check();
  });

  function check() {
    if (
      typeof tipNum === "number" &&
      typeof totalNum === "number" &&
      typeof peopleNum === "number"
    ) {
      tipEl.textContent = ((tipNum * totalNum) / peopleNum).toFixed(2);
      console.log("WORKED!!!");
    } else {
      console.log("did not work");
    }
  }
};
calc();
