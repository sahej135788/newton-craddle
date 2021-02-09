
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof=new Roof(250,70,300,30)
 ball1=new Ball(150,300,40,40)
 ball2=new Ball(200,300,40,40)
 ball3=new Ball(250,300,40,40)
 ball4=new Ball(300,300,40,40)
 ball5=new Ball(350,300,40,40)
 rope1=new Rope(ball1.body,{x:150,y:70})
 rope2=new Rope(ball2.body,{x:200,y:70})
 rope3=new Rope(ball3.body,{x:250,y:70})
 rope4=new Rope(ball4.body,{x:300,y:70})
 rope5=new Rope(ball5.body,{x:350,y:70})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  roof.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}



