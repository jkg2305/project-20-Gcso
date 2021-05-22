var car;
var wall;

var speed;
var weight;

var ground1,ground2;
var ground3,ground4;



function setup() {
  createCanvas(500,800);

  var car= createSprite(27, 74,20, 20);
  car.shapeColor="white"

  var car= createSprite(27, 180,20, 20);
  car.shapeColor="yellow"

  var car= createSprite(27, 296,20, 20);
  car.shapeColor="red"

  var car= createSprite(27, 411,20, 20);
  car.shapeColor=" green" 

var wall=createSprite(466,70,20,60);
wall.shapeColor ="grey"

speed=random(50,99);
weight=random(400,1500);

 var ground1=createSprite(5,123,1000,10)
ground1=shapeColor ="white"

var ground2=createSprite(1,240,1000,10)
ground2=shapeColor ="white"

var ground3=createSprite(27,357,1000,10)
ground3=shapeColor ="white"

var ground4=createSprite(27,472,1000,10)
ground4=shapeColor ="white"



}





function draw() {
  background(0);  

//car.velocityX=speed;

text(mouseX+","+mouseY,35,30);



//if(wall.x-car.x<(car.width+wall.width)/2)
//{
//car.velocityX=0;
//var deformation=0.5*weight*speed*speed/22500
//if(deformation>180)
//{
// car.shapeColor=color(255,0,0);
//}
//if(deformation<180 && deformation>100)
//{
//car.shapeColor=color(230,230,0);
//}
//if(deformation<100)
//{
 //car.shapeColor=color(0,255,0);
//}

//}
  drawSprites();
}