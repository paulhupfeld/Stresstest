import InstallLights from "./installLights.js";
import TurnOnLights from "./turnOnLights.js";
import SetupChairs from "./setupChairs.js";
import PlaceReservationSigns from "./placeReservationSigns.js";
import ProgramPrompter from "./programPrompter.js";
import ClearFloor from "./clearFloor.js";
import CloseCurtain from "./closeCurtain.js";

import { mainscreenInstruments } from "../p5setup.js";

import {
  boxes,
  broom,
  chairbox,
  chairsReserved,
  chairs,
  curtainLeft,
  curtainRight,
  curtainRopeRight,
  curtainRopeLeft,
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
    placeReservationSigns,
    clearFloor,
    closeCurtain
  ) {
    this.installLights = installLights;
    this.setupChairs = setupChairs;
    this.turnOnLights = turnOnLights;
    this.placeReservationSigns = placeReservationSigns;
    this.programPrompter = programPrompter;
    this.clearFloor = clearFloor;
    this.closeCurtain = closeCurtain;
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
      "Reserviert-Schilder platzieren",
      4,
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
    this.clearFloor = new ClearFloor("Sauber machen", 9, broom, konfetti);
    this.closeCurtain = new CloseCurtain(
      "Vorhang schließen",
      2,
      curtainLeft,
      curtainRight,
      curtainClosed,
      curtainRopeRight,
      curtainRopeLeft
    );
  }

  displayPopUps() {
    this.installLights.displayTaskInfoPopUp();
    this.turnOnLights.displayTaskInfoPopUp();
    this.setupChairs.displayTaskInfoPopUp();
    this.placeReservationSigns.displayTaskInfoPopUp();
    this.programPrompter.displayTaskInfoPopUp();
    this.clearFloor.displayTaskInfoPopUp();
    this.closeCurtain.displayTaskInfoPopUp();
  }

  display() {
    theaterBackground.display();
    doorLeft.display();
    doorRight.display();

    this.clearFloor.displayImage();
    this.setupChairs.displayImage(this.placeReservationSigns);
    this.placeReservationSigns.displayImage();
    this.installLights.displayImage(this.turnOnLights);
    this.programPrompter.displayImage();

    stage.display();
    exit.display();
    emergencySign.display();

    this.closeCurtain.displayImage();

    supportBeam.display();

    this.turnOnLights.displayImage();

    this.displayPopUps();
  }

  checkMouseClicks() {
    this.installLights.checkMouseClicks(
      mainscreenInstruments,
      this.closeCurtain
    );
    this.turnOnLights.checkMouseClicks(
      mainscreenInstruments,
      this.closeCurtain
    );
    this.setupChairs.checkMouseClicks(mainscreenInstruments, this.closeCurtain);
    this.placeReservationSigns.checkMouseClicks(
      mainscreenInstruments,
      this.closeCurtain
    );
    this.programPrompter.checkMouseClicks(
      mainscreenInstruments,
      this.closeCurtain
    );
    this.clearFloor.checkMouseClicks(mainscreenInstruments, this.closeCurtain);
    this.closeCurtain.checkMouseClicks(mainscreenInstruments);
  }
}
