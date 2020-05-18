const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var boxClass
var boxClass2
var groundClass
var pigClass
var logClass
var  boxClass3
var boxClass4
var boxClass5
var logClass1
var logClass2
var logClass3
var pigClass1
var birdClass
var dayBackground
var platform
function preload(){
dayBackground=loadImage("angrybirdimages/bg1.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
boxClass=new Box(700,320,70,70)
   

boxClass2=new Box(920,320,70,70)
groundClass=new ground(600,390,1200,20)
logClass=new Log(810,260,300,PI/2)
  
pigClass=new Pig(810,350)
boxClass3=new Box(700,240,70,70)
   
platform=new ground(150,305,300,170)
boxClass4=new Box(920,240,70,70)

logClass1=new Log(810,180,300,PI/2)
  
pigClass1=new Pig(810,220)
boxClass5=new Box(810,160,70,70)

logClass2=new Log(760,120,150,PI/7)
logClass3=new Log(870,120,150,-PI/7)
birdClass=new Bird(200,287)
}
function draw(){
    background(dayBackground);
    Engine.update(engine);
  boxClass.display();
  boxClass2.display(); 
  groundClass.display();
  pigClass.display();
  logClass.display();
  boxClass3.display();
  boxClass4.display();
  boxClass5.display();
  logClass1.display();
  logClass2.display();
  logClass3.display();
  pigClass1.display();
 birdClass.display(); 
 platform.display();
}