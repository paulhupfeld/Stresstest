import TaskInfo from "./taskInfo.js";
import { navigator } from "./sketch.js";

export default class CloseCurtain extends TaskInfo {
  constructor(
    title,
    time,
    curtainLeft,
    curtainRight,
    curtainClosed,
    curtainRopeRight,
    curtainRopeLeft
  ) {
    super(title, time, 930, 225);

    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;

    this.curtainLeft = curtainLeft;
    this.curtainRight = curtainRight;
    this.curtainClosed = curtainClosed;
    this.curtainRopeRight = curtainRopeRight;
    this.curtainRopeLeft = curtainRopeLeft;
  }

  displayImage() {
    if (this.done === false) {
      this.curtainLeft.display();
      this.curtainRight.display();
      this.curtainRopeRight.display();
      this.title = "Vorhang schließen";
      this.scaleAnimation();
    } else {
      this.curtainClosed.display();
      this.curtainLeft.display();
      this.curtainRight.display();
      this.curtainRopeLeft.display();

      this.title = "Vorhang öffnen";

      this.clicked = true;
    }
  }

  scaleAnimation() {
    if (this.curtainLeft.hitTest() && this.curtainRopeRight.scale < 1.1) {
      this.curtainRopeRight.scale += 0.01;
    } else if (
      this.curtainLeft.hitTest() === false &&
      this.curtainRopeRight.scale > 1
    ) {
      this.curtainRopeRight.scale = 1;
    }
  }

  checkMouseClicks(mainscreen) {
    if (this.done === false) {
      if (this.curtainLeft.hitTest() && this.clicked === false) {
        this.clicked = true;
        // console.log("show taskInfo");
      } else if (this.taskButtonHitTest(0) && this.clicked === true) {
        this.clicked = false;
        this.done = true;

        navigator.activateTaskWork(this.title, this.time, this.points);

        // console.log("activate TaskScreen");
      } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard === false) {
        mainscreen.tasksOnPrioBoard.push(this);
        this.isOnPrioBoard = true;
        // console.log("push on prioBoard");
      } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard) {
        mainscreen.tasksOnPrioBoard.splice(
          mainscreen.tasksOnPrioBoard.indexOf(this),
          1
        );
        this.isOnPrioBoard = false;
        // console.log("remove from prioBoard");
      } else {
        this.clicked = false;
        // console.log("stop showing taskInfo");
      }
    } else if (this.taskButtonHitTest(0) && this.clicked === true) {
      this.clicked = false;
      this.done = false;

      navigator.activateTaskWork(this.title, this.time, -2);
      // console.log("activate TaskScreen");
    }
  }
}
