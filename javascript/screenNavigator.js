import Startscreen from "./startscreen.js";
import Mainscreen from "./mainscreen.js";

let startscreen = new Startscreen();
let mainscreen = new Mainscreen();

class ScreenNavigator {
  constructor() {
    this.actualScreen = "startscreen";
  }

  switchScreen() {
    if (this.actualScreen === "startscreen" && mouseIsPressed) {
      this.actualScreen = "mainscreen";
      console.log("screen switched to mainscreen");
    }
  }

  display() {
    if (this.actualScreen === "startscreen") {
      startscreen.display();
    } else if (this.actualScreen === "mainscreen") {
      mainscreen.display();
    }
  }
}

let screenNavigator = new ScreenNavigator();

function draw() {
  clear();

  screenNavigator.display();
  screenNavigator.switchScreen();
}

function mousePressed() {}

window.draw = draw;
window.mousePressed = mousePressed;
