const vistButtons = document.querySelectorAll(".featured__visit-button");

function isMouseSupported() {
  return window.matchMedia("(hover: hover)").matches;
}

if (isMouseSupported()) {
  vistButtons.forEach((btn) => {
    btn.style.display = "none";
  });
} else {
  vistButtons.forEach((btn) => {
    btn.style.display = "block";
  });
}
