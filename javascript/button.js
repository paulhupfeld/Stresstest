export default class Button {
  constructor(hitboxX, hitboxY) {
    this.hitboxX = hitboxX;
    this.hitboxY = hitboxY;
  }

  showHitbox() {
    push();
    noFill();
    stroke(255, 0, 0);
    strokeWeight(3);
    rect(
      this.hitboxX - this.width / 2,
      this.hitboxY - this.height / 2,
      this.width,
      this.height
    );
    pop();
  }

  hitTest() {
    if (
      mouseX > this.hitboxX - this.width / 2 &&
      mouseX < this.hitboxX + this.width / 2 &&
      mouseY > this.hitboxY - this.height / 2 &&
      mouseY < this.hitboxY + this.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}
