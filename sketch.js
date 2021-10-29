var bg,bgImg;
var spacex,spacexImg;
var enemy,enemyImg;
var ammo,ammoImg;
var bullet,bulletImg;

function preload(){
  
spacexImg = loadImage("spacex.png");
enemyImg = loadImage("enemy.png");
bulletImg = loadImage("bullet.png");
  bgImg = loadImage("bg.png");
  ammoImg = loadImage("ammo.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  background = createSprite(width,height,600,600);
  background.addImage(bgImg);
  background.scale = 3.5;

  spacex = createSprite(width/2,height/2+200,50,50);
  spacex.addImage(spacexImg);
  spacex.scale = 0.2;

}

function draw() {
  //background(0); 

  background.velocityY = 3 

  if (background.x < 0){
    background.x = background.width/2;
  }
enemySprite();
drawSprites();
}

function enemySprite(){
  enemy = createSprite(width/2,height/2-100,50,50);
  enemy.addImage(enemyImg);
  enemy.scale = 0.2;
}