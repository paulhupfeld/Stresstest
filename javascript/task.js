import Button from "./button.js";

actorImage = loadImage("./actorImage.png");

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
