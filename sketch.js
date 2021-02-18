var garden,bird;
var rabit1, bird1;

function preload(){
  gardenImg = loadImage("garden.png");
  bird1Img = loadImage("bird1.PNG");
  rabit1Img = loadImage("rabit1.PNG");
  bird2Img = loadImage("bird2.PNG");
  bird5Img = loadImage("bird5.PNG");
  bird9Img = loadImage("bird9.PNG");
  bird8Img = loadImage("bird8.PNG");
  bird6Img = loadImage("bird6.PNG");
  bird7Img = loadImage("bird7.PNG");
  bird3Img = loadImage("bird3.PNG");
  bird4Img = loadImage("bird4.PNG");
  bird10Img = loadImage("bird10.PNG");
  rabbit2Img = loadImage("rabbit2.png")
  
  
  
  
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabit1 = createSprite(210,320,30,30);
rabit1.scale =0.4;
rabit1.addImage(rabit1Img);
  
  rabbit2 = createSprite(213,309,30,30);
rabbit2.scale =0.4;
rabbit2.addImage(rabbit2Img);
  
  
  
  
bird1 = createSprite(10,150,30,30);
bird1.scale =0.25;
bird1.addImage(bird1Img);
  bird1.velocityX = 0.9;
   
bird2 = createSprite(-300,100,30,30);
bird2.scale =0.25;
bird2.addImage(bird2Img);
  bird2.velocityX = 0.9;
  
  bird5 = createSprite(-600,150,50,50);
bird5.scale =0.25;
bird5.addImage(bird5Img);
  bird5.velocityX = 0.9;
  
  bird9 = createSprite(-900,100,50,50);
bird9.scale =0.25;
bird9.addImage(bird9Img);
  bird9.velocityX = 0.9;
  
  bird8 = createSprite(-1200,150,50,50);
bird8.scale =0.25;
bird8.addImage(bird8Img);
  bird8.velocityX = 0.9;
  
  bird6 = createSprite(-1500,100,50,50);
bird6.scale =0.25;
bird6.addImage(bird6Img);
  bird6.velocityX = 0.9;
  
  bird7 = createSprite(-1800,150,50,50);
bird7.scale =0.25;
bird7.addImage(bird7Img);
  bird7.velocityX = 0.9;
  
 bird3 = createSprite(-2100,100,50,50);
bird3.scale =0.25;
bird3.addImage(bird3Img);
  bird3.velocityX = 0.9;
  
  bird4 = createSprite(-2400,150,50,50);
bird4.scale =0.25;
bird4.addImage(bird4Img);
  bird4.velocityX = 0.9;
  
  bird10 = createSprite(-2700,100,50,50);
bird10.scale =0.25;
bird10.addImage(bird10Img);
  bird10.velocityX = 0.9;
  
  
  
  
  
  
  
  
     
  
 
  
  
  
  
  
}







function draw() {
  background(0);
  
    
  
  

  drawSprites();
}