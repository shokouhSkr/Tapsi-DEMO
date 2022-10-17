"use strict";

// Elements
const btnHamburger = document.querySelector(".btn-hamburger");
const navMobile = document.querySelector(".nav-mobile");

const tabsContainer = document.querySelector(".tabs-container");
const servicesContent = document.querySelectorAll(".services-content");

const titlesContainer = document.querySelector(".titles-container");
const subTitles = document.querySelectorAll(".sub-titles");

/*******************************************************/
// Functions
const toggleMenu = function (e) {
  e.preventDefault();

  btnHamburger.querySelector("div").classList.toggle("active");
  navMobile.classList.toggle("hidden");
};

const displayContentServices = function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".tabs");
  if (!clicked) return;

  // Remove active content
  servicesContent.forEach((el) => el.classList.add("hidden"));
  servicesContent.forEach((el) => el.classList.remove("flex"));

  // Show active content
  document.querySelector(`.services-content-${clicked.dataset.tab}`).classList.add("flex");
  document.querySelector(`.services-content-${clicked.dataset.tab}`).classList.remove("hidden");
};

/*******************************************************/
// Handlers
btnHamburger.addEventListener("click", toggleMenu);
tabsContainer.addEventListener("click", displayContentServices);
