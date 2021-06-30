let octagonImage = loadImage("assets/Octagon.png");

class DisplayTime {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.scale = 3;
    this.counterMinutes = 120;
    this.counterSecounds = 59;
  }
  display() {
    background(128);
    push();
    translate(100, 100);
    scale(this.scale);
    image(octagonImage, 10, 30, 100, 100);

    fill(241, 208, 58);
    textSize(30);
    textFont("Pop Warner");
    textAlign(CENTER, CENTER);
    text(this.counterMinutes + ":" + this.counterSecounds, 60, 80);
    pop();
  }
}

let displayTime = new DisplayTime();

function draw() {
  displayTime.display();
}
