import Auditorium from "./auditorium.js";
import Startscreen from "./startscreen.js";
import { prioBoard, coffeeCup, stressTestLogo } from "../p5setup.js";

export default class Navigator {
  constructor(auditorium, startscreen) {
    this.actualscreen = "startscreen";
    this.actualRoom = "auditorium";

    this.auditorium = auditorium;
    this.startscreen = startscreen;
  }

  createObjects() {
    this.auditorium = new Auditorium();
    this.auditorium.createObjects();

    this.startscreen = new Startscreen(stressTestLogo);
  }

  displayMainscreen() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.display();
    }
    prioBoard.display(coffeeCup);
  }

  display() {
    if (this.actualscreen === "startscreen") {
      this.startscreen.display();
    } else if (this.actualscreen === "mainscreen") {
      this.displayMainscreen();
    }
  }

  checkMouseClicksMainscreen() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.checkMouseClicks();
    }
    prioBoard.checkMouseClicks();
  }

  checkMouseClicks() {
    if (this.actualscreen === "startscreen") {
      // console.log("check Startscreen");
      this.startscreen.checkMouseClicks();
      if (this.startscreen.startGame) {
        this.actualscreen = "mainscreen";
      }
    } else if (this.actualscreen === "mainscreen") {
      this.checkMouseClicksMainscreen();
    }
  }
}
