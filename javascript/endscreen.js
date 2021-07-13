export default class Endscreen {
  constructor(navigator) {
    this.grade = 2;

    this.navigator = navigator;
  }

  display() {
    background(36, 36, 36);

    push();
    fill(241, 207, 57);
    textAlign(CENTER, CENTER);
    textSize(30);
    if (this.navigator.pointsInTotal >= 38) {
      this.grade = 1;
    } else if (this.navigator.pointsInTotal >= 33) {
      this.grade = 2;
    } else if (this.navigator.pointsInTotal >= 28) {
      this.grade = 3;
    } else if (this.navigator.pointsInTotal >= 23) {
      this.grade = 4;
    } else if (this.navigator.pointsInTotal >= 18) {
      this.grade = 5;
    } else {
      this.grade = 6;
    }

    text("Note: " + this.grade, 640, 400);

    pop();
  }
}
