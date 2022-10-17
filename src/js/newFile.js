"use strict";
iconsService.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".icon-service");
  if (!clicked) return;
});
