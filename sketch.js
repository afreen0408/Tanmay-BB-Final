const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;







var canvas;
var maxDrops = 100;
var drops=[];
var umbrella;
var rand;
var thunder;

var thunderCreatedFrame=0;

var thunder1; 
var thunder2;
var thunder3;
var thunder4;
var walkingman1;
var walkingman2;
var walkingman3;
var walkingman4;
var walkingman5;
var walkingman6;
var walkingman7;
var walkingman8;

function preload(){
 walkingman1=loadImage("walking_1.png");
  walkingman2=loadImage("walking_2.png"); 
  walkingman3=loadImage("walking_3.png");
  walkingman4=loadImage("walking_4.png");
  walkingman5=loadImage("walking_5.png");
  walkingman6=loadImage("walking_6.png");
  walkingman7=loadImage("walking_7.png");
  walkingman8=loadImage("walking_8.png");

thunder1=loadImage("1.png");
thunder2=loadImage("2.png");
thunder3=loadImage("3.png");
thunder4=loadImage("4.png");
}

function setup(){
 canvas=createCanvas(400,700);
 engine = Engine.create();
    world = engine.world;
//drops = new Drop(5,5);
umbrella = new Umbrella(200,500);

if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }

}

    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

drawSprites();



}




