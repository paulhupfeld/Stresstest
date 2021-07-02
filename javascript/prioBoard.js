import TaskInfo from "./taskInfo.js";
import { prioBoardImage } from "../p5setup.js";

export default class PrioBoard extends TaskInfo {
  constructor() {
    super(0, 0, 640, 223);
    this.active = false;

    this.tasksOnPrioBoard = [];
  }

  displayBoard() {
    push();
    scale(1);
    image(prioBoardImage, 350, 5, prioBoardImage.width, prioBoardImage.height);
    pop();

    for (let i = 0; i < 17; i++) {
      push();
      strokeWeight(1.3);
      stroke(150);

      line(480, 220 + i * 23, 800, 220 + i * 23);

      pop();
    }
  }

  // displayFrame() {
  //   push();
  //   scale(0.9);
  //   image(
  //     prioBoardImage,
  //     1315,
  //     70,
  //     prioBoardImage.width,
  //     prioBoardImage.height
  //   );
  //   pop();
  // }

  display(prioIcon) {
    if (this.active) {
      //animation
      this.displayBoard();
      this.displayTaskInfoPrioBoard();
    } else {
      prioIcon.display();
      //this.displayFrame();
    }
  }

  prioButtonHitTest() {
    if (
      mouseX >= this.taskInfoX + 120 &&
      mouseX <= this.taskInfoX + 160 &&
      mouseY >= this.taskInfoY - 35 &&
      mouseY <= this.taskInfoY + 35
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkMouseClicks(prioBoardState) {
    if (this.active) {
      for (let i = 0; i < this.tasksOnPrioBoard.length; i++) {
        let actualTask = this.tasksOnPrioBoard[i];
        if (this.taskButtonHitTest(i)) {
          //...
          console.log("activate TaskScreen");
        }
        if (this.prioButtonHitTest(i)) {
          this.tasksOnPrioBoard.splice(this.tasksOnPrioBoard[i], 1);
          actualTask.isOnPrioBoard = false;
          console.log("remove from prioBoard");
        }
      }
    }
  }
}
