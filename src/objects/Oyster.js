import ControlHandler from "../utils/ControlHandler.js"


//let cursors;
export default class Oyster extends Phaser.Sprite {


  constructor({game, x, y, asset, frame}) {
    super(game, x, y, asset, frame);
    this.create();
    this.inputEnabled = true;
    //this.anchor.setTo(.5, .5);
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
    if(this.game.isRunning)
      this.movementHandler();
      if(this.input.pointerOver()){
        this.float();
      }
    this.events.onInputDown.add(this.kill, this);
  }

  movementHandler() {

    this.body.gravity.y = 1000 + Math.random() * 100;

  }

  float() {
    if(this.body.onFloor()){
      this.body.velocity.x = -150;
      this.body.rotation -= 5;
      this.body.velocity.y = -450;


    }

  }

  kill() {
    //Weight += 5;
    this.destroy();

  }

}
