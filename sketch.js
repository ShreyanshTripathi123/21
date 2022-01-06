
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var radius = 40;
var groundObj,leftSide,rightSide;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  groundObj=new Ground(width/2,500,width,10);
  leftSide=new Ground(600,445,10,100);
  rightSide=new Ground(900,445,10,100);

var ball_options={
	isStatic : false,
    restitution : 0.3,
	friction: 0,
	density:1.2

}

	
	//Create the Bodies Here
    ball=Bodies.circle(100,200,15,ball_options);
    World.add(world,ball);

  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display();
  leftSide.display();
  rightSide.display();
 }

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  }
}

