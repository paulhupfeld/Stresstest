import Startscreen from "./Startscreen";
import Mainscreen from "./Mainscreen";

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
