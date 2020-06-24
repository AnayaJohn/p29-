const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);

  base= new Ground(400,380,800,40);
  
  
  
  block1= new Box(330,235,30,40);
  block2= new Box(360,235,30,40);
  block3= new Box(390,235,30,40);
  block4= new Box(420,235,30,40);
  block5= new Box(450,235,30,40);

  polygon= Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot=new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  Engine.update(engine);
  background(0); 

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

 // polygon.display();
 imageMode(CENTER);
 image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}