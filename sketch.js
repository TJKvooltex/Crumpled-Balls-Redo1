
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,480,40);
	groundSprite=createSprite(width/2, height-35, width,10,);
	groundSprite.shapeColor=color(255)



     
     
     
	dustbin1 = new Dustbin (810,620,100, PI/2);
	dustbin2 = new Dustbin(950,620,100, PI/2);
	dustbin3 = new Dustbin(1010,360,100, PI/2);



	


	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//World.add(world,dustbin);

	


}


function draw() {
  rectMode(CENTER);
  background(0);
  


  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 // ground.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-505} )



}



}

