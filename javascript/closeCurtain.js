import TaskInfo from "./taskInfo.js";

export default class CloseCurtain extends TaskInfo {
  constructor(title, time, curtainLeft, curtainRight, curtainClosed) {
    super(title, time, 930, 300);

    this.clicked = false;
    this.inProgress = false;
    this.progress = 0;
    this.done = false;

    this.curtainLeft = curtainLeft;
    this.curtainRight = curtainRight;
    this.curtainClosed = curtainClosed;
  }

  displayImage() {
    if (this.done === false) {
      this.curtainLeft.display();
      this.curtainRight.display();
      this.title = "Vorhang schließen";
      //   this.scaleAnimation();
    } else {
      this.curtainClosed.display();
      this.curtainLeft.display();
      this.curtainRight.display();
      this.title = "Vorhang öffnen";

      this.clicked = true;
    }
    this.curtainLeft.showHitbox();
  }

  //   scaleAnimation() {
  //     if (this.curtainLeft.hitTest() && this.curtainLeft.scale < 1.1) {
  //       this.curtainLeft.scale += 0.01;
  //     } else if (this.curtainLeft.hitTest() === false && this.curtainLeft.scale > 1) {
  //       this.curtainLeft.scale = 1;
  //     }
  //   }

  checkMouseClicks(mainscreenInstruments) {
    if (this.done === false) {
      if (this.curtainLeft.hitTest() && this.clicked === false) {
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
    } else if (this.taskButtonHitTest(0)) {
      this.clicked = false;
      this.done = false;

      //...
      // console.log("activate TaskScreen");
    }
  }
}
