const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function preload(){
  bg=loadImage('images/GamingBackground.png')
  monster=loadImage('images/Monster-01.png')
}
function setup() {
  createCanvas(800,500);
 engine=Engine.create()
 world=engine.world

ground=new Ground(width/2,height,width,20)
b2=new Block(350,350)
b3=new Block(350,300)
b4=new Block(350,250)
b5=new Block(350,200)
b6=new Block(350,100)
b7=new Block(350,50)
b8=new Block(350,0)
b9=new Block(400,350)
b10=new Block(400,300)
b11=new Block(400,250)
b12=new Block(400,200)
b13=new Block(400,100)
b14=new Block(400,50)
b15=new Block(400,0)

bob=new Bob(200,200,100)
sling=new Slingshot (bob.body,{x:200,y:50})


}

function draw() {
  
  background(bg); 
  imageMode(CENTER)
  image(monster,700,50,100,100) 
Engine.update(engine)
ground.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
   b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()
  b14.display()
  b15.display()
 
  bob.display()
  sling.display()
}
function mouseDragged(){
    Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});

}