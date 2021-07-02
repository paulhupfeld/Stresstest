import TaskInfo from "./taskInfo.js";

export default class SetupChairs extends TaskInfo {
  constructor(title, time) {
    super(title, time, 640, 550);

    this.clicked = false;
    this.isOnPrioBoard = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;
  }

  displayImage(boxes, chairbox, chairs) {
    if (this.done === false) {
      boxes.display();
      chairbox.display();
    } else {
      chairs.display();
    }
  }

  checkMouseClicks(array) {
    if (this.done === false) {
      if (this.chairbox.hitTest() && this.clicked === false) {
        this.clicked = true;
        console.log("show taskInfo");
      } else if (this.taskButtonHitTest(0)) {
        this.clicked = false;
        //...
        console.log("activate TaskScreen");
      } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard === false) {
        array.push(this);
        this.isOnPrioBoard = true;
        console.log("push on prioBoard");
      } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard) {
        array.splice(array.indexOf(this), 1);
        this.isOnPrioBoard = false;
        console.log("remove from prioBoard");
      } else {
        this.clicked = false;
        console.log("stop showing taskInfo");
      }
    }
  }
}
