
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, dustbin

function preload(){

	

}
	


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	
	
	ball = new  Paper(120, 200, 10);
	ground = new Ground(600, );

	dustbin = new Dustbin(1000, 500, 125, 125);


	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  
  ball.display();
 
  dustbin.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:20,y:-20})
	}
}



