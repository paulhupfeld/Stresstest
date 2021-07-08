// Offene Fragen:
// Connection PrioBoard & InstallLights

import TaskImage from "./taskImage.js";
import PrioBoard from "./prioBoard.js";
import InstallLights from "./installLights.js";
import SetupChairs from "./setupChairs.js";

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

let installLights;

let setupChairs;

let prioBoard;

function draw() {
  if (start === true) {
    installLights = new InstallLights("Scheinwerfer anbringen", 13);

    setupChairs = new SetupChairs("Stühle aufstellen", 12);

    prioBoard = new PrioBoard();

    start = false;
  }

  theaterBackground.display();
  konfetti.display();
  teleprompterOff.display();
  doorLeft.display();
  doorRight.display();

  setupChairs.displayImage(boxes, chairbox, chairs);
  installLights.displayImage(spotlightDown, spotlightOff);

  stage.display();
  curtainLeft.display();
  curtainRight.display();
  exit.display();
  supportBeam.display();

  installLights.displayTaskInfoPopUp();
  setupChairs.displayTaskInfoPopUp();

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

  // console.log(installLights.isOnPrioBoard);
  console.log("draw");
}

function mouseClicked() {
  installLights.checkMouseClicks(prioBoard);
  setupChairs.checkMouseClicks(prioBoard, chairbox);

  prioBoard.checkMouseClicks();
}

window.draw = draw;
window.mouseClicked = mouseClicked;
