window.setup = setup;

new p5();
var width = windowWidth;
var height = windowHeight;

window.addEventListener("resize", function () {
  resizeCanvas(width, height);
  clear();
});

export let actorImage,
  boxesImage,
  broomImage,
  chairboxImage,
  chairsReservedImage,
  chairsImage,
  coffeeCupImage,
  curtainClosedImage,
  curtainLeftImage,
  curtainRightImage,
  curtainRopeLeftImage,
  curtainRopeRightImage,
  doorLeftImage,
  doorRightImage,
  emergencySignImage,
  exitImage,
  konfettiImage,
  octagonImage,
  prioBoardImage,
  reservedBoxImage,
  spotlightDownImage,
  spotlightOffImage,
  spotlightOnImage,
  stageImage,
  bereitButtonImage,
  stressTestLogoImage,
  supportBeamImage,
  teleprompterOffImage,
  teleprompterOnImage,
  theaterBackgroundImage;

function preload() {
  actorImage = loadImage("javascript/assets/actorImage.png");
  boxesImage = loadImage("javascript/assets/Boxes.png");
  broomImage = loadImage("javascript/assets/Broom-n-bucket.png");
  chairboxImage = loadImage("javascript/assets/Chair-box.png");
  chairsReservedImage = loadImage("javascript/assets/Chairs-reserved.png");
  chairsImage = loadImage("javascript/assets/Chairs.png");
  coffeeCupImage = loadImage("javascript/assets/CoffeeCup.png");
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
  stressTestLogoImage = loadImage("javascript/assets/StressTestLogo.png");
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
  curtainRopeLeftImage = loadImage("javascript/assets/CurtainRope1.png");
  curtainRopeRightImage = loadImage("javascript/assets/CurtainRope2.png");
}

import TaskImage from "./javascript/taskImage.js";
import MainscreenInstruments from "./javascript/mainscreenInstruments.js";

export let boxes,
  broom,
  chairbox,
  chairsReserved,
  chairs,
  coffeeCup,
  curtainClosed,
  curtainLeft,
  curtainRight,
  curtainRopeRight,
  curtainRopeLeft,
  doorLeft,
  doorRight,
  emergencySign,
  exit,
  konfetti,
  octagon,
  reservedBox,
  spotlightDown,
  spotlightOff,
  spotlightOn,
  stage,
  stressTestLogo,
  supportBeam,
  teleprompterOff,
  teleprompterOn,
  theaterBackground,
  mainscreenInstruments;

function setup() {
  createCanvas(1280, 720);
  frameRate(30);
  broom = new TaskImage(1150, 480, 1140, 500, 50, 120, broomImage);
  boxes = new TaskImage(700, 370, 180, 180, 160, 170, boxesImage);
  // chairbox = new TaskImage(190, 565, 189, 565, 150, 100, chairboxImage);
  chairbox = new TaskImage(195, 565, 205, 560, 120, 70, chairboxImage);

  chairsReserved = new TaskImage(
    640,
    485,
    180,
    180,
    160,
    170,
    chairsReservedImage
  );
  chairs = new TaskImage(640, 485, 180, 180, 160, 170, chairsImage);
  curtainLeft = new TaskImage(
    120,
    350,

    1200,
    350,
    70,
    300,
    curtainLeftImage
  );
  curtainRight = new TaskImage(
    1160,
    350,

    180,
    180,
    160,
    170,
    curtainRightImage
  );
  curtainRopeRight = new TaskImage(
    1200,
    230,
    200,
    200,
    160,
    170,
    curtainRopeRightImage
  );
  curtainRopeLeft = new TaskImage(
    1200,
    210,
    200,
    200,
    160,
    170,
    curtainRopeLeftImage
  );
  coffeeCup = new TaskImage(0, 0, 180, 180, 160, 170, coffeeCupImage);
  doorLeft = new TaskImage(253, 386, 180, 180, 160, 170, doorLeftImage);
  doorRight = new TaskImage(1030, 386, 180, 180, 160, 170, doorRightImage);
  exit = new TaskImage(160, 380, 125, 350, 75, 50, exitImage);
  exit.scale = 0.7;
  konfetti = new TaskImage(640, 360, 180, 180, 160, 170, konfettiImage);
  reservedBox = new TaskImage(670, 590, 675, 595, 60, 55, reservedBoxImage);
  spotlightDown = new TaskImage(
    640,
    360,
    245,
    630,
    170,
    45,
    spotlightDownImage
  );
  spotlightOff = new TaskImage(640, 360, 180, 180, 160, 170, spotlightOffImage);
  spotlightOn = new TaskImage(640, 360, 180, 180, 160, 170, spotlightOnImage);
  stage = new TaskImage(640, 360, 180, 180, 160, 170, stageImage);
  stressTestLogo = new TaskImage(
    640,
    360,
    180,
    180,
    160,
    170,
    stressTestLogoImage
  );
  supportBeam = new TaskImage(640, 45, 180, 180, 160, 170, supportBeamImage);
  teleprompterOff = new TaskImage(
    540,
    220,
    540,
    220,
    150,
    90,
    teleprompterOffImage
  );
  teleprompterOn = new TaskImage(
    540,
    220,
    180,
    180,
    160,
    170,
    teleprompterOnImage
  );
  curtainClosed = new TaskImage(
    640,
    360,
    180,
    180,
    160,
    170,
    curtainClosedImage
  );
  emergencySign = new TaskImage(
    1020,
    240,
    180,
    180,
    160,
    170,
    emergencySignImage
  );
  theaterBackground = new TaskImage(
    640,
    360,
    180,
    180,
    160,
    170,
    theaterBackgroundImage
  );

  mainscreenInstruments = new MainscreenInstruments();
}

window.preload = preload;
