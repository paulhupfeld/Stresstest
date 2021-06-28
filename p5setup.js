function setup() {
  createCanvas(600, 595);
  frameRate(30);
}
window.setup = setup;

new p5();
var width = windowWidth;
var height = windowHeight;

window.addEventListener("resize", function () {
  resizeCanvas(width, height);
  clear();
});

window.preload = preload;

let actorImage;

function preload() {
  actorImage = loadImage("javascript/theater/actorImage.png");
}

export { actorImage };
