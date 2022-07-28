var player;
var bg,bgImg;
var startScreen;
var leverTile_1;
var screen_hider;
var border,border_1,border_2,border_3,border_4,borderGroup;
var gameState = 0;
//var SERVE = 0
//var PLAY = 1;
//var END = 2;


function preload(){
  bgImg=loadImage("assets/sprite_0.png");
}

function setup(){
  createCanvas(1000,500);
  rectMode(CENTER);
  
  player=createSprite(200,200,50,50);
  player.scale=0.5;

  bg=createSprite(200,200,30,30);
  bg.addImage(bgImg);

  leverTile_1=createSprite(110,-300,150,150);
  leverTile_1.scale=1
  leverTile_1.visible = false
  
//  startScreen=createSprite 

  screen_hider=createSprite(300,200,10000,10000);
  screen_hider.visible = false
  
  border_1=createSprite(400,-400,1750,50)
  border_1.visible = false

  border_2=createSprite(-400,400,50,1750)
  border_2.visible = false

  border_3=createSprite(800,400,50,1750)
  border_3.visible = false

  border_4=createSprite(400,800,1750,50)
  border_4.visible = false

}

function draw() 
{

background(225);
camera.x=player.x;
camera.y=player.y;
player.depth=bg.depth+1;

//if(gameState === SERVE) {
//  if(keycode===32) {
//    gameState===PLAY
//  }


//if(gameState === PLAY) {

if(keyCode===39){
  player.x+=5;
} 
if(keyCode===38){
  player.y-=5;
}
if(keyCode===37){
  player.x-=5;
}
if(keyCode===40){
  player.y+=5;
}

if(player.isTouching(leverTile_1) && keyCode===32){
   screen_hider.visible = true
}

if(player.isTouching(border_1)) {
  player.bounceOff(border_1)
}

if(player.isTouching(border_2)) {
  player.bounceOff(border_2)
}

if(player.isTouching(border_3)) {
 player.bounceOff(border_3)
}

if(player.isTouching(border_4)) {
  player.bounceOff(border_4)
}

//}
drawSprites();  
}



