const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Event = Matter.Events;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionsheight = 200;
var score = 0;


function setup() {
  createCanvas(700,700);
  engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(width/2,height,width,20);

  for(var k = 0;k<=width;k=k,80) {
    divisions.push(new Devisions(k,height=divisionsheight/2,10,divisionsheight));
  }

  for (var j = 75; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,75));
  }
  for (var j = 50; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,175));
  }
  for (var j = 75; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,275));
  }
  for (var j = 50; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,375));
  }

  Engine.run(engine);
  

}

function draw() {
  background("black");  
  textSize(20);
  //text("score :"+score,20,30);
  Engine.update(engine);
  ground.display();

  for(var i = 0;i<plinkos.length;i++){

    plinkos[i].display();

  }
  if (frameCount+60===0)
  {
    particles.push(new Particles(random(100,100),10,10));
    score++;
  }
  for(var j = 0;j<plinkos.length;j++){

    plinkos[j].display();

  }for(var k = 0;k<plinkos.length;k++){

    plinkos[k].display();

  }
  drawSprites();
}