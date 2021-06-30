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
export let emergencySignImage;
export let exitImage;
export let konfettiImage;
export let octagonImage;
export let prioBoardImage;
export let reservedBoxImage;
export let spotlightDownImage;
export let spotlightOffImage;
export let spotlightOnImage;
export let stageImage;
export let supportBeamImage;
export let teleprompterOffImage;
export let teleprompterOnImage;
export let theaterBackgroundImage;
export let curtainClosedImage;

function preload() {
  actorImage = loadImage("javascript/assets/actorImage.png");
  boxesImage = loadImage("javascript/assets/Boxes.png");
  broomImage = loadImage("javascript/assets/Broom-n-bucket.png");
  chairboxImage = loadImage("javascript/assets/Chair-box.png");
  chairsReservedImage = loadImage("javascript/assets/Chairs-reserved.png");
  chairsImage = loadImage("javascript/assets/Chairs.png");
  curtainLeftImage = loadImage("javascript/assets/Curtain-Left.png");
  curtainRightImage = loadImage("javascript/assets/Curtain-right.png");
  doorLeftImage = loadImage("javascript/assets/Door-Left.png");
  doorRightImage = loadImage("javascript/assets/Door-Right.png");
  exitImage = loadImage("javascript/assets/Exit.png");
  konfettiImage = loadImage("javascript/assets/Konfetti.png");
  reservedBoxImage = loadImage("javascript/assets/Reserved-Box.png");
  spotlightDownImage = loadImage("javascript/assets/Spotlight-down.png");
  spotlightOffImage = loadImage("javascript/assets/Spotlight-off.png");
  spotlightOnImage = loadImage("javascript/assets/Spotlight-on.png");
  stageImage = loadImage("javascript/assets/Stage.png");
  supportBeamImage = loadImage("javascript/assets/Support-beam.png");
  teleprompterOffImage = loadImage("javascript/assets/Teleprompter-Off.png");
  teleprompterOnImage = loadImage("javascript/assets/Teleprompter-On.png");
  theaterBackgroundImage = loadImage(
    "javascript/assets/Theater-Background.png"
  );
  curtainClosedImage = loadImage("javascript/assets/Curtain-closed.png");
  emergencySignImage = loadImage("javascript/assets/Emergency-sign.png");
  prioBoardImage = loadImage("javascript/assets/Prioboard.png");
  octagonImage = loadImage("javascript/assets/Octagon.png");
}

window.preload = preload;
