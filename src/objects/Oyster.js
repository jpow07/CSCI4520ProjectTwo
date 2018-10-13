import ControlHandler from "../utils/ControlHandler.js"


//let cursors;
export default class Oyster extends Phaser.Sprite {


  constructor(game) {
    super(game, Math.random() * 1000, 1050, "oyster",0);

    this.create();
    this.anchor.setTo(.5, .5);
    this.body.velocity.x = 0;
    this.body.gravity.y = 1000 + Math.random() * 100;
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
  //  if(this.game.isRunning)
    // this.movementHandler();

  }

  movementHandler() {
    //this.angle -= 5;
    //let cursors = this.game.input.keyboard.createCursorKeys();
    let moveLeft = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    let moveRight = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    let moveUp = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    let moveDown = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

    this.body.velocity.x = 0;
    this.body.gravity.y = 1000 + Math.random() * 100;

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



}
