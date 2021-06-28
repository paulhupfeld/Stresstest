import Button from "./button.js";

// import
//{ actorImage } from ".p5setup.js";

actorImg = loadImage("theater/actorImage.png");
//let boxesImg = loadImage("theater/Boxes.png");
broomImg = loadImage("theater/Broom-n-bucket.png");
theaterImg = loadImage("theater/Theater-Background.png");

// chairboxImage = loadImage("theater/Chair-box.png");
// chairsImage = loadImage("theater/Chairs.png");
// chairsReservedImage = loadImage("theater/Chairs-reserved.png");
// curtainLeft = loadImage("theater/Curtain-Left.png");
// curtainRight = loadImage("theater/Curtain-right.png");
// doorLeft = loadImage("theater/Door-Left.png");
// doorRight = loadImage("theater/Door-Right.png");
// exit = loadImage("theater/Exit.png");
// konfetti = loadImage("theater/Konfetti.png");
// reservedBox = loadImage("theater/Reserved-Box.png");
// spotlightDown = loadImage("theater/Spotlight-down.png");
// spotlightOff = loadImage("theater/Spotlight-off.png");
// spotlightOn = loadImage("theater/Spotlight-on.png");
// supportBeam = loadImage("theater/Support-beam.png");
// teleprompterOff = loadImage("theater/Teleprompter-Off.png");
// teleprompterOn = loadImage("theater/Teleprompter-On.png");

class Task extends Button {
  constructor(imageX, imageY, scale, hitboxX, hitboxY, width, height, img) {
    super(hitboxX, hitboxY);
    this.imageX = imageX;
    this.imageY = imageY;
    this.scale = scale;
    this.hitboxX = hitboxX;
    this.hitboxY = hitboxY;
    this.width = width;
    this.height = height;
    this.img = img;
  }

  display() {
    // console.log("hi");
    // image(actorImage, 100, 100, 100, 100);

    push();
    noStroke();

    translate(
      this.imageX - (this.img.width / 2) * this.scale,
      this.imageY - (this.img.height / 2) * this.scale
    );
    //console.log(this.img);

    image(
      this.img,
      0,
      0,
      this.img.width * this.scale,
      this.img.height * this.scale
    );

    pop();
    // ellipse(this.x, this.y, 10);
  }
}

let actor = new Task(200, 200, 1, 180, 180, 160, 170, actorImg);
let broom = new Task(400, 200, 1, 400, 200, 90, 190, broomImg);

function draw() {
  image(theaterImg, 0, 0);
  actor.display();
  // console.log("hi");
  actor.showHitbox();

  broom.display();
  broom.showHitbox();
}

function mouseClicked() {
  if (actor.hitTest()) {
    console.log("erfolg!!");
  }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
