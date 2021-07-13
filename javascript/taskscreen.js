export default class Taskscreen {
  constructor(navigator, mainscreen) {
    this.minutesSinceBreakStarted = 0;

    this.navigator = navigator;
    this.mainscreen = mainscreen;
  }

  doBreak() {
    if (this.navigator.doingBreak) {
      for (let i = 0; i < 5; i++) {
        // console.log(this.mainscreen.breakEffectivity);
        this.mainscreen.concentration += this.mainscreen.breakEffectivity;

        this.mainscreen.developConcentration();
        // this.mainscreen.developBreakEffectivity();
        // console.log(this.mainscreen.concentration);
        // console.log(this.mainscreen.breakEffectivity);
      }

      this.mainscreen.counterMinutes -= 5;
    }
  }

  doTask() {}

  display() {
    background(38, 38, 38);

    push();
    fill(241, 207, 57);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("Aufgabenscreen (kommt bald)", 640, 180);

    textSize(20);
    if (this.navigator.doingBreak) {
      text("Du hast 5 Minuten Pause gemacht", 640, 400);
    } else {
      text("Du hast die Aufgabe erledigt", 640, 400);
    }
    textSize(15);
    text("Klicke zum Fortfahren", 640, 450);

    //missing:
    // animation & progressBar
    // calculated duration (calculated in dependet on taskTime)
    // "Stop Task"-button

    pop();
  }
}
