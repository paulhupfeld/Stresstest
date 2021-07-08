export default class Startscreen {
  constructor(stressTestLogoImage) {
    this.stressTestLogoImage = stressTestLogoImage;
  }

  display() {
    console.log("display Startscreen");
    image(this.stressTestLogoImage, 100, 100);
  }
}
