
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

roof = new Roof(340,200,550,20)
ball1 = new Ball(150,400,20,20);
ball2 = new Ball(240,400,20,20);
ball3 = new Ball(330,400,20,20);
ball4 = new Ball(420,400,20,20);
ball5 = new Ball(510,400,20,20);
rope1 = new Rope(ball1.body, {x:150 , y:200});
rope2 = new Rope(ball2.body, {x:240 , y:200});
rope3 = new Rope(ball3.body, {x:330 , y:200});
rope4 = new Rope(ball4.body, {x:420 , y:200});
rope5 = new Rope(ball5.body, {x:510 , y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body , ball1.body.position,{x:-10 , y:-10});

		
	}
}



