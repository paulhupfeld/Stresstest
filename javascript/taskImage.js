import Button from "./button.js";

export default class TaskImage extends Button {
  constructor(imageX, imageY, hitboxX, hitboxY, width, height, image) {
    super(hitboxX, hitboxY);
    this.imageX = imageX;
    this.imageY = imageY;
    this.hitboxX = hitboxX;
    this.hitboxY = hitboxY;
    this.width = width;
    this.height = height;
    this.image = image;
    this.scale = 1;
    this.blurrX = 0;
    this.blurrY = 0;
  }

  display() {
    push();

    noStroke();

    translate(
      this.imageX - (this.image.width / 2) * this.scale,
      this.imageY - (this.image.height / 2) * this.scale
    );

    /*
    if (Math.random() > 0.8) {
      //Hat die Framerate verlangsamt, als es konstant war, also mussten wir sparsamer damit umgehen
      // Jetzt ist der Schaden minimal und der Effekt noch stressiger! #FailUpwards
      this.blurrX = random(0, 30);
      this.blurrY = random(0, 10);
      tint(60, 170, 255, 200);
      image(
        this.image,
        0 + this.blurrX,
        0 + this.blurrY,
        this.image.width * this.scale,
        this.image.height * this.scale
      );
      tint(255, 60, 60, 200);
      image(
        this.image,
        0 - this.blurrX,
        0 - this.blurrY,
        this.image.width * this.scale,
        this.image.height * this.scale
      );
    }
    */

    noTint();
    image(
      this.image,
      0,
      0,
      this.image.width * this.scale,
      this.image.height * this.scale
    );

    pop();
  }

  // hitTest() {
  //   if (...) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
