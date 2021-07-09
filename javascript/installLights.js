import TaskInfo from "./taskInfo.js";

export default class InstallLights extends TaskInfo {
  constructor(title, time, spotlightDown, spotlightOff) {
    super(title, time, 640, 550, false);

    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;
  }

  displayImage(spotlightDown, spotlightOff) {
    if (this.done === false) {
      spotlightDown.display();

      this.scaleAnimation(spotlightDown);
    } else {
      spotlightOff.display();
    }
  }

  scaleAnimation(spotlightDown) {
    if (this.manualHitbox() && spotlightDown.imageY > 350) {
      spotlightDown.imageY -= 1;
    } else if (this.manualHitbox() === false && spotlightDown.imageY < 360) {
      spotlightDown.imageY += 1;
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
