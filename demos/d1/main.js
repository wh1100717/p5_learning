// Generated by CoffeeScript 1.9.0
var draw, setup;

setup = function() {
  createCanvas(800, 600).parent("main-page");
  return background(155);
};

draw = function() {
  fill(mouseIsPressed ? 0 : 255);
  stroke(mouseIsPressed ? 255 : 0);
  if (mouseX !== 0 && mouseY !== 0) {
    return ellipse(mouseX, mouseY, 80, 80);
  }
};
