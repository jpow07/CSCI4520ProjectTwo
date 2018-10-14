import {GameStats} from "../Helper.js"

export default class Fish extends Phaser.Sprite {


  constructor({game, x, y, asset, frame}) {
    super(game, x, y, asset, frame);
    this.create();
    //this.anchor.setTo(.5, .5);
    this.inputEnabled = true;
    this.input.useHandCursor = true;
  }

  create() {

    //this.animations.add('right', [5,6,7,8],10, false);
    //this.animations.add('left', [0,1,2,3], 10, false);
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    // this.body.collideWorldBounds = true;

  }

  update() {

    if(this.game.isRunning) {
      this.movementHandler();

      if(!this.body.onFloor()){
        this.events.onInputDown.add(this.kill, this);
      }
    }
  }

  movementHandler() {

    this.body.velocity.x = -Math.random() * 250;
    this.body.rotation = Math.random() * 100 % 2;
  }

  kill() {
    GameStats.weight += 100;
    this.destroy();
  }

}
