class Player{
    constructor(x,y,width,height){

        this.player = createSprite(x,y,width,height)
        width = this.width
        height = this.height

        this.image = loadImage("playerIMG.png")

    }
    display(){

        this.player.addImage(this.image)
        this.player.scale = 1
    }
    movement(){


        
        if(this.player.isTouching(ground)){

            this.player.velocityY = 0
        }

        
        /*if(keyDown("W")||keyDown("w")){
            this.player.velocityY = -4
        }else
        if(keyDown("A")||keyDown("a")){
            this.player.velocityX = -4
        }else
        if(keyDown("D")||keyDown("d")){
            this.player.velocityX = 4
        }else
        if(keyDown("S")||keyDown("s")){
            this.player.velocityY = 8
        }else
        if(keyWentUp("W")||keyWentUp("w")||keyWentUp("S")||keyWentUp("s")||keyWentUp("A")||keyWentUp("a")||keyWentUp("D")||keyWentUp("d")){
            this.player.velocityY = 4
            this.player.velocityX = 0
        }*/

        if(keyWentDown("space")){

            this.player.velocityY = -10
        }

        this.player.velocityY += 0.8;

        //this.player.velocityY = 0.5
    }

}