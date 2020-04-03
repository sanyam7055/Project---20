
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(600,600);
}


function draw(){
background(255);
stroke(255);

if(mouseX>=400){
  background(237,34,93);
}
if(mouseX<=200){
  background(0,255,192);
}
if(mouseX>200 && mouseX<400 ){
  background(170,0,255);
}
ellipse(mouseX,200,50,50);
ellipse(255);

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}