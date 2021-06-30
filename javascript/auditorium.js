// Offene F rage: display wieder in installLights einbauen

import TaskImage from "./taskImage.js";
import PrioBoard from "./prioBoard.js";
import InstallLights from "./installLights.js";

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

let installLights;

let prioBoard;

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

    installLights = new InstallLights("Teleprompter programmieren", 13);

    prioBoard = new PrioBoard();

    start = false;
  }

  theaterBackground.display();
  konfetti.display();
  teleprompterOff.display();
  doorLeft.display();
  doorRight.display();
  exit.display();

  //   installLights.displayImage();
  if (installLights.done === false) {
    spotlightDown.display();
  } else {
    spotlightOff.display();
  }

  stage.display();
  curtainLeft.display();
  curtainRight.display();
  supportBeam.display();

  //   prioBoard.display();
  //   installLights.displayTaskInfo();

  // broom.display();
  // emergencySign.display();
  // boxes.display();
  // chairbox.display();
  // chairs.display();
  // chairsReserved.display();
  // reservedBox.display();

  // teleprompterOn.display();
  // spotlightOn.display();

  // ... .showHitbox();

  // broom.showHitbox();
  // chairbox.showHitbox();

  // reservedBox.showHitbox();
  // curtainClosed.showHitbox();
  // curtainLeft.showHitbox();
  // curtainRight.showHitbox();
  // teleprompterOn.showHitbox();
  // spotlightOn.showHitbox();
  // curtainClosed.display();
}

function mouseClicked() {
  installLights.checkMouseClicks();
}

window.draw = draw;
window.mouseClicked = mouseClicked;
