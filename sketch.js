const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paper,dustbin,walls;


function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	 
	ground = new Ground(400,680,800,20);
	paper = new Paper(100,600);
	
	
	basewall = new Walls(600, 670, 200, 20);

	leftwall = new Walls(700, 550, 20, 250);

	rightwall = new Walls(500, 550, 20, 250);
		
	dustbin = new Dustbin(600,550,220,250);

	
	
	
}
function draw() {
	background("red");
	Engine.update(engine);
	ground.display();
	dustbin.display();
	/* basewall.display();
	leftwall.display();
	rightwall.display(); */
	
	paper.display();
	
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80 ,y:-140});
	}
}



