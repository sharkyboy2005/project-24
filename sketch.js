
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, dropZone, lefty, righty, dropZoneBody, leftyBody, rightyBody, ballBody;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	createCanvas(800, 700);
	

	ball=new paper(50, 650, 10, 10, PI/7)
	ballBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	dropZone=createSprite(width/2, 650, 200, 20)
	dropZoneBody = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
	dropZone.shapeColor = 'red'
	World.add(world, dropZone);

	lefty=createSprite(width/2-100, 600, 20, 100)
	leftyBody = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
	lefty.shapeColor = 'red'
	World.add(world, lefty);

	righty=createSprite(width/2 + 100, 600, 20, 100)
	rightyBody = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
	righty.shapeColor = 'red'
	World.add(world, righty);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
}



