export default class TaskInfo {
  constructor(title, time, taskInfoX, taskInfoY) {
    this.title = title;
    this.time = time;

    this.taskInfoX = taskInfoX;
    this.taskInfoY = taskInfoY;
  }

  taskInfo() {
    fill(250);
    strokeWeight(2);
    rect(this.taskInfoX - 125, this.taskInfoY - 35, 250, 70);

    fill(0);
    textAlign(LEFT, TOP);
    textFont("Allerta");
    textSize(18);
    text(this.title, this.taskInfoX - 115, this.taskInfoY - 18);
    textSize(13);
    text(
      "ca. " + this.time + " min.",
      this.taskInfoX - 115,
      this.taskInfoY + 5
    );

    line(
      this.taskInfoX + 75,
      this.taskInfoY - 35,
      this.taskInfoX + 75,
      this.taskInfoY + 35
    );
    fill(255, 75, 9);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("!", this.taskInfoX + 100, this.taskInfoY + 5);
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
