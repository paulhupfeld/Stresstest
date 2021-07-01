export default class TaskInfo {
  constructor(title, time, taskInfoX, taskInfoY) {
    this.title = title;
    this.time = time;

    this.taskInfoX = taskInfoX;
    this.taskInfoY = taskInfoY;
    this.actualTask = taskInfoY;
  }

  taskInfoPrioBoard() {
    push();
    fill(255);
    noStroke();

    fill(0);
    textAlign(LEFT, TOP);
    textFont("Allerta");
    textSize(17);
    strokeWeight(0);

    //Problem:
    //For tasksOnPrioBoard.length

    let i = 0;
    this.tasksOnPrioBoard.forEach((actualTask) => {
      // actualTask = tasksOnPrioBoard[0].title;
      console.log(actualTask);
      text(
        actualTask.title,
        this.taskInfoX - 148,
        this.taskInfoY - 18 + i * 23
      );
      i++;
    });

    // if (this.tasksOnPrioBoard.length) {
    //   // debugger;

    //   console.log(this.actualTask);
    //   text(this.actualTask, this.taskInfoX - 148, this.taskInfoY - 18);
    // }

    // text(
    //   "Teleprompter programmieren",
    //   this.taskInfoX - 148,
    //   this.taskInfoY - 18
    // );

    textSize(13);
    text("ca. 8 min.", this.taskInfoX - 148, this.taskInfoY + 8);

    // line(
    //   this.taskInfoX + 110,
    //   this.taskInfoY - 35,
    //   this.taskInfoX + 110,
    //   this.taskInfoY + 35
    // );
    fill(255, 75, 9);
    textSize(35);
    noStroke();
    textAlign(CENTER, CENTER);
    text("X", this.taskInfoX + 140, this.taskInfoY);
    pop();
  }

  taskInfoPopUp() {
    push();
    fill(255);
    strokeWeight(0);
    rect(this.taskInfoX - 160, this.taskInfoY - 35, 320, 70);

    fill(0);
    textAlign(LEFT, TOP);
    textFont("Allerta");
    textSize(17);

    text(this.title, this.taskInfoX - 148, this.taskInfoY - 18);
    textSize(13);
    text(
      "ca. " + this.time + " min.",
      this.taskInfoX - 148,
      this.taskInfoY + 8
    );

    strokeWeight(2);
    line(
      this.taskInfoX + 120,
      this.taskInfoY - 35,
      this.taskInfoX + 120,
      this.taskInfoY + 35
    );
    fill(255, 75, 9);
    textSize(45);
    noStroke();
    textAlign(CENTER, CENTER);
    textFont("Allerta");
    text("!", this.taskInfoX + 140, this.taskInfoY + 5);
    pop();
  }

  displayTaskInfo() {
    this.taskInfoPopUp();
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

  taskButtonHitTest() {
    if (
      mouseX >= this.taskInfoX - 160 &&
      mouseX <= this.taskInfoX + 120 &&
      mouseY >= this.taskInfoY - 35 &&
      mouseY <= this.taskInfoY + 35
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkMouseClicks() {
    if (this.prioButtonHitTest()) {
      this.prioBoard = !this.prioBoard;
      console.log("prioBoard = " + this.prioBoard);
    }

    if (this.taskButtonHitTest()) {
      //activate TaskScreen
      console.log("activate TaskScreen");
    }
  }
}
