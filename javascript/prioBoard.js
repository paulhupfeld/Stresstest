import { prioBoardImage } from "../p5setup.js";

export default class PrioBoard {
  constructor() {}

  display() {
    image(prioBoardImage, 350, 0, prioBoardImage.width, prioBoardImage.height);

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
}
