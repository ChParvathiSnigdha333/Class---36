var database;
var playerCount;
var game, form, player;
var gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();
  game.update(gameState);
 
}

function draw(){
  background("white");
  
}
