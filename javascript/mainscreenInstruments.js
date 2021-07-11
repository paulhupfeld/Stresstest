import TaskInfo from "./taskInfo.js";
import { prioBoardImage, octagonImage } from "../p5setup.js";

export default class MainscreenInstruments extends TaskInfo {
  constructor() {
    super(0, 0, 640, 223, false);
    this.active = false;
    this.boardPosition = {
      scale: 0.13,
      x: 1150,
      y: 568,
    };

    this.tasksOnPrioBoard = [];

    this.frameCounter = 0;
    this.counterMinutes = 150;
    this.counterSecounds = 0;
  }

  displayBreakButton(coffeeCup) {
    push();
    noStroke();
    fill(255);
    ellipse(90, 630, 150);

    push();
    translate(90, 615);
    scale(0.36);
    coffeeCup.display();
    pop();

    fill(255, 75, 9);
    textAlign(CENTER, CENTER);
    textFont("Allerta");
    textSize(17);
    strokeWeight(0);
    text("Pause", 90, 675);

    pop();
  }

  displayPrioButton() {
    push();
    noStroke();
    fill(255);
    ellipse(1190, 630, 150);

    fill(255, 75, 9);
    textAlign(CENTER, CENTER);
    textFont("Allerta");
    textSize(17);
    strokeWeight(0);
    text("Prioboard", 1190, 675);

    pop();
  }

  popUpPrioBoardAnimation() {
    if (this.active) {
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
        // onComplete: () => {
        //   popUpPrioBoardAnimation();
        // },
      });
    } else {
      gsap.to(this.boardPosition, {
        duration: 0.8,
        scale: 0.13,
        x: 1150,
        ease: "power4.out",
      });
      gsap.to(this.boardPosition, {
        duration: 1,
        y: 568,
        ease: "power4.out",
        // onComplete: () => {
        //   popUpPrioBoardAnimation();
        // },
      });
    }
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
      text(actualTask.title, -148, -17 + i * 69);

      textSize(13);
      text("ca. " + actualTask.time + "min.", -148, +9 + i * 69);

      //white space behind X
      fill(255);
      rect(130, -7 + i * 69, 20, 10);

      fill(255, 75, 9);
      textSize(35);
      noStroke();
      textAlign(CENTER, CENTER);
      text("X", 140, i * 69);

      //falls i * 39 ändern -> auch in hittest ändern

      pop();
      i++;
    });
  }

  prioButtonHitTest(i) {
    if (
      mouseX >= this.taskInfoX + 120 &&
      mouseX <= this.taskInfoX + 160 &&
      mouseY >= this.taskInfoY - 35 + i * 69 &&
      mouseY <= this.taskInfoY + 35 + i * 69
    ) {
      return true;
    } else {
      return false;
    }
  }

  countTime() {
    if (this.counterSecounds === 0) {
      this.counterSecounds = 60;
      this.counterMinutes -= 1;
    }

    if (this.frameCounter === 30) {
      this.counterSecounds -= 1;
      this.frameCounter = 0;
    }
    // console.log(this.frameCounter);
    this.frameCounter += 1;
  }

  developParameters() {
    this.countTime();
  }

  displayTimeCounter() {
    push();
    translate(0, -25);
    scale(1.25);
    image(octagonImage, 10, 30, 100, 100);
    fill(241, 208, 58);
    textSize(27);
    textFont("Pop Warner");
    textAlign(CENTER, CENTER);
    text(this.counterMinutes + ":" + this.counterSecounds, 60, 83);
    pop();
  }

  display(coffeeCup) {
    this.developParameters();

    this.displayBreakButton(coffeeCup);
    this.displayPrioButton();
    this.displayBoard();
    this.displayTimeCounter();

    if (this.active) {
      this.displayTaskInfoPrioBoard();
    }
  }

  checkMouseClicks() {
    if (this.active) {
      for (let i = 0; i < this.tasksOnPrioBoard.length; i++) {
        let actualTask = this.tasksOnPrioBoard[i];
        if (this.taskButtonHitTest(i)) {
          //...
          // console.log("activate TaskScreen");
        } else if (this.prioButtonHitTest(i)) {
          this.tasksOnPrioBoard.splice(i, 1);
          actualTask.isOnPrioBoard = false;
          // console.log("remove from prioBoard");
        }
      }
      if (mouseX <= 410 || mouseX >= 870 || mouseY <= 30 || mouseY >= 680) {
        this.active = false;
        this.popUpPrioBoardAnimation();
      }
    } else {
      if (mouseX >= 1130 && mouseX <= 1250 && mouseY >= 570 && mouseY <= 680) {
        this.active = true;
        this.popUpPrioBoardAnimation();
      }
    }
  }
}
