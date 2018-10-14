import {GameStats} from "../Helper.js"

let isAllowed = true;
export default class Oyster extends Phaser.Sprite {


  constructor({game, x, y, asset, frame}) {
    super(game, x, y, asset, frame);
    this.create();
    this.inputEnabled = true;
    this.input.useHandCursor = true;

    //this.anchor.setTo(.5, .5);
  }

  create() {

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.enableBody = true;
    this.body.collideWorldBounds = true;
    if(this.body.embedded){
      this.x += 100;
    }
  }

  update() {

    if(this.game.isRunning) {
      this.movementHandler();

      if(this.input.pointerOver() && isAllowed) {
        this.float();
      }
      if(!this.body.onFloor()){
        this.events.onInputDown.add(this.kill, this);
      }
    }
  }

  movementHandler() {
    this.body.velocity.x = 0;
    this.body.gravity.y = 1000;
    if(this.body.y < (this.game.height - 100)){
      this.rotate();
    }

  }

  rotate() {
    this.body.rotation -= 7;
  }

  float() {
    if(this.body.onFloor()){
      this.body.velocity.x -= 50;
      this.body.velocity.y -= 500;
    }

  }

  kill() {
      this.destroy(this);
      GameStats.weight += 100;
      GameStats.score += 50;
      console.log(GameStats.score);
      console.log(GameStats.weight);
  }// End of kill()

}
