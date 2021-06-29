import Button from "./button.js";

import {
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
  curtainClosedImage,
  emergencySignImage,
} from "../p5setup.js";

class TaskImage extends Button {
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
    // this.title = title;
    // this.time = time;
    // this.prioboard = false;
    // this.done = false;
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

let broom;
let boxes;
let chairbox;
let chairsReserved;
let chairs;
let curtainLeft;
let curtainRight;
let doorLeft;
let doorRight;
let exit;
let konfetti;
let reservedBox;
let spotlightDown;
let spotlightOff;
let spotlightOn;
let stage;
let supportBeam;
let teleprompterOff;
let teleprompterOn;
let theaterBackground;
let curtainClosed;
let emergencySign;

function draw() {
  if (start === true) {
    theaterBackground = new TaskImage(
      640,
      360,
      1,
      180,
      180,
      160,
      170,
      theaterBackgroundImage
    );
    broom = new TaskImage(1150, 480, 1, 180, 180, 160, 170, broomImage);
    boxes = new TaskImage(640, 360, 1, 180, 180, 160, 170, boxesImage);

    chairbox = new TaskImage(130, 555, 1, 180, 180, 160, 170, chairboxImage);
    chairsReserved = new TaskImage(
      640,
      485,
      1,
      180,
      180,
      160,
      170,
      chairsReservedImage
    );
    chairs = new TaskImage(640, 485, 1, 180, 180, 160, 170, chairsImage);
    curtainLeft = new TaskImage(
      120,
      350,
      1,
      180,
      180,
      160,
      170,
      curtainLeftImage
    );
    curtainRight = new TaskImage(
      1160,
      350,
      1,
      180,
      180,
      160,
      170,
      curtainRightImage
    );
    doorLeft = new TaskImage(253, 386, 1, 180, 180, 160, 170, doorLeftImage);
    doorRight = new TaskImage(1030, 386, 1, 180, 180, 160, 170, doorRightImage);
    exit = new TaskImage(76, 230, 1, 180, 180, 160, 170, exitImage);
    konfetti = new TaskImage(640, 360, 1, 180, 180, 160, 170, konfettiImage);
    reservedBox = new TaskImage(
      1135,
      612,
      1,
      180,
      180,
      160,
      170,
      reservedBoxImage
    );
    spotlightDown = new TaskImage(
      640,
      360,
      1,
      180,
      180,
      160,
      170,
      spotlightDownImage
    );
    spotlightOff = new TaskImage(
      640,
      360,
      1,
      180,
      180,
      160,
      170,
      spotlightOffImage
    );
    spotlightOn = new TaskImage(
      640,
      360,
      1,
      180,
      180,
      160,
      170,
      spotlightOnImage
    );
    stage = new TaskImage(640, 360, 1, 180, 180, 160, 170, stageImage);
    supportBeam = new TaskImage(
      640,
      45,
      1,
      180,
      180,
      160,
      170,
      supportBeamImage
    );
    teleprompterOff = new TaskImage(
      540,
      220,
      1,
      180,
      180,
      160,
      170,
      teleprompterOffImage
    );
    teleprompterOn = new TaskImage(
      540,
      220,
      1,
      180,
      180,
      160,
      170,
      teleprompterOnImage
    );
    curtainClosed = new TaskImage(
      640,
      360,
      1,
      180,
      180,
      160,
      170,
      curtainClosedImage
    );
    emergencySign = new TaskImage(
      1020,
      240,
      1,
      180,
      180,
      160,
      170,
      emergencySignImage
    );

    start = false;
  }

  theaterBackground.display();
  konfetti.display();
  teleprompterOff.display();
  doorLeft.display();
  doorRight.display();
  broom.display();
  emergencySign.display();
  //boxes.display();
  chairbox.display();
  chairs.display();
  chairsReserved.display();

  reservedBox.display();
  spotlightDown.display();
  stage.display();
  //curtainClosed.display();
  curtainLeft.display();
  curtainRight.display();
  supportBeam.display();

  exit.display();

  // teleprompterOn.display();
  spotlightOff.display();
  //spotlightOn.display();
  // ... .showHitbox();
}

function mouseClicked() {
  if (curtainLeft.hitTest() || curtainRight.hitTest()) {
    console.log("Vorhang zu");
  }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
