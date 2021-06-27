function setup() {
  let canvas = createCanvas(600, 595);
  // canvas.parent("sketch-holder");
  frameRate(30);
}
window.setup = setup;

let actorImage;
// let bush;
// let animal;
// let trash;
// let weed;
// let stump;
// let log;
// let deko;
// let stone1;
// let stone2;

function preload() {
  actorImage = loadImage("./assets/actorImage.png");
  // bush = loadImage("./images/bush1.png");
  // animal = loadImage("./images/animal.png");
  // trash = loadImage("./images/trash.png");
  // weed = loadImage("./images/weed.png");
  // stump = loadImage("./images/stump.png");
  // log = loadImage("./images/log.png");
  // deko = loadImage("./images/deko.png");
  // stone1 = loadImage("./images/stone1.png");
  // stone2 = loadImage("./images/stone2.png");
}

export { actorImage };

window.preload = preload;
