export default class Startscreen {
  constructor(stressTestLogo) {
    this.swipeUp = true;
    this.startGame = false;

    this.stressTestLogo = stressTestLogo;
  }

  swipeUpAnimation() {
    gsap.to(this.stressTestLogo, {
      duration: 0.7,
      delay: 1,
      imageY: 220,
      ease: "power4.out",
    });
  }

  startButton() {
    push();
    fill(255, 75, 9);
    rect(565, 500, 150, 50);

    fill(250, 250, 250);
    textFont("Allerta");
    textSize(22);
    strokeWeight(0);
    textAlign(CENTER);
    text("Bereit", 640, 533);
    pop();
  }

  display() {
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
    if (mouseX >= 565 && mouseX <= 715 && mouseY >= 500 && mouseY <= 550) {
      this.startGame = true;
    }
  }
}
