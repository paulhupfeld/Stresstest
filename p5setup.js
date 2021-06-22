function setup() {
  let canvas = createCanvas(600, 595);
  // canvas.parent("sketch-holder");
  frameRate(30);
}
window.setup = setup;
/*
new p5();
var width = windowWidth;
var height = windowHeight;
*/

let tree;
let bush;
let animal;
let trash;
let weed;
let stump;
let log;
let deko;
let stone1;
let stone2;

function preload() {
  tree = loadImage("./images/tree1.png");
  bush = loadImage("./images/bush1.png");
  animal = loadImage("./images/animal.png");
  trash = loadImage("./images/trash.png");
  weed = loadImage("./images/weed.png");
  stump = loadImage("./images/stump.png");
  log = loadImage("./images/log.png");
  deko = loadImage("./images/deko.png");
  stone1 = loadImage("./images/stone1.png");
  stone2 = loadImage("./images/stone2.png");
}

export { tree, bush, animal, trash, weed, stump, log, deko, stone1, stone2 };

window.preload = preload;
