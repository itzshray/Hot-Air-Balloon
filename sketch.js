var balloon;
var database
var position
var bg, balloonImage

function setup(){
    createCanvas(800,400);
    balloon = createSprite(250,250,10,10);
    balloon.addImage(balloonImage)
    balloon.scale=0.4
    database = firebase.database();
    var dataref = database.ref('Position')
    dataref.on("value", read);
}
function preload(){
bg=loadImage("cloudanime.jpg")
balloonImage=loadImage("Hot Air Ballon-04.png")



}

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        changePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+3);
    }
    drawSprites(); 
}

function changePosition(x,y){
    database.ref('Position').set({
        x:balloon.x+x,
        y:balloon.y+y
    })
}

function read(data){
position = data.val();
balloon.x=position.x
balloon.y=position.y
}
