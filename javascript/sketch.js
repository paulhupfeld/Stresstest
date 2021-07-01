// Offene Fragen:
// Array[0].title abbilden

// if start=true funktion auslagern
// display wieder in installLights einbauen

// für jede klasse eigene aufgabe?

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
      180,
      180,
      160,
      170,
      theaterBackgroundImage
    );
    broom = new TaskImage(1150, 480, 1150, 540, 100, 80, broomImage);
    boxes = new TaskImage(640, 360, 180, 180, 160, 170, boxesImage);
    chairbox = new TaskImage(130, 555, 129, 555, 150, 100, chairboxImage);
    chairsReserved = new TaskImage(
      640,
      485,
      180,
      180,
      160,
      170,
      chairsReservedImage
    );
    chairs = new TaskImage(640, 485, 180, 180, 160, 170, chairsImage);
    curtainLeft = new TaskImage(
      120,
      350,

      180,
      180,
      160,
      170,
      curtainLeftImage
    );
    curtainRight = new TaskImage(
      1160,
      350,

      180,
      180,
      160,
      170,
      curtainRightImage
    );
    doorLeft = new TaskImage(253, 386, 180, 180, 160, 170, doorLeftImage);
    doorRight = new TaskImage(1030, 386, 180, 180, 160, 170, doorRightImage);
    exit = new TaskImage(76, 230, 75, 230, 110, 60, exitImage);
    konfetti = new TaskImage(640, 360, 180, 180, 160, 170, konfettiImage);
    reservedBox = new TaskImage(1135, 612, 1135, 613, 60, 45, reservedBoxImage);
    spotlightDown = new TaskImage(
      640,
      360,
      245,
      630,
      170,
      45,
      spotlightDownImage
    );
    spotlightOff = new TaskImage(
      640,
      360,
      180,
      180,
      160,
      170,
      spotlightOffImage
    );
    spotlightOn = new TaskImage(640, 360, 180, 180, 160, 170, spotlightOnImage);
    stage = new TaskImage(640, 360, 180, 180, 160, 170, stageImage);
    supportBeam = new TaskImage(640, 45, 180, 180, 160, 170, supportBeamImage);
    teleprompterOff = new TaskImage(
      540,
      220,
      540,
      220,
      150,
      90,
      teleprompterOffImage
    );
    teleprompterOn = new TaskImage(
      540,
      220,
      180,
      180,
      160,
      170,
      teleprompterOnImage
    );
    curtainClosed = new TaskImage(
      640,
      360,
      180,
      180,
      160,
      170,
      curtainClosedImage
    );
    emergencySign = new TaskImage(
      1020,
      240,
      180,
      180,
      160,
      170,
      emergencySignImage
    );

    installLights = new InstallLights(
      "Teleprompter programmieren",
      13,
      spotlightDown,
      spotlightOff
    );

    prioBoard = new PrioBoard();

    start = false;
  }

  theaterBackground.display();
  konfetti.display();
  teleprompterOff.display();
  doorLeft.display();
  doorRight.display();
  exit.display();
  curtainLeft.display();
  curtainRight.display();

  // if (installLights.done === false) {
  //   spotlightDown.display();
  // } else {
  //   spotlightOff.display();
  // }

  installLights.displayImage();

  stage.display();

  supportBeam.display();

  prioBoard.display();

  // noFill();
  // strokeWeight(5);
  // stroke(200, 0, 0);
  // rect(150, 600, 200, 50);
  // rect(915, 600, 200, 50);

  if (installLights.clicked) {
    installLights.displayTaskInfo();
  }

  //   broom.display();
  //   emergencySign.display();
  //   boxes.display();
  //   chairbox.display();
  //   chairs.display();
  //   chairsReserved.display();
  //   reservedBox.display();
  //   teleprompterOn.display();
  //   spotlightOn.display();

  //   curtainClosed.display();

  //Hitboxen:
  //   broom.showHitbox();
  //   chairbox.showHitbox();
  //   reservedBox.showHitbox();
  //   teleprompterOff.showHitbox();

  // console.log(installLights.isOnPrioBoard);
}

let index;

function mouseClicked() {
  installLights.checkMouseClicks();

  if (
    installLights.prioButtonHitTest() &&
    installLights.isOnPrioBoard === false
  ) {
    prioBoard.tasksOnPrioBoard.push(installLights);

    console.log(prioBoard.tasksOnPrioBoard);
    installLights.isOnPrioBoard = true;
  } else if (installLights.prioButtonHitTest() && installLights.isOnPrioBoard) {
    index = prioBoard.tasksOnPrioBoard.indexOf(installLights);
    prioBoard.tasksOnPrioBoard.splice(index, 1);

    console.log(prioBoard.tasksOnPrioBoard);
    installLights.isOnPrioBoard = false;
  }
}

window.draw = draw;
window.mouseClicked = mouseClicked;
