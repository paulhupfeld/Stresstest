import TaskInfo from "./taskInfo.js";
import { prioBoardImage } from "../p5setup.js";

export default class PrioBoard extends TaskInfo {
  constructor() {
    super(0, 0, 640, 223);
    this.active = false;
  }

  displayBoard() {
    push();
    scale(1);
    image(prioBoardImage, 350, 5, prioBoardImage.width, prioBoardImage.height);
    pop();

    for (let i = 0; i < 17; i++) {
      push();
      strokeWeight(2);

      //Lücke für X nur wenn Zeile auch beschrieben
      if (i % 3 === 0) {
        line(480, 220 + i * 23, 767, 220 + i * 23);
        line(792, 220 + i * 23, 800, 220 + i * 23);
      } else {
        line(480, 220 + i * 23, 800, 220 + i * 23);
      }

      pop();
    }
  }
  displayFrame() {
    push();
    scale(0.9);
    image(
      prioBoardImage,
      1315,
      70,
      prioBoardImage.width,
      prioBoardImage.height
    );
    pop();
  }

  display() {
    if (this.active) {
      this.displayBoard();
    } else {
      this.displayFrame();
    }
  }
}
