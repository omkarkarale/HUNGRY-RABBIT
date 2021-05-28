var garden,rabbit,apple, leaf, redleaf;
var gardenImg,rabbitImg,appleImg,leafImg, redleafImg;
var score = 0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
  redleafImg = loadImage("redImage.png")
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


function draw() {
  background(0);
  drawSprites();
  fill("black")
  textSize(25);
  textStyle(BOLD);
  text("Score:" + score,280,380)
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x = mouseX
  
  spawnApples()
  spawnLeaf()
  spawnredLeaf()

}
//function to spawn the clouds
function spawnApples(){
 // write your code here 
  if (frameCount % 55 == 0) {
    apple = createSprite(random(50, 350), 40, 10, 10);
    apple.addImage(appleImg);
    apple.scale = 0.07;
    apple.velocityY = 3;
    apple.lifetime = -1;
    if(apple.isTouching(rabbit))
    {
      console.log("apple");
      score+=1;
    }
  }
}
function spawnLeaf(){
  if (frameCount %80 == 0) {
    leaf = createSprite(random(50, 350), 40, 10, 10);
    leaf.addImage(leafImg);
    leaf.scale = 0.07;
    leaf.velocityY = 5;
  }
  
}
function spawnredLeaf(){
  if (frameCount %95 == 0) {
    redleaf = createSprite(random(50, 350), 40, 10, 10);
    redleaf.addImage(redleafImg);
    redleaf.scale = 0.05;
    redleaf.velocityY = 5;
  }
}