"use strict";
function changeFirstImg(x) {
    x.style.cssText = "transform:rotate(5deg) scale(1.05, 1.05); opacity: 0.5";
  }
  
  function changeSecondImg(x) {
    x.style.cssText = "transform:rotate(-5deg) scale(1.05, 1.05); opacity: 0.5";
  }

  function normalImg(x) {
    x.style.cssText = "transform:rotate(0deg); opacity: 1";
  }