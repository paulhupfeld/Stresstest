export default class Taskscreen {
  constructor(navigator, mainscreen) {
    this.minutesSinceBreakStarted = 0;

    this.navigator = navigator;
    this.mainscreen = mainscreen;

    this.neededTime = 0;
  }

  doBreak() {
    if (this.navigator.doingBreak) {
      for (let i = 0; i < 5; i++) {
        this.mainscreen.developConcentration();
      }

      this.mainscreen.counterMinutes -= 5;
    }
  }

  doTask() {
    this.neededTime =
      (this.navigator.actualTaskTime * (3 / 4)) /
      (this.mainscreen.concentration / 100);

    for (let i = 0; i < this.navigator.actualTaskTime; i++) {
      this.mainscreen.developConcentration();
    }

    //durantion rounded to minutes
    this.mainscreen.counterMinutes = Math.round(
      this.mainscreen.counterMinutes - this.neededTime
    );
  }

  display() {
    background(38, 38, 38);

    push();
    fill(241, 207, 57);
    textAlign(CENTER, CENTER);
    textSize(30);

    textSize(20);
    if (this.navigator.doingBreak) {
      text("Du hast 5 Minuten Pause gemacht.", 640, 400);
    } else {
      text(
        "Du hast die Aufgabe erledigt. Benötigte Zeit: " +
          Math.round(this.neededTime) +
          " min.",
        640,
        400
      );
    }
    textSize(15);
    text("Klicke zum Fortfahren", 640, 450);

    //missing:
    // animation & progressBar
    // calculated duration (depends on taskTime)
    // "Stop Task"-button

    pop();
  }
}
