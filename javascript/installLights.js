import TaskInfo from "./taskInfo.js";

export default class InstallLights extends TaskInfo {
  constructor(title, time, spotlightDown) {
    super(title, time, 640, 550);

    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;

    this.spotlightDown = spotlightDown;
  }

  displayImage(turnOnLights) {
    if (this.done === false) {
      this.spotlightDown.display();

      this.scaleAnimation();
    } else {
      turnOnLights.activated = true;
    }
  }

  scaleAnimation() {
    if (this.manualHitbox() && this.spotlightDown.imageY > 350) {
      this.spotlightDown.imageY -= 1;
    } else if (
      this.manualHitbox() === false &&
      this.spotlightDown.imageY < 360
    ) {
      this.spotlightDown.imageY += 1;
    }
  }

  manualHitbox() {
    if (
      (mouseX >= 150 &&
        mouseX <= 350 &&
        mouseY >= 600 &&
        mouseY <= 650 &&
        this.clicked === false) ||
      (mouseX >= 915 &&
        mouseX <= 1115 &&
        mouseY >= 600 &&
        mouseY <= 650 &&
        this.clicked === false)
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkMouseClicks(mainscreenInstruments) {
    //(manual hitbox)
    if (this.done === false) {
      if (this.manualHitbox()) {
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
