import TaskImage from "./taskImage.js";
import PrioBoard from "./prioBoard.js";
import InstallLights from "./installLights.js";

export default class Navigator {
  constructor() {
    this.timeInSeconds = 140 * 60;
    this.actualRoom = "auditory";
  }
}
