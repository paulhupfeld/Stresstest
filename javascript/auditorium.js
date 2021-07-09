import InstallLights from "./installLights.js";
import TurnOnLights from "./turnOnLights.js";
import SetupChairs from "./setupChairs.js";
import PlaceReservationSigns from "./placeReservationSigns.js";
import ProgramPrompter from "./programPrompter.js";
import { mainscreenInstruments } from "../p5setup.js";

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
  constructor(
    installLights,
    setupChairs,
    programPrompter,
    turnOnLights,
    placeReservationSigns
  ) {
    this.installLights = installLights;
    this.setupChairs = setupChairs;
    this.turnOnLights = turnOnLights;
    this.placeReservationSigns = placeReservationSigns;
    this.programPrompter = programPrompter;
  }

  createObjects() {
    this.installLights = new InstallLights(
      "Scheinwerfer anbringen",
      13,
      spotlightDown
    );
    this.turnOnLights = new TurnOnLights(
      "Lampen anschalten",
      2,
      spotlightOff,
      spotlightOn
    );
    this.setupChairs = new SetupChairs(
      "Stühle aufstellen",
      12,
      boxes,
      chairbox,
      reservedBox
    );
    this.placeReservationSigns = new PlaceReservationSigns(
      "Stühle aufstellen",
      12,
      reservedBox,
      chairs,
      chairsReserved
    );
    this.programPrompter = new ProgramPrompter(
      "Teleprompter programmieren",
      12,
      teleprompterOff,
      teleprompterOn
    );
  }

  displayPopUps() {
    this.installLights.displayTaskInfoPopUp();
    this.turnOnLights.displayTaskInfoPopUp();
    this.setupChairs.displayTaskInfoPopUp();
    this.placeReservationSigns.displayTaskInfoPopUp();
    this.programPrompter.displayTaskInfoPopUp();
  }

  display() {
    theaterBackground.display();
    konfetti.display();
    doorLeft.display();
    doorRight.display();

    this.setupChairs.displayImage(this.placeReservationSigns);
    this.placeReservationSigns.displayImage();

    this.installLights.displayImage(this.turnOnLights);
    this.programPrompter.displayImage();

    stage.display();
    curtainLeft.display();
    curtainRight.display();
    exit.scale = 0.7;
    exit.display();

    supportBeam.display();

    broom.display();
    emergencySign.display();
    // spotlightOn.display();
    //   curtainClosed.display();

    this.turnOnLights.displayImage();

    this.displayPopUps();
  }

  checkMouseClicks() {
    this.installLights.checkMouseClicks(mainscreenInstruments);
    this.turnOnLights.checkMouseClicks(mainscreenInstruments);
    this.setupChairs.checkMouseClicks(mainscreenInstruments);
    this.placeReservationSigns.checkMouseClicks(mainscreenInstruments);
    this.programPrompter.checkMouseClicks(mainscreenInstruments);
  }
}
