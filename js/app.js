"use strict";

const display = document.querySelector(".screen");
const container = document.querySelector(".container");
const buttons = document.querySelector(".btn");

const btnArray = [
  "%",
  "ce",
  "c",
  "del",
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "*",
  1,
  2,
  3,
  "-",
  ".",
  0,
  "=",
  "+",
];

const dynamic = btnArray.forEach((e) => {
  const card = document.createElement("div");
  card.innerHTML = ` <button type="button" class="btn-styles">${e}</button>`;

  buttons.append(card);
});
