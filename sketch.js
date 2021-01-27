var fairy,sta,wall1,wall2;;
var fairyImage,starImage,fairyImage1;
var bgImage;
var sound;

function preload(){
   //preload the images here
   bgImage= loadImage("images/starnight.png"); 
   fairyImage= loadImage("images/fairy1.png");
   fairyImage1= loadImage("images/fairy.png");
   starImage= loadImage("images/star.png");

   sound= loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);
  fairy= createSprite(100,590,20,20);
  fairy.addImage(fairyImage1);
  fairy.scale=0.2;

  star= createSprite(500,270,20,20);
  star.addImage(starImage);
  star.scale=0.2;

  wall1= createSprite(790,375,5,750);
  wall1.shapeColor="black";
  wall2= createSprite(5,375,5,750);
  wall2.shapeColor="black";
  
}


function draw() {
  background(bgImage);
  
  if(keyDown("RIGHT_ARROW")){
      fairy.velocityX=4;
  }
  if(keyDown("LEFT_ARROW")){
    fairy.velocityX=-4;
  }
if(keyDown("DOWN_ARROW")){
  star.velocityY=star.velocityY+2;
}

if(fairy.isTouching(star)){
  fairy.changeImage();
  fairy.addImage(fairyImage);
  star.destroy();
  
}

  star.collide(fairy)
  fairy.collide(wall1);
  fairy.collide(wall2);
  drawSprites();
}
