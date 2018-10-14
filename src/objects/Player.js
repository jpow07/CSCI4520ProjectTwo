import ControlHandler from "../utils/ControlHandler.js"


//let cursors;
let isRotating;
export default class Player extends Phaser.Sprite {


  constructor({game, x, y, asset}) {
    super(game, x, y, asset);
    this.create();
    this.anchor.setTo(.5, .5);
    this.weight = 0;
    this.inputEnabled = true;
    isRotating = false;

  }

  create() {

    //this.animations.add('right', [5,6,7,8],10, false);
    //this.animations.add('left', [0,1,2,3], 10, false);
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;

  }

  update() {
    this.weight += .5;
    if(this.game.isRunning)
     this.movementHandler();

     if(!this.alive){
       this.kill();
     }
    this.events.onInputDown.add(this.kill, this);
  }

  movementHandler() {
    let moveLeft = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    let moveRight = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    let moveUp = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    let moveDown = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.scale.x = -1;
    this.body.velocity.x = 500;

    //this.body.gravity.y = 1000;


  	if (moveLeft.isDown){
  		this.body.velocity.x = -1950;
      this.scale.x=1;
    }

  	else if (moveRight.isDown){
  		this.body.velocity.x = 1950;
      this.scale.x=-1;
  	}
  	else {

  		this.animations.stop();
  	}

    if (moveUp.isDown && this.body.onFloor()) {
      this.body.velocity.y = -850;

    } else if(moveDown.isDown) {
      this.body.velocity.y = 850;
    }

  }

  clickedSprite(){
    this.body.velocity.y = -150;

  }

  kill(){

    this.body.velocity.x = 0;
    this.game.isRunning = false;
    if(!(this.body.y > this.game.height -200)){
      isRotating = true;
    }
    this.body.gravity.y = 600;

    //this.body.collideWorldBounds = false;

  }

  rotateSprite(rotateDirection) {
    this.body.rotation = -Math.random() * 1;

  }
}
