import Auditorium from "./auditorium.js";
import Startscreen from "./startscreen.js";
import Taskscreen from "./taskscreen.js";

import { mainscreen, stressTestLogo } from "../p5setup.js";

export default class Navigator {
  constructor(auditorium, startscreen, taskscreen) {
    this.actualscreen = "mainscreen";
    this.actualRoom = "auditorium";

    this.startscreen = startscreen;
    this.auditorium = auditorium;
    this.taskscreen = taskscreen;

    this.doingBreak = false;
  }

  createObjects() {
    this.startscreen = new Startscreen(stressTestLogo);
    this.taskscreen = new Taskscreen(this, mainscreen);

    this.auditorium = new Auditorium();
    this.auditorium.createObjects();
  }

  displayMainscreen() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.display();
    }
    mainscreen.display();
  }

  display() {
    if (this.actualscreen === "startscreen") {
      this.startscreen.display();
    } else if (this.actualscreen === "taskscreen") {
      this.taskscreen.display();
    } else if (this.actualscreen === "mainscreen") {
      this.displayMainscreen();
    }
  }

  checkMouseClicksMainscreen() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.checkMouseClicks();
    }
    mainscreen.checkMouseClicks();
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
