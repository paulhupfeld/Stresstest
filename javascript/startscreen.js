export default class Startscreen {
  constructor(stressTestLogo) {
    this.swipeUp = true;
    this.stressTestLogo = stressTestLogo;
  }

  swipeUpAnimation() {
    console.log("swipeUp");
    gsap.to(this.stressTestLogo, {
      duration: 0.8,
      delay: 1,
      // scale: 1,
      imageY: 210,
      ease: "power4.out",
    });
  }

  display() {
    console.log("display Startscreen");
    background(38, 38, 38);
    this.stressTestLogo.scale = 0.15;
    this.stressTestLogo.imageY = 210;
    this.stressTestLogo.display();
    if (this.swipeUp) {
      // this.swipeUpAnimation();
      this.swipeUp = false;
    }
  }
}
