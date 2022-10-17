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

/*******************************************************/
// Handlers
btnHamburger.addEventListener("click", toggleMenu);
