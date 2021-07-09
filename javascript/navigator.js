import Auditorium from "./auditorium.js";
import Startscreen from "./startscreen.js";

import {
  mainscreenInstruments,
  coffeeCup,
  stressTestLogo,
} from "../p5setup.js";

export default class Navigator {
  constructor(auditorium, startscreen) {
    this.actualscreen = "mainscreen";
    this.actualRoom = "auditorium";

    this.startscreen = startscreen;
    this.auditorium = auditorium;
  }

  createObjects() {
    this.startscreen = new Startscreen(stressTestLogo);

    this.auditorium = new Auditorium();
    this.auditorium.createObjects();
  }

  displayMainscreen() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.display();
    }
    mainscreenInstruments.display(coffeeCup);
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
    mainscreenInstruments.checkMouseClicks();
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
