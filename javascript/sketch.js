import Navigator from "./navigator.js";

let start = true;
export let navigator;

function draw() {
  if (start === true) {
    navigator = new Navigator();

    navigator.createObjects();

    start = false;
  }

  navigator.display();
}

function mouseClicked() {
  navigator.checkMouseClicks();
}

window.draw = draw;
window.mouseClicked = mouseClicked;
