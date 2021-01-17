const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





function preload()
{
	
}

function setup() {
    createCanvas(750, 650);
    var Engine, world;
    
    engine = Engine.create();
	world = Engine.world;

	Engine.run(engine);

    bob = new Bob ( 150,150,50,50);

}

function draw() {
    rectMode(CENTER);
    background(10,10);
   
    bob.display();

  }
  