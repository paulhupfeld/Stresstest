// Offene Fragen:
// Connection PrioBoard & InstallLights

import PrioBoard from "./prioBoard.js";
import Navigator from "./navigator.js";
// import InstallLights from "./installLights.js";
// import SetupChairs from "./setupChairs.js";

import {
  boxes,
  broom,
  chairbox,
  chairsReserved,
  chairs,
  coffeeCup,
  curtainLeft,
  curtainRight,
  doorLeft,
  doorRight,
  exit,
  konfetti,
  reservedBox,
  spotlightDown,
  spotlightOff,
  spotlightOn,
  stage,
  supportBeam,
  teleprompterOff,
  teleprompterOn,
  theaterBackground,
  curtainClosed,
  emergencySign,
} from "../p5setup.js";

let start = true;

// let installLights;
// let setupChairs;
// let auditorium;
let navigator;

export let prioBoard;

function draw() {
  if (start === true) {
    // installLights = new InstallLights("Scheinwerfer anbringen", 13);

    // setupChairs = new SetupChairs("Stühle aufstellen", 12);

    navigator = new Navigator();

    navigator.createObjects();

    prioBoard = new PrioBoard();

    start = false;
  }

  navigator.display();

  // setupChairs.displayImage(boxes, chairbox, chairs);
  // installLights.displayImage(spotlightDown, spotlightOff);

  stage.display();
  curtainLeft.display();
  curtainRight.display();
  exit.display();
  supportBeam.display();

  // setupChairs.displayTaskInfoPopUp();
  // installLights.displayTaskInfoPopUp();

  broom.display();
  emergencySign.display();
  // chairsReserved.display();
  reservedBox.display();
  teleprompterOn.display();
  // spotlightOn.display();
  //   curtainClosed.display();

  prioBoard.display(coffeeCup);

  //Hitboxen:
  //   reservedBox.showHitbox();
  //   teleprompterOff.showHitbox();

  // console.log("draw");
}

function mouseClicked() {
  // installLights.checkMouseClicks(prioBoard);
  // setupChairs.checkMouseClicks(prioBoard, chairbox);

  navigator.checkMouseClicks();
  prioBoard.checkMouseClicks();
}

window.draw = draw;
window.mouseClicked = mouseClicked;
