var dog,dogimg;
var doghappy;
var database;
var foodS;
 var foodStack;


function preload(){
dogimg=loadImage("images/dogImg.png")
doghappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,50,50)
  dog.addImage(dogimg,'dog')
 //doghappy.addImage(doghappy,"dog")
  dog.scale=0.3;

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,47)
  drawSprites();
 //dog.changeImage(dogimg)
  fill("white")
  textFont("Times New Roman")
  textSize(20)
  text("NOTE: Press UP ARROW key to feed the dog",10,450)
  fill("black")
  textFont("Times New Roman")
  textSize(35)
  text("VIRTUAL PET",130,50)
}

function keyPressed(){
  if(keyCode===38){
    writeStocks(foodS)
    dog.addImage(doghappy)
 // dog.changeImage(doghappy)
  }
  
}

function readStock(data){
 foodS=data.val();
}

function writeStocks(x){

  if(x<=0){
     x=0;
  }
  else{
    x=x-1
  }
database.ref('/').update({
  Food:x
})
}


