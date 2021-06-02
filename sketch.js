var garden,rabbit,apple, leaf, redleaf;
var gardenImg,rabbitImg,appleImg,leafImg, redleafImg;
var appleGP,leafGP,redleafGP;
var score = 0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
  redleafImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  
// Moving background
// garden=createSprite(200,200);
// garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(windowWidth-220,windowHeight-60,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
// rabbit.debug = true;/
rabbit.setCollider("rectangle",0,0,400,50);
  
appleGP = new Group();
leafGP = new Group();
redleafGP = new Group();  
}


function draw() {
  background(gardenImg);
  drawSprites();
  fill("black")
  textSize(25);
  textStyle(BOLD);
  text("Score:" + round(score/25),windowWidth-120,windowHeight-20)
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x = mouseX
  
  if(appleGP.isTouching(rabbit))
  {
    score+=5;
  }
  if(leafGP.isTouching(rabbit))
  {
    score-=5;
  }
  if(redleafGP.isTouching(rabbit))
  {
    score-=20;
  }
  if(score < 0)
  {
    score = 0;
  }
  spawnApples()
  spawnLeaf()
  spawnredLeaf()

}
//function to spawn the clouds
function spawnApples(){
 // write your code here 
  if (frameCount % 60 == 0) {
    apple = createSprite(random(50, windowWidth-50), windowHeight-960, 10, 10);
    apple.addImage(appleImg);
    apple.scale = 0.07;
    apple.velocityY = 6;
    apple.lifetime = -1;
    // apple.debug = true;
    appleGP.add(apple);
  }
}
function spawnLeaf(){
  if (frameCount % 40 == 0) {
    leaf = createSprite(random(50, windowWidth-50), windowHeight-960, 10, 10);
    leaf.addImage(leafImg);
    leaf.scale = 0.07;
    leaf.velocityY = 4;
    leaf.lifetime = -1;
    // leaf.debug = true;
    leafGP.add(leaf);
  }
  
}
function spawnredLeaf(){
  if (frameCount % 20 == 0) {
    redleaf = createSprite(random(50, windowWidth-50), windowHeight-960, 10, 10);
    redleaf.addImage(redleafImg);
    redleaf.scale = 0.05;
    redleaf.velocityY = 4;
    redleaf.lifetime = -1;
    // redleaf.debug = true;
    redleafGP.add(redleaf);
  }
}
