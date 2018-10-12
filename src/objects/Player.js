import ControlHandler from "../utils/ControlHandler.js"


//let cursors;
export default class extends Phaser.Sprite {


  constructor({game, x, y, asset}) {
    super(game, x, y, asset);
    this.create();
  }

  create() {

    //this.animations.add('right', [5,6,7,8],10, false);
    //this.animations.add('left', [0,1,2,3], 10, false);
    this.enableBody = true;
    // this.physicsBodyType = Phaser.Physics.ARCADE;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;

  }

  update() {
    if(this.game.isRunning)
     this.movementHandler();

  }

  movementHandler() {
    //this.angle -= 5;
    //let cursors = this.game.input.keyboard.createCursorKeys();
    let moveLeft = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    let moveRight = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    let moveUp = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    let moveDown = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

    this.body.velocity.x = 0;
    this.body.gravity.y = 100 + Math.random() * 100;

  	if (moveLeft.isDown){
  		this.body.velocity.x = -550;
  		this.animations.play("left");
  	}
  	else if (moveRight.isDown){
  		this.body.velocity.x = 550;
  		this.animations.play("right");
  	}
  	else {

  		this.animations.stop();
  	  //this.frame = 4;
  	}

    if (moveUp.isDown && this.body.onFloor()) {
      this.body.velocity.y = -150;

    } else if(moveDown.isDown) {
      this.body.velocity.y = 150;
    }

  }



}
