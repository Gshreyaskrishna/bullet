var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(800,400);

  speed = random(223,321)
  weight = random(30 , 52)

  thickness = random(22,83)

  bullet = createSprite(30, 200, 20, 10);
  bullet.velocityX = speed;

  wall= createSprite(800, 200, thickness, width/2);
  wall.shapeColor = (80,80,80)

  damage = 0.5*weight*speed*speed/22500;

  d = damage 
}

function draw() {
  background(0); 

  if(bullet.collide(wall)){

    bullet.velocityX = 0;

  if(d = 3.68){
    bullet.shapeColor = "green"
  }

/*if(d < 180 && d > 100){
    bullet.shapeColor = "yellow"
  }*/

  if(d = 12.43){
    bullet.shapeColor = "red"
  }

}
  drawSprites();
 
}
 