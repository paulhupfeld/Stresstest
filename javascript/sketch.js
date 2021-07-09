import Navigator from "./navigator.js";

let start = true;
let navigator;

function draw() {
  if (start === true) {
    navigator = new Navigator();

    navigator.createObjects();

    start = false;
  }

  navigator.display();

  // console.log(frameRate());
}

function mouseClicked() {
  navigator.checkMouseClicks();
}

window.draw = draw;
window.mouseClicked = mouseClicked;
