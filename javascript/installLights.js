import TaskInfo from "./taskInfo.js";

export default class InstallLights extends TaskInfo {
  constructor(title, time) {
    super(title, time, 640, 550);

    this.clicked = false;
    this.isOnPrioBoard = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;
  }

  // displayImage() {
  //   if (this.done === false) {
  //     spotlightDown.display();
  //   } else {
  //     spotlightOff.display();
  //   }
  // }

  checkMouseClicks() {
    if (this.done === false) {
      if (
        (mouseX >= 150 && mouseX <= 350 && mouseY >= 600 && mouseY <= 650) ||
        (mouseX >= 950 && mouseX <= 1150 && mouseY >= 600 && mouseY <= 650)
      ) {
        this.clicked = true;
      }
    }

    if (this.taskButtonHitTest()) {
      //activate TaskScreen
      this.clicked = false;
      console.log("activate TaskScreen");
    }
  }
}
