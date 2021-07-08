import Auditorium from "./auditorium.js";

export default class Navigator {
  constructor(auditorium) {
    this.actualscreen = "mainscreen";
    this.actualRoom = "auditorium";

    this.auditorium = auditorium;
  }

  displayMainscreen() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.display();
    }
  }

  display() {
    if (this.actualscreen === "startscreen") {
      console.log("display Startscreen");
    } else if (this.actualscreen === "mainscreen") {
      this.displayMainscreen();
    }
  }

  createObjects() {
    this.auditorium = new Auditorium();

    this.auditorium.createObjects();
  }

  checkMouseClicks() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.checkMouseClicks();
    }
  }
}
