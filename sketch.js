var fixedrect,movingrect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 80);
 movingrect= createSprite(300,300,80,50);
 fixedrect.shapeColor="green";
 movingrect.shapeColor="green";

 gameObject1=createSprite(100,100,50,80);
 gameObject1.shapeColor="blue";
 gameObject2=createSprite(200,200,50,50);
 gameObject2.shapeColor="yellow";
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if (isTouching(movingrect,gameObject1)){
    gameObject1.shapeColor="red";
   movingrect.shapeColor="red";
  }
  else{
    gameObject1.shapeColor="blue";
    movingrect.shapeColor="green"; 
  }
  drawSprites();
}

