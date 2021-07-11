import TaskInfo from "./taskInfo.js";

export default class PlaceReservationSigns extends TaskInfo {
  constructor(title, time, reservedBox, chairs, chairsReserved) {
    super(title, time, 640, 470);

    this.activated = false;
    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;

    this.reservedBox = reservedBox;
    this.chairs = chairs;
    this.chairsReserved = chairsReserved;
  }

  displayImage() {
    if (this.activated) {
      if (this.done === false) {
        this.reservedBox.display();
        this.chairs.display();
        this.scaleAnimation();
      } else {
        this.chairsReserved.display();
      }
    }
  }

  scaleAnimation() {
    if (this.reservedBox.hitTest() && this.reservedBox.scale < 1.1) {
      this.reservedBox.scale += 0.01;
    } else if (
      this.reservedBox.hitTest() === false &&
      this.reservedBox.scale > 1
    ) {
      this.reservedBox.scale = 1;
    }
  }

  checkMouseClicks(mainscreenInstruments, closeCurtain) {
    if (closeCurtain.done === false) {
      //^^^^checkt, ob der Vorhang zu ist
      if (this.activated) {
        if (this.done === false) {
          if (this.reservedBox.hitTest() && this.clicked === false) {
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
  }
}
