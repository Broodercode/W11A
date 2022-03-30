let tap = document.getElementById("tap");
let hov = document.getElementById("hov");
let space = document.getElementById("spacebar");

function onClick(e) {
  console.log(e);
  tap.style.color = "green";
}

function onHover(e) {
  console.log(e);
  hov.style.color = "purple";

  setTimeout(() => {
    hov.style.color = "";
  }, 500);
}

function onKeyPress(e) {
  if (e.code == "Space") {
    space.style.color = "pink";
  }
}

document.addEventListener("click", onClick);
hov.addEventListener("mouseenter", onHover);
document.addEventListener("keydown", onKeyPress);
