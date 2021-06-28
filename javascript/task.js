import Button from "./button.js";

import { actorImage } from ".p5setup.js";

//let actorImage = loadImage("theater/actorImage.png");
// let boxesImage = loadImage("theater/Boxes.png");
// let broomImage = loadImage("theater/Broom-n-bucket.png");
// let chairboxImage = loadImage("theater/Chair-box.png");
// let chairsImage = loadImage("theater/Chairs.png");
// let chairsReservedImage = loadImage("theater/Chairs-reserved.png");
// let curtainLeft = loadImage("theater/Curtain-Left.png");
// let curtainRight = loadImage("theater/Curtain-right.png");
// let doorLeft = loadImage("theater/Door-Left.png");
// let doorRight = loadImage("theater/Door-Right.png");
// let exit = loadImage("theater/Exit.png");
// let konfetti = loadImage("theater/Konfetti.png");
// let reservedBox = loadImage("theater/Reserved-Box.png");
// let spotlightDown = loadImage("theater/Spotlight-down.png");
// let spotlightOff = loadImage("theater/Spotlight-off.png");
// let spotlightOn  = loadImage("theater/Spotlight-on.png");
// let supportBeam = loadImage("theater/Support-beam.png");
// let teleprompterOff = loadImage("theater/Teleprompter-Off.png");
// let teleprompterOn = loadImage("theater/Teleprompter-On.png");

class Task extends Button {
  constructor(imageX, imageY, scale, hitboxX, hitboxY, width, height) {
    super(hitboxX, hitboxY);
    this.imageX = imageX;
    this.imageY = imageY;
    this.scale = scale;
    this.hitboxX = hitboxX;
    this.hitboxY = hitboxY;
    this.width = width;
    this.height = height;
  }

  display() {
    // console.log("hi");
    // image(actorImage, 100, 100, 100, 100);

    push();
    noStroke();

    translate(
      this.imageX - (actorImage.width / 2) * this.scale,
      this.imageY - (actorImage.height / 2) * this.scale
    );
    // console.log(actorImage.height);

    image(
      actorImage,
      0,
      0,
      actorImage.width * this.scale,
      actorImage.height * this.scale
    );

    pop();
    // ellipse(this.x, this.y, 10);
  }
}

let actor = new Task(200, 200, 1, 180, 180, 160, 170);

function draw() {
  actor.display();
  // console.log("hi");
  actor.showHitbox();
}

function mouseClicked() {
  if (actor.hitTest()) {
    console.log("erfolg!!");
  }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
