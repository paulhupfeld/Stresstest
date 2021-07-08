import InstallLights from "./installLights.js";
import SetupChairs from "./setupChairs.js";
import { prioBoard } from "./sketch.js";

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

export default class Auditorium {
  constructor(installLights, setupChairs) {
    this.installLights = installLights;
    this.setupChairs = setupChairs;
  }

  createObjects() {
    this.installLights = new InstallLights("Scheinwerfer anbringen", 13);

    this.setupChairs = new SetupChairs("Stühle aufstellen", 12);
  }

  checkMouseClicks() {
    this.installLights.checkMouseClicks(prioBoard);
    this.setupChairs.checkMouseClicks(prioBoard, chairbox);
  }

  displayPopUps() {
    this.setupChairs.displayTaskInfoPopUp();
    this.installLights.displayTaskInfoPopUp();
  }
  display() {
    theaterBackground.display();
    konfetti.display();
    teleprompterOff.display();
    doorLeft.display();
    doorRight.display();

    this.setupChairs.displayImage(boxes, chairbox, chairs);
    this.installLights.displayImage(spotlightDown, spotlightOff);

    stage.display();
    curtainLeft.display();
    curtainRight.display();
    exit.display();
    supportBeam.display();

    broom.display();
    emergencySign.display();
    // chairsReserved.display();
    reservedBox.display();
    teleprompterOn.display();
    // spotlightOn.display();
    //   curtainClosed.display();

    this.displayPopUps();
  }
}
