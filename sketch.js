const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;
var paper;
var ground;
var count = 0;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,660,width,20);
	paper = new Paper(100,600,50);
	bin1 = new Bin(600,658,140,20);
	bin2 = new Bin(523,615,20,80);
	bin3 = new Bin(673,615,20,80);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
 
paper.display();
ground.display();
bin1.display();
bin2.display();
bin3.display();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW && count == 0) {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
        count++;
	}
  }



