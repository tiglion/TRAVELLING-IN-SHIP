var ship,sea;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png");
                          ("ship-2.png","ship-1.png"); 
}


function setup(){
  createCanvas(400,400);
  background("blue");

  // creating sea .  

  sea = createSprite(400,200);
  sea.addImage("sea",seaImg); 
  sea.velocityX =-5;
  sea.scale = 0.3;

  // creating ship.
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingship",shipImg1);
  ship.scale = 0.25;

}

function draw() {

  //set background. 

  background(0);
  sea.velocityX = -3;

  //code to reset the background.
  
  if(sea.x < 0){
     sea.x = sea.width /90;
  }

  drawSprites();
}