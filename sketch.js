const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var Ground ;
var stand1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    Ground = newGround();
    stand1 = newStand(380,300,270,10);

	engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);
}
function draw() {
    rectMode(CENTER);
    background(0);
    Ground.display();
    stand1.display();
    drawSprites();
}