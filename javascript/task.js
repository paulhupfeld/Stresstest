import Button from "./button.js";

import {
  actorImage,
  boxesImage,
  broomImage,
  chairboxImage,
  chairsReservedImage,
  chairsImage,
  curtainLeftImage,
  curtainRightImage,
  doorLeftImage,
  doorRightImage,
  exitImage,
  konfettiImage,
  reservedBoxImage,
  spotlightDownImage,
  spotlightOffImage,
  spotlightOnImage,
  stageImage,
  supportBeamImage,
  teleprompterOffImage,
  teleprompterOnImage,
  theaterBackgroundImage,
} from "../p5setup.js";

class Task extends Button {
  constructor(imageX, imageY, scale, hitboxX, hitboxY, width, height, image) {
    super(hitboxX, hitboxY);
    this.imageX = imageX;
    this.imageY = imageY;
    this.scale = scale;
    this.hitboxX = hitboxX;
    this.hitboxY = hitboxY;
    this.width = width;
    this.height = height;
    this.image = image;
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
}

let start = true;
let actor;
let broom;
let theaterBackground;

function draw() {
  if (start === true) {
    actor = new Task(200, 200, 1, 180, 180, 160, 170, actorImage);
    broom = new Task(200, 200, 1, 180, 180, 160, 170, spotlightDownImage);
    theaterBackground = new Task(
      640,
      360,
      1,
      180,
      180,
      160,
      170,
      theaterBackgroundImage
    );

    start = false;
  }
  // image(theaterImg, 0, 0);
  // actor.display();
  // actor.showHitbox();
  theaterBackground.display();
  // theaterBackground.showHitbox();
}

function mouseClicked() {
  if (actor.hitTest()) {
    console.log("erfolg!!");
  }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
