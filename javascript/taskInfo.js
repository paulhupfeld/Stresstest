export default class TaskInfo {
  constructor(title, time, taskInfoX, taskInfoY, isOnPrioBoard) {
    this.title = title;
    this.time = time;

    this.taskInfoX = taskInfoX;
    this.taskInfoY = taskInfoY;
    this.isOnPrioBoard = isOnPrioBoard;
  }

  displayTaskInfoPopUp() {
    if (this.clicked) {
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

      if (this.isOnPrioBoard) {
        fill(255, 75, 9);
        rect(this.taskInfoX + 119, this.taskInfoY - 35, 41, 70);
        fill(255, 255, 255);
        text("!", this.taskInfoX + 140, this.taskInfoY + 5);
      }
      pop();
    }
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

  taskButtonHitTest(i) {
    if (
      mouseX >= this.taskInfoX - 160 &&
      mouseX <= this.taskInfoX + 120 &&
      mouseY >= this.taskInfoY - 35 + i * 69 &&
      mouseY <= this.taskInfoY + 35 + i * 69
    ) {
      return true;
    } else {
      return false;
    }
  }
}
