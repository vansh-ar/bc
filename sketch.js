var fixedRect, movingRect;
var cap, recap;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
cap = createSprite(200,300,80,80)
cap.shapeColor = "green";
cap.debug = true;
cap.velocityX=3

recap = createSprite(800,300,80,80)
recap.shapeColor = "green";
recap.velocityX=-2

}

function draw() {
  background(0,0,0);  

  bounceOff(cap,recap);
  bounceOff(movingRect,fixedRect);
  drawSprites();
}
