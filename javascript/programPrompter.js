import TaskInfo from "./taskInfo.js";

export default class ProgramPrompter extends TaskInfo {
  constructor(title, time, teleprompterOff, teleprompterOn) {
    super(title, time, 740, 320);

    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;

    this.teleprompterOff = teleprompterOff;
    this.teleprompterOn = teleprompterOn;
  }

  displayImage() {
    if (this.done === false) {
      this.teleprompterOff.display();
      this.scaleAnimation();
    } else {
      this.teleprompterOn.display();
    }
  }

  scaleAnimation() {
    if (this.teleprompterOff.hitTest() && this.teleprompterOff.scale < 1.1) {
      this.teleprompterOff.scale += 0.01;
    } else if (
      this.teleprompterOff.hitTest() === false &&
      this.teleprompterOff.scale > 1
    ) {
      this.teleprompterOff.scale = 1;
    }
  }

  checkMouseClicks(Mainscreen, closeCurtain) {
    if (closeCurtain.done === false) {
      if (this.done === false) {
        if (this.teleprompterOff.hitTest() && this.clicked === false) {
          this.clicked = true;
          // console.log("show taskInfo");
        } else if (this.taskButtonHitTest(0) && this.clicked === true) {
          this.clicked = false;
          this.done = true;
          //...
          // console.log("activate TaskScreen");
        } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard === false) {
          Mainscreen.tasksOnPrioBoard.push(this);
          this.isOnPrioBoard = true;
          // console.log("push on prioBoard");
        } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard) {
          Mainscreen.tasksOnPrioBoard.splice(
            Mainscreen.tasksOnPrioBoard.indexOf(this),
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
}
