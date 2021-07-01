import TaskInfo from "./taskInfo.js";

export default class InstallLights extends TaskInfo {
  constructor(title, time, spotlightDown, spotlightOff) {
    super(title, time, 640, 550);

    this.clicked = false;
    this.isOnPrioBoard = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;
    this.spotlightDown = spotlightDown;
    this.spotlightOff = spotlightOff;
  }

  displayImage() {
    if (this.done === false) {
      this.spotlightDown.display();
    } else {
      this.spotlightOff.display();
    }
  }

  checkMouseClicks() {
    //activate popup (manual hitbox)
    if (this.done === false) {
      if (
        (mouseX >= 150 && mouseX <= 350 && mouseY >= 600 && mouseY <= 650) ||
        (mouseX >= 950 && mouseX <= 1150 && mouseY >= 600 && mouseY <= 650)
      ) {
        this.clicked = true;
      }
    }

    //activate TaskScreen...
    if (this.taskButtonHitTest(0)) {
      this.clicked = false;
      console.log("activate TaskScreen");
    }

    //else if priohitbox, else clicked = false...
  }
}
