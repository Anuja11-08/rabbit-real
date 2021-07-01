var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleGroup;
var leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);



//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

/*function createApples(){
  var apple = createSprite(random(50,350),40,10,10);
  apple.radius= 5;
  apple.setColor("red");
  apple.velocityY=3;
  apple.velocityX = 0;
  apple.lifetime=400;
}*/

function createLeaves(){
 
  var leaf=createSprite(random(0,350),40,10,10);
  leaf.setColor("green");
  leaf.velocityY=3;
  leaf.lifetime=400;
}


function draw() {
  background(0);
rabbit.x= World.mouseX;
var select_sprites = Math.round(random(1,2));

if (frameCount % 80 === 0){
  if (select_sprites = 1){
   apple = createSprite(random(50,350),40,10,10);
   apple.x = Math.round(random(50,350));
   apple.velocityY= 3;
   apple.radius=5;
   apple.setColor= "red";
  }
  else {
    createLeaves();
  }
}
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (garden.x < 0){
    garden.x = garden.width/2;
  }
  drawSprites();
}