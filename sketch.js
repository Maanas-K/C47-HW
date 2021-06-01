var player, ground;
var wall1,wall2;
var score = 0;
var aliens, alienIMG;
var gameState = 0;
var gameOver,gameOverIMG;


function preload(){

  alienIMG = loadImage("alien.png")
  gameOverIMG = loadImage("gameOver.png")

}

function setup() {
  createCanvas(1000,600);
 //createSprite(400, 200, 50, 50);

 player = new Player(200,200,50,50)
 ground = createSprite(500,600,1000,20)

 gameOver = createSprite(500,300,40,40)
 gameOver.addImage(gameOverIMG)

 
 //score + Math.round(getFrameRate()/60);
  
 
}

function draw() {
  background("gray"); 

  fill ("red")
  textSize(20)
  stroke ("black")
  text ("Score : "+score,900,50)
  
    
  if(gameState === 0){
    text("Press space to jump and down arrow to attack",250,200)
    text("When close to aliens, press down arrow",250,250)
    text("Avoid the walls !!",320,300)
    text("Press S to start",320,350)

    gameOver.visible = false

    if(keyDown("s")&&gameState === 0){
      gameState = 1
    }
  }

  if(gameState === 1){
    player.display();
    player.movement();
    score = score + Math.round(getFrameRate()/60);

    gameOver.visible = false
  }

  if(gameState === 2){
    gameOver.visible = true
    text("Press r to restart", 320,200)

    if(keyDown("r")&& gameState === 2){
      restart();
    }
  }
  
 
  

  //ground.collide(player)

  spawnWalls()
  spawnAliens()

  drawSprites();
}

function spawnWalls(){

    if(frameCount %90 === 0 && gameState === 1){

      wall1 = createSprite(1009,20,20,random(20,500))
      wall2 = createSprite(1009,580,20,random(20,500))

      wall1.shapeColor = "red"
      wall2.shapeColor = "green"

      wall1.velocityX = -(4 + 3* score/100)
      wall2.velocityX = -(4 + 3* score/100)

      

      console.log(score)
      
    }

}

function spawnAliens(){

  if(frameCount % 150 === 0 && gameState === 1){

    aliens = createSprite(random(400,900),random(200,400),50,50)
    aliens.addImage(alienIMG)
    aliens.scale = 0.5
    aliens.velocityX = random(-5,-2)
  }

  if(player.isTouching(aliens)&& keyDown("DOWN_ARROW")){
    score += 50
    aliens.destroy();
  }else if(player.isTouching(aliens)){
    gameState = 2;
  }
}

function restart(){

  score = 0;
  player.positionY = 200


}