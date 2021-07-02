import TaskInfo from "./taskInfo.js";
import { prioBoardImage } from "../p5setup.js";

export default class PrioBoard extends TaskInfo {
  constructor() {
    super(0, 0, 640, 223);
    this.active = false;
    this.boardPosition = {
      scale: 0.1,
      x: 1150,
      y: 600,
      // scale: 1,
      // x: 350,
      // y: 5,
    };

    this.tasksOnPrioBoard = [];
  }

  display(prioIcon) {
    // console.log(this.active);
    if (this.active) {
      this.popUpPrioBoardAnimation();
      this.displayBoard();
      this.displayTaskInfoPrioBoard();
    } else {
      prioIcon.display();
      //this.displayFrame();
    }
  }

  popUpPrioBoardAnimation() {
    gsap.to(this.boardPosition, {
      duration: 1,
      scale: 1,
      x: 350,
      ease: "power4.out",
    });
    gsap.to(this.boardPosition, {
      duration: 0.8,
      y: 5,
      ease: "power4.out",
    });
  }

  displayBoard() {
    push();
    translate(this.boardPosition.x, this.boardPosition.y);
    scale(this.boardPosition.scale);
    image(prioBoardImage, 0, 0, prioBoardImage.width, prioBoardImage.height);

    for (let i = 0; i < 17; i++) {
      strokeWeight(1.3);
      stroke(150);

      line(130, 216 + i * 23, 455, 216 + i * 23);
    }
    pop();
  }

  displayTaskInfoPrioBoard() {
    let i = 0;
    this.tasksOnPrioBoard.forEach((actualTask) => {
      push();

      translate(this.boardPosition.x + 290, this.boardPosition.y + 219);
      scale(this.boardPosition.scale);
      fill(0);
      textAlign(LEFT, TOP);
      textFont("Allerta");
      textSize(17);
      strokeWeight(0);
      text(actualTask.title, -148, -17 + i * 39);

      textSize(13);
      text("ca. " + actualTask.time + "min.", -148, +9 + i * 39);

      //white space behind X
      fill(255);
      rect(130, -7 + i * 39, 20, 10);

      fill(255, 75, 9);
      textSize(35);
      noStroke();
      textAlign(CENTER, CENTER);
      text("X", 140, i * 39);

      //falls i * 39 ändern -> auch in hittest ändern

      pop();
      i++;
    });
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

  checkMouseClicks(prioIcon) {
    if (this.active) {
      for (let i = 0; i < this.tasksOnPrioBoard.length; i++) {
        let actualTask = this.tasksOnPrioBoard[i];
        if (this.taskButtonHitTest(i)) {
          //...
          console.log("activate TaskScreen");
        } else if (this.prioButtonHitTest(i)) {
          this.tasksOnPrioBoard.splice(this.tasksOnPrioBoard[i], 1);
          actualTask.isOnPrioBoard = false;
          console.log("remove from prioBoard");
        }
      }
      if (mouseX <= 410 || mouseX >= 870 || mouseY <= 30 || mouseY >= 680) {
        this.active = false;
        //Rückanimation einfügen
      }
    } else {
      if (prioIcon.hitTest()) {
        this.active = true;
      }
    }
  }
}
