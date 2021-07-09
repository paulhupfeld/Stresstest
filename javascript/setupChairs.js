import TaskInfo from "./taskInfo.js";

export default class SetupChairs extends TaskInfo {
  constructor(title, time) {
    super(title, time, 400, 450, false);

    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;
    this.activateAnimation = false;
  }

  displayImage(boxes, chairbox, chairs) {
    if (this.done === false) {
      boxes.display();
      chairbox.display();
      this.scaleAnimation(chairbox);
    } else {
      chairs.display();
    }
  }

  scaleAnimation(chairbox) {
    if (chairbox.hitTest() && chairbox.scale < 1.25) {
      chairbox.scale += 0.025;
    } else if (chairbox.hitTest() === false && chairbox.scale > 1) {
      chairbox.scale = 1;
    }
    // console.log(chairbox.scale);
  }

  checkMouseClicks(mainscreenInstruments, chairbox) {
    if (this.done === false) {
      if (chairbox.hitTest() && this.clicked === false) {
        this.clicked = true;
        // console.log("show taskInfo");
      } else if (this.taskButtonHitTest(0)) {
        this.clicked = false;
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
