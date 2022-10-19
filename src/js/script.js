"use strict";

// Elements
const btnHamburger = document.querySelector(".btn-hamburger");
const navMobile = document.querySelector(".nav-mobile");

const tabsContainer = document.querySelector(".tabs-container");
const servicesContent = document.querySelectorAll(".services-content");

const titlesContainer = document.querySelector(".titles-container");
const subTitles = document.querySelectorAll(".sub-titles");

const logo = document.querySelector(".logo");
const logoBars = document.querySelector(".logo-bars");
const logoname = document.querySelector(".logo-name");

/*******************************************************/
// Functions
const changeColorLogo = function () {
  logoBars.style.fill = "#000";
  logoname.style.fill = "#FF5B35";
};

const changeBackColorLogo = function () {
  logoBars.style.fill = "#FF5B35";
  logoname.style.fill = "#000";
};

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

const hoverHandler = function (e) {
  const hoverd = e.target.closest(".tabs");
  if (!hoverd) return;

  hoverd.querySelector("img").style.opacity = this;
};

const showContentSubTitle = function (e) {
  e.preventDefault();

  const hoverd = e.target.closest(".titles");
  if (!hoverd) return;

  // Show active content
  document.querySelector(`.sub-title-${hoverd.dataset.title}`).classList.add("block");
  document.querySelector(`.sub-title-${hoverd.dataset.title}`).classList.remove("hidden");
};

const hideContentSubTitle = function (e) {
  e.preventDefault();

  const hoverd = e.target.closest(".titles");
  if (!hoverd) return;

  // Remove active content
  subTitles.forEach((el) => el.classList.add("hidden"));
  subTitles.forEach((el) => el.classList.remove("block"));
};

/*******************************************************/
// Handlers
logo.addEventListener("mouseover", changeColorLogo);
logo.addEventListener("mouseout", changeBackColorLogo);

btnHamburger.addEventListener("click", toggleMenu);

tabsContainer.addEventListener("click", displayContentServices);

tabsContainer.addEventListener("mouseover", hoverHandler.bind(1));
tabsContainer.addEventListener("mouseout", hoverHandler.bind(0.35));

titlesContainer.addEventListener("mouseover", showContentSubTitle);
titlesContainer.addEventListener("mouseout", hideContentSubTitle);
