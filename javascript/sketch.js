import Task from "./task.js";

let actor = new Task(100, 100, 100, 100, actorImage);

function draw() {
  actor.display();
  // console.log("hoo");
}

// window.draw = draw;
// window.mousePressed = mousePressed;
