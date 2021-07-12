import TaskInfo from "./taskInfo.js";

export default class SetupChairs extends TaskInfo {
  constructor(title, time, boxes, chairbox, reservedBox) {
    super(title, time, 400, 450);

    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;
    this.activateAnimation = false;

    this.boxes = boxes;
    this.chairbox = chairbox;
    this.reservedBox = reservedBox;
  }

  displayImage(placeReservationSigns) {
    if (this.done === false) {
      this.boxes.display();
      this.chairbox.display();
      this.reservedBox.display();
      this.scaleAnimation();
    } else {
      placeReservationSigns.activated = true;
    }
  }

  scaleAnimation() {
    if (this.chairbox.hitTest() && this.chairbox.scale < 1.1) {
      this.chairbox.scale += 0.01;
    } else if (this.chairbox.hitTest() === false && this.chairbox.scale > 1) {
      this.chairbox.scale = 1;
    }
  }

  checkMouseClicks(mainscreen, closeCurtain) {
    if (closeCurtain.done === false) {
      if (this.done === false) {
        if (this.chairbox.hitTest() && this.clicked === false) {
          this.clicked = true;
          // console.log("show taskInfo");
        } else if (this.taskButtonHitTest(0) && this.clicked === true) {
          this.clicked = false;
          this.done = true;
          //...
          // console.log("activate TaskScreen");
        } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard === false) {
          mainscreen.tasksOnPrioBoard.push(this);
          this.isOnPrioBoard = true;
          // console.log("push on prioBoard");
        } else if (this.prioButtonHitTest(0) && this.isOnPrioBoard) {
          mainscreen.tasksOnPrioBoard.splice(
            mainscreen.tasksOnPrioBoard.indexOf(this),
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
