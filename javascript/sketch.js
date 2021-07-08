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
let navigator;

export let prioBoard;

function draw() {
  if (start === true) {
    navigator = new Navigator();

    navigator.createObjects();

    prioBoard = new PrioBoard();

    start = false;
  }

  navigator.display();

  prioBoard.display(coffeeCup);

  //Hitboxen:
  //   reservedBox.showHitbox();
  //   teleprompterOff.showHitbox();

  // console.log("draw");
}

function mouseClicked() {
  navigator.checkMouseClicks();
  prioBoard.checkMouseClicks();
}

window.draw = draw;
window.mouseClicked = mouseClicked;
