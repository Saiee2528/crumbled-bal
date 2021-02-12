
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20)
	paperClass = new paperClass(70,100);
	dustbin = new dustbinClass(980,320,70,70);
	//Create the Bodies Here.
	Engine.run(engine);
}
function draw() {
	background("pink");
    Engine.update(engine);
	ground.display();
	paperClass.display();
	dustbin.display();
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paperClass.body,paperClass.body.position,{x:85,y:-85});
	}
}

