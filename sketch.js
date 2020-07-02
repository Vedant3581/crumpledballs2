const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paper,dustbin1;
var ground;

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
	World.add(world, ground);	
	dustbin1 = new Dustbin(600, 500, 200, 20);
    ground = new Ground(400,700,1000,20);

	paper = new Paper(100,600,);

	 
	 	

	
}
function draw(){
	background("orange");
	Engine.update(engine);
    ground.display();
	dustbin1.display();
	paper.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x :50 ,y:-50});
	}
}



