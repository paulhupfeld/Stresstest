function setup() {
  createCanvas(1280, 720);
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

export let actorImage;
export let boxesImage;
export let broomImage;
export let chairboxImage;
export let chairsReservedImage;
export let chairsImage;
export let curtainLeftImage;
export let curtainRightImage;
export let doorLeftImage;
export let doorRightImage;
export let exitImage;
export let konfettiImage;
export let reservedBoxImage;
export let spotlightDownImage;
export let spotlightOffImage;
export let spotlightOnImage;
export let stageImage;
export let supportBeamImage;
export let teleprompterOffImage;
export let teleprompterOnImage;
export let theaterBackgroundImage;

function preload() {
  actorImage = loadImage("javascript/theater/actorImage.png");
  boxesImage = loadImage("javascript/theater/Boxes.png");
  broomImage = loadImage("javascript/theater/Broom-n-bucket.png");
  chairboxImage = loadImage("javascript/theater/Chair-box.png");
  chairsReservedImage = loadImage("javascript/theater/Chairs-reserved.png");
  chairsImage = loadImage("javascript/theater/Chairs.png");
  curtainLeftImage = loadImage("javascript/theater/Curtain-Left.png");
  curtainRightImage = loadImage("javascript/theater/Curtain-right.png");
  doorLeftImage = loadImage("javascript/theater/Door-Left.png");
  doorRightImage = loadImage("javascript/theater/Door-Right.png");
  exitImage = loadImage("javascript/theater/Exit.png");
  konfettiImage = loadImage("javascript/theater/Konfetti.png");
  reservedBoxImage = loadImage("javascript/theater/Reserved-Box.png");
  spotlightDownImage = loadImage("javascript/theater/Spotlight-down.png");
  spotlightOffImage = loadImage("javascript/theater/Spotlight-off.png");
  spotlightOnImage = loadImage("javascript/theater/Spotlight-on.png");
  stageImage = loadImage("javascript/theater/Stage.png");
  supportBeamImage = loadImage("javascript/theater/Support-beam.png");
  teleprompterOffImage = loadImage("javascript/theater/Teleprompter-Off.png");
  teleprompterOnImage = loadImage("javascript/theater/Teleprompter-On.png");
  theaterBackgroundImage = loadImage(
    "javascript/theater/Theater-Background.png"
  );
}

window.preload = preload;
