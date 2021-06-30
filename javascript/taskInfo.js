export default class TaskInfo {
  constructor(title, time, taskInfoX, taskInfoY) {
    this.title = title;
    this.time = time;

    this.taskInfoX = taskInfoX;
    this.taskInfoY = taskInfoY;
  }

  taskInfo() {
    push();
    fill(255);
    noStroke();
    // rect(this.taskInfoX - 160, this.taskInfoY - 35, 320, 70);

    fill(0);
    textAlign(LEFT, TOP);
    textFont("Allerta");
    textSize(17);
    strokeWeight(0);
    text(this.title, this.taskInfoX - 148, this.taskInfoY - 18);
    textSize(13);
    text(
      "ca. " + this.time + " min.",
      this.taskInfoX - 148,
      this.taskInfoY + 8
    );

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

  displayTaskInfo() {
    if (this.clicked) {
      this.taskInfo();
    }
  }

  prioButtonHitTest() {
    if (
      mouseX >= this.taskInfoX + 75 &&
      mouseX <= this.taskInfoX + 125 &&
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
      mouseX >= this.taskInfoX - 125 &&
      mouseX <= this.taskInfoX + 74 &&
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
