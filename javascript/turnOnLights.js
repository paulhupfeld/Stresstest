import TaskInfo from "./taskInfo.js";

export default class TurnOnLights extends TaskInfo {
  constructor(title, time, spotlightOff, spotlightOn) {
    super(title, time, 640, 100);

    this.activated = false;
    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;

    this.spotlightOff = spotlightOff;
    this.spotlightOn = spotlightOn;
  }

  displayImage() {
    if (this.activated) {
      if (this.done === false) {
        this.spotlightOff.display();
        this.scaleAnimation();
      } else {
        this.spotlightOn.display();
      }
    }
  }

  scaleAnimation() {
    if (this.manualHitbox() && this.spotlightOff.scale < 1.1) {
      this.spotlightOff.scale += 0.01;
    } else if (this.manualHitbox() === false && this.spotlightOff.scale > 1) {
      this.spotlightOff.scale = 1;
    }
  }

  manualHitbox() {
    if (
      (mouseX >= 65 &&
        mouseX <= 295 &&
        mouseY >= 50 &&
        mouseY <= 160 &&
        this.clicked === false) ||
      (mouseX >= 965 &&
        mouseX <= 1195 &&
        mouseY >= 50 &&
        mouseY <= 160 &&
        this.clicked === false)
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkMouseClicks(Mainscreen, closeCurtain) {
    if (closeCurtain.done === false) {
      if (this.activated) {
        if (this.done === false) {
          if (this.manualHitbox() && this.clicked === false) {
            this.clicked = true;
            // console.log("show taskInfo");
          } else if (this.taskButtonHitTest(0) && this.clicked === true) {
            this.clicked = false;
            this.done = true;
            //...
            // console.log("activate TaskScreen");
          } else if (
            this.prioButtonHitTest(0) &&
            this.isOnPrioBoard === false
          ) {
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
}
