export default class Taskscreen {
  constructor(navigator, mainscreen) {
    this.minutesSinceBreakStarted = 0;

    this.navigator = navigator;
    this.mainscreen = mainscreen;
  }

  doBreak() {
    if (this.navigator.doingBreak) {
      this.mainscreen.concentration += this.mainscreen.breakEffectivity;

      this.mainscreen.breakEffectivity -= 3.4;
    }
  }

  doTask() {}

  display() {
    background(0, 255, 0);
  }
}
