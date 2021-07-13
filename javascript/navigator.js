import Auditorium from "./auditorium.js";
import Startscreen from "./startscreen.js";
import Taskscreen from "./taskscreen.js";
import Endscreen from "./endscreen.js";

import { mainscreen, stressTestLogo } from "../p5setup.js";

export default class Navigator {
  constructor(auditorium, startscreen, taskscreen, endscreen) {
    this.actualscreen = "mainscreen";
    this.actualRoom = "auditorium";

    this.startscreen = startscreen;
    this.auditorium = auditorium;
    this.taskscreen = taskscreen;
    this.endscreen = endscreen;

    this.timeFactor = 3;

    this.doingBreak = false;
    this.doingTask = false;
    this.actualTaskName = "placeholder";
    this.actualTaskTime = 0;

    this.pointsInTotal = 0;
  }

  createObjects() {
    this.startscreen = new Startscreen(stressTestLogo);
    this.taskscreen = new Taskscreen(this, mainscreen);
    this.endscreen = new Endscreen();

    this.auditorium = new Auditorium();
    this.auditorium.createObjects();
  }

  activateTaskWork(title, time, points) {
    this.actualscreen = "taskscreen";
    this.doingTask = true;
    this.actualTaskName = title;
    this.actualTaskTime = time;

    this.pointsInTotal += points;

    mainscreen.developParametersEveryMinute(this.taskscreen);
  }

  displayMainscreen() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.display();
    }
    mainscreen.display();
  }

  display() {
    // console.log(this.actualTaskName);
    // console.log(this.actualTaskTime);
    // console.log(this.actualTaskPoints);

    if (this.actualscreen === "startscreen") {
      this.startscreen.display();
    } else if (this.actualscreen === "taskscreen") {
      this.taskscreen.display();
    } else if (this.actualscreen === "mainscreen") {
      this.displayMainscreen();
    } else if (this.actualscreen === "endscreen") {
      this.endscreen.display();
    }
  }

  checkMouseClicksMainscreen() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.checkMouseClicks();
    }
    mainscreen.checkMouseClicks(this.taskscreen);
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
    } else if (this.actualscreen === "taskscreen" && this.doingBreak === true) {
      this.actualscreen = "mainscreen";
      this.doingBreak = false;
      mainscreen.minutesSinceLastBreak = 0;
    } else if (this.actualscreen) {
      this.actualscreen = "mainscreen";
      this.doingTask = false;
    }
  }
}
