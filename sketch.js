
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

class paper 

	{
		constructor(x,y,r)
	{

var opitons={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body);
}
display()
	}
var paperpos = this.body.position; 
push()
transalate(paperpos.x,paperpos.y);
rectMode(CENTER)
strokeWeight(3);
fill(255,0,255)
ellipse(0,0,this.r,this.r);
pop()

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
}
function keyPressed(){

if (keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

}
}



