import TaskInfo from "./taskInfo.js";
import {
  prioBoardImage,
  octagonImage,
  coffeeCupImage,
  lightballImage,
} from "../p5setup.js";
import { navigator } from "./sketch.js";

export default class Mainscreen extends TaskInfo {
  constructor(taskscreen) {
    super(0, 0, 640, 223, false);
    this.prioBoardIsActive = false;
    this.boardPosition = {
      scale: 0.13,
      x: 1150,
      y: 568,
    };

    this.tasksOnPrioBoard = [];

    this.gainOverview = false;
    this.doingBreak = false;

    this.frameCounter = 1;
    this.frameCounterOnlyMainscreen = 0;
    this.counterSecounds = 59;
    this.counterMinutes = 49;
    this.minutesSinceLastBreak = 0;

    this.taskscreen = taskscreen;

    //k
    this.concentration = 0;
    //W_R
    this.breakEffectivity = 18;
  }

  displayBreakButton() {
    push();
    noStroke();
    fill(255);
    ellipse(90, 630, 150);

    push();
    translate(59, 577);
    scale(0.36);
    image(coffeeCupImage, 0, 0);
    pop();

    fill(255, 75, 9);
    textAlign(CENTER, CENTER);
    textFont("Allerta");
    textSize(17);
    strokeWeight(0);
    text("Pause", 90, 675);

    fill(123, 123, 123);
    textSize(12);
    text("5m", 91, 619);

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
    if (this.prioBoardIsActive) {
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
      });
    }
  }

  displayPrioBoard() {
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
    //end game
    if (
      (this.counterSecounds <= 0 && this.counterMinutes === 0) ||
      this.counterMinutes <= 0
    ) {
      navigator.actualscreen = "endscreen";
    }

    if (frameRate() > 0) {
      this.frameCounter += (1 / frameRate()) * navigator.timeFactor;
    }

    if (this.frameCounter >= 1) {
      this.counterSecounds -= 1;
      this.counterSecounds = Math.round(this.counterSecounds);

      this.frameCounter = 0;
    }

    if (this.counterSecounds <= 0) {
      this.counterSecounds = 60;
      this.counterMinutes -= 1;
      this.minutesSinceLastBreak++;
      this.developParametersEveryMinute();
    }
  }

  developConcentration() {
    if (
      navigator.actualscreen === "mainscreen" &&
      this.gainOverview === false
    ) {
      this.concentration -= 1;
    } else if (
      navigator.actualscreen === "taskscreen" &&
      navigator.doingBreak === false
    ) {
      this.concentration -= 0.5;
    } else if (navigator.doingBreak) {
      this.concentration += this.breakEffectivity;
    }

    this.developBreakEffectivity();
  }

  developBreakEffectivity() {
    if (
      navigator.actualscreen === "mainscreen" &&
      this.minutesSinceLastBreak >= 25 &&
      this.minutesSinceLastBreak <= 40
    ) {
      this.breakEffectivity += 17 / 15;
    } else if (navigator.doingBreak && this.breakEffectivity >= 3.4) {
      this.breakEffectivity -= 3.4;
    }
  }

  developParametersEveryMinute(taskscreen) {
    if (navigator.actualscreen === "mainscreen") {
      this.developConcentration();
    } else if (navigator.doingTask) {
      taskscreen.doTask();
    } else if (navigator.doingBreak) {
      taskscreen.doBreak();
    }
  }

  displayInstruments() {
    push();

    //Time
    translate(0, -25);
    scale(1.25);
    image(octagonImage, 10, 30, 100, 100);
    fill(241, 208, 58);
    textSize(27);
    textFont("Pop Warner");
    textAlign(CENTER, CENTER);
    if (this.counterSecounds >= 10) {
      text(this.counterMinutes + ":" + this.counterSecounds, 60, 83);
    } else {
      text(this.counterMinutes + ":0" + this.counterSecounds, 60, 83);
    }

    //Concentration
    translate(105, 0);
    image(octagonImage, 10, 30, 100, 100);
    push();
    translate(25, 40);
    scale(0.1);
    tint(255, 255, 255, 255 * (this.concentration / 100));
    image(lightballImage, 0, 0);
    pop();

    pop();
  }

  display(coffeeCup) {
    this.countTime();

    this.displayBreakButton(coffeeCup);
    this.displayPrioButton();
    this.displayPrioBoard();
    this.displayInstruments();

    if (this.prioBoardIsActive) {
      this.displayTaskInfoPrioBoard();
    }
  }

  checkMouseClicks(taskscreen) {
    if (this.prioBoardIsActive) {
      for (let i = 0; i < this.tasksOnPrioBoard.length; i++) {
        let actualTask = this.tasksOnPrioBoard[i];
        if (this.taskButtonHitTest(i)) {
          this.prioBoardIsActive = false;
          actualTask.done = true;
          navigator.activateTaskWork(actualTask.title, actualTask.time, 0);
          // console.log("activate TaskScreen");
        } else if (this.prioButtonHitTest(i)) {
          this.tasksOnPrioBoard.splice(i, 1);
          actualTask.isOnPrioBoard = false;
          // console.log("remove from prioBoard");
        }
      }

      //PrioBoard hittest
      if (mouseX <= 410 || mouseX >= 870 || mouseY <= 30 || mouseY >= 680) {
        this.prioBoardIsActive = false;
        this.popUpPrioBoardAnimation();
      }
    } else if (
      mouseX >= 1130 &&
      mouseX <= 1250 &&
      mouseY >= 570 &&
      mouseY <= 680
    ) {
      this.prioBoardIsActive = true;
      this.popUpPrioBoardAnimation();
    }

    //Break hittest
    if (mouseX >= 30 && mouseX <= 150 && mouseY >= 570 && mouseY <= 680) {
      navigator.actualscreen = "taskscreen";
      navigator.doingBreak = true;

      this.developParametersEveryMinute(taskscreen);
    }
  }
}
