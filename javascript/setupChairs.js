import TaskInfo from "./taskInfo.js";

export default class SetupChairs extends TaskInfo {
  constructor(title, time) {
    super(title, time, 640, 223);

    this.clicked = true;
    this.prioBoard = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = true;
  }

  // displayImage() {
  //   if (this.done === false) {
  //     spotlightDown.display();
  //   } else {
  //     spotlightOff.display();
  //   }
  // }

  checkMouseClicks() {
    if (this.prioButtonHitTest()) {
      this.prioBoard = !this.prioBoard;
      console.log("prioBoard = " + this.prioBoard);
    }

    if (this.taskButtonHitTest()) {
      //activate TaskScreen
      this.clicked = false;
      console.log("activate TaskScreen");
    }

    //Hittest manuell
    // if (this.done === false && spotlightDown.hitTest()) {
    //   this.clicked = true;
    //   console.log("activate TaskScreen");
    // }
  }
}
