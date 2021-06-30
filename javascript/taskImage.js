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
  }

  display() {
    push();
    noStroke();

    translate(
      this.imageX - (this.image.width / 2) * this.scale,
      this.imageY - (this.image.height / 2) * this.scale
    );
    //console.log(this.img);

    image(
      this.image,
      0,
      0,
      this.image.width * this.scale,
      this.image.height * this.scale
    );

    pop();
  }

  hitTest() {
    if (this.image.hitTest()) {
      return true;
    } else {
      return false;
    }
  }
}
