import InstallLights from "./installLights.js";
import SetupChairs from "./setupChairs.js";
import { mainscreenInstruments } from "../p5setup.js";
mainscreenInstruments;
import {
  boxes,
  broom,
  chairbox,
  chairsReserved,
  chairs,
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
    this.installLights.checkMouseClicks(mainscreenInstruments);
    this.setupChairs.checkMouseClicks(mainscreenInstruments, chairbox);
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

    chairbox.showHitbox();

    stage.display();
    curtainLeft.display();
    curtainRight.display();
    exit.scale = 0.7;
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
