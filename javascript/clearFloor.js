import TaskInfo from "./taskInfo.js";

export default class ClearFloor extends TaskInfo {
  constructor(title, time, broom, konfetti) {
    super(title, time, 1000, 450);

    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;

    this.broom = broom;
    this.konfetti = konfetti;
  }

  displayImage() {
    if (this.done === false) {
      this.konfetti.display();
      this.broom.display();
      this.scaleAnimation();
    }
  }

  scaleAnimation() {
    if (this.broom.hitTest() && this.broom.scale < 1.1) {
      this.broom.scale += 0.01;
    } else if (this.broom.hitTest() === false && this.broom.scale > 1) {
      this.broom.scale = 1;
    }
  }

  checkMouseClicks(mainscreenInstruments) {
    if (this.done === false) {
      if (this.broom.hitTest() && this.clicked === false) {
        this.clicked = true;
        // console.log("show taskInfo");
      } else if (this.taskButtonHitTest(0)) {
        this.clicked = false;
        this.done = true;
        //...
        // console.log("activate TaskScreen");
      } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard === false) {
        mainscreenInstruments.tasksOnPrioBoard.push(this);
        this.isOnPrioBoard = true;
        // console.log("push on prioBoard");
      } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard) {
        mainscreenInstruments.tasksOnPrioBoard.splice(
          mainscreenInstruments.tasksOnPrioBoard.indexOf(this),
          1
        );
        this.isOnPrioBoard = false;
        // console.log("remove from prioBoard");
      } else {
        this.clicked = false;
        // console.log("stop showing taskInfo");
      }
    }
  }
}
