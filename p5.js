let xoff = 0.0;
let xincrement = 0.015;

function setup() {
  createCanvas(710, 400);
  background(0);
  noStroke();
}

function draw() {
  fill(0, 5);
  rect(0, 0, width, height);


  let n = noise(xoff) * width;

  xoff += xincrement;

  fill(200);
  ellipse(n, height / 2, 64, 64);

fill(200);
  ellipse(n, height / 20, 64, 64);
  
  stroke(0, 0, 0, 15);

  
  fill(200);
  ellipse(n, height / 1, 64, 64);
  
  
}
