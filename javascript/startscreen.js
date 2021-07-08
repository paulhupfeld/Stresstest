export default class Startscreen {
  constructor(stressTestLogo) {
    this.swipeUp = true;
    this.stressTestLogo = stressTestLogo;
    this.startGame = false;
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

  startButton() {
    push();
    fill(250, 250, 250);
    rect(565, 500, 150, 50);
    fill(255, 75, 9);
    textFont("Pop Warner");
    textSize(20);
    text("BEREIT?", 610, 533);
    pop();
  }

  display() {
    // console.log("display Startscreen");
    background(38, 38, 38);
    this.startButton();
    this.stressTestLogo.scale = 0.15;
    // this.stressTestLogo.imageY = 210;
    this.stressTestLogo.display();
    if (this.swipeUp) {
      this.swipeUpAnimation();
      this.swipeUp = false;
    }
  }
  checkMouseClicks() {
    console.log("click");
    if (mouseX >= 565 && mouseX <= 715 && mouseY >= 500 && mouseY <= 550) {
      this.startGame = true;
    }
  }
}
