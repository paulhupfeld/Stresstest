import Auditorium from "./auditorium.js";

export default class Navigator {
  constructor(auditorium) {
    this.actualRoom = "auditorium";
    this.auditorium = auditorium;
  }

  display() {
    if (this.actualRoom === "auditorium") {
      this.auditorium.displayBackground();
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
