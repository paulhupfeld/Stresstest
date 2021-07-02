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

  checkMouseClicks(array) {
    //clicks in room
    //(manual hitbox)
    if (this.done === false) {
      if (
        (mouseX >= 150 && mouseX <= 350 && mouseY >= 600 && mouseY <= 650) ||
        (mouseX >= 950 && mouseX <= 1150 && mouseY >= 600 && mouseY <= 650)
      ) {
        this.clicked = true;
        // console.log("show taskInfo");
      } else if (this.taskButtonHitTest(0)) {
        this.clicked = false;
        //...
        // console.log("activate TaskScreen");
      } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard === false) {
        array.push(this);
        this.isOnPrioBoard = true;
        // console.log("push on prioBoard");
      } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard) {
        array.splice(array.indexOf(this), 1);
        this.isOnPrioBoard = false;
        // console.log("remove from prioBoard");
      } else {
        this.clicked = false;
        // console.log("stop showing taskInfo");
      }
    }
  }
}
