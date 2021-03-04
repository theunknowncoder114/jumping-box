var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 5 different surfaces
    r1 = createSprite(0,580,360,30);
    r1.shapeColor = 'green';

    r2= createSprite(295,580,200,30);
    r2.shapeColor = 'red';

    r3 = createSprite(515,580,200,30);
    r3.shapeColor = 'blue';

    r4 = createSprite(740,580,220,30);
    r4.shapeColor = 'yellow';
    //create box sprite and give velocity
    r5 = createSprite(150,150,30,30);
    r5.shapeColor = 'white';
    r5.velocityX = 2;
    r5.velocityY = 3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
   edges=createEdgeSprites();
   r5.bounceOff(edges);
   if(r1.isTouching(r5) && r5.bounceOff(r1)){
r5.shapeColor = 'green';
}
if(r2.isTouching(r5)){
    r5.shapeColor = 'red';
    r5.velocityX = 0;

    r5.velocityY= 0;
}

if(r3.isTouching(r5) && r5.bounceOff(r3)){
    r5.shapeColor = 'blue';
    }

    if(r4.isTouching(r5) && r5.bounceOff(r4)){
        r5.shapeColor = 'yellow';
        }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
