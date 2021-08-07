function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(400,200,50,50)
  box1=createSprite(300,200,20,20)
  box2=createSprite(500,200,20,20)
  box3=createSprite(600,200,30,30)
  box4=createSprite(700,200,30,30)

  box3.velocityX=1
  box4.velocityX=-1

  box3.shapeColor="brown"
  box4.shapeColor="blue"
}

function draw() {
  background("pink");  
  movingrect.x=mouseX
  movingrect.y=mouseY
  bounce(box3,box4)
  if(isTouching(movingrect, box2)){
    movingrect.shapeColor="red"
    box2.shapeColor="red"
  }
  else if(isTouching(movingrect,box1)){
    movingrect.shapeColor="red"
    box1.shapeColor="red"   
  }
  else if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor="red"
    fixedrect.shapeColor="red"
  }
  else{
    movingrect.shapeColor="grey"
    box2.shapeColor="grey"
    box1.shapeColor="grey"
    fixedrect.shapeColor="grey"
  }
  drawSprites();
}
