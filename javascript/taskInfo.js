export default class TaskInfo {
  constructor(title, time, taskInfoX, taskInfoY) {
    this.title = title;
    this.time = time;

    this.taskInfoX = taskInfoX;
    this.taskInfoY = taskInfoY;
    this.actualTask = 0;
  }

  // x: 1150,
  // y: 600,

  // 640, 223

  displayTaskInfoPrioBoard() {
    let i = 0;
    this.tasksOnPrioBoard.forEach((actualTask) => {
      push();

      fill(0);
      textAlign(LEFT, TOP);
      textFont("Allerta");
      textSize(17);
      strokeWeight(0);
      text(
        actualTask.title,
        this.taskInfoX - 148,
        this.taskInfoY - 17 + i * 39
      );
      textSize(13);
      text(
        "ca. " + actualTask.time + "min.",
        this.taskInfoX - 148,
        this.taskInfoY + 9 + i * 39
      );

      //white space behind X
      fill(255);
      rect(this.taskInfoX + 130, this.taskInfoY - 7 + i * 39, 20, 10);

      fill(255, 75, 9);
      textSize(35);
      noStroke();
      textAlign(CENTER, CENTER);
      text("X", this.taskInfoX + 140, this.taskInfoY + i * 39);

      //falls i * 39 ändern -> auch in hittest ändern

      pop();
      i++;
    });
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
      pop();
    }
  }

  prioButtonHitTest(i) {
    if (
      mouseX >= this.taskInfoX + 120 &&
      mouseX <= this.taskInfoX + 160 &&
      mouseY >= this.taskInfoY - 35 + i * 39 &&
      mouseY <= this.taskInfoY + 35 + i * 39
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
      mouseY >= this.taskInfoY - 35 + i * 39 &&
      mouseY <= this.taskInfoY + 35 + i * 39
    ) {
      return true;
    } else {
      return false;
    }
  }
}
