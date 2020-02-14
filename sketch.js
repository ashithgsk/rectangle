var fixedrect,movingrect







function setup() {
  createCanvas(1200,800);
 movingrect= createSprite (400,400,80,30);
 fixedrect= createSprite(600,400,50,80);
 movingrect.shapeColor="green";
 fixedrect.shapeColor="blue";
 movingrect.velocityX=10
 fixedrect.velocityX=-10
}
function draw() {
  background(0,96,96);  

 
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
    movingrect.shapeColor="red"
    fixedrect.shapeColor="yellow"
    movingrect.velocityX=movingrect.velocityX*-1
    fixedrect.velocityX=fixedrect.velocityX*-1
    console.log(movingrect.width/2+fixedrect.width/2)
  }
  else{
    movingrect.shapeColor="green"
 fixedrect.shapeColor="blue"
 
  }

  
  drawSprites();
}