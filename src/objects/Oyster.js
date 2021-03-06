import {GameStats} from "../Helper.js"

let collect;
let swipe;

export default class Oyster extends Phaser.Sprite {


  constructor({game, x, y, asset, frame}) {
    super(game, x, y, asset, frame);
    super.y = this.game.world.height - 100;
    this.create();
    this.inputEnabled = true;
    this.input.useHandCursor = true;
    //this.anchor.setTo(.5, .5);
  }// End of Consturctor

  create() {
    this.scale.setTo(1.5, 1.5);

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.enableBody = true;
    this.body.collideWorldBounds = true;
    if(this.body.embedded){
      this.x += 100;
    }
    swipe = this.game.add.audio("swipeOyster", 1, false);
    collect = this.game.add.audio("collectOyster", 1, false);

  }// End of create()


  update() {

    if(this.game.isRunning) {
      this.movementHandler();

      if(this.input.pointerOver()) {
        this.float();
        swipe.play();
      }
      if(!this.body.onFloor()){
        this.events.onInputDown.add(this.kill, this);
      }
    }
  }// End of update()

  movementHandler() {
    this.body.velocity.x = 0;
    this.body.gravity.y = 1000;
    if(this.body.y < (this.game.height - 100)){
      this.rotate();
    }

  }// End of movementHandler()

  rotate() {
    this.body.rotation -= 7;
  }// End of Rotate()

  float() {
    if(this.body.onFloor()){
      this.body.velocity.x -= 50;
      this.body.velocity.y -= 1000;
    }

  }// End of float()


  kill() {
    collect.play();
    this.destroy();
    GameStats.weight += 25;
    GameStats.score += 50;
    GameStats.oystersCollected++;
      // console.log("Oyster Count: " + GameStats.oystersCollected);
  }// End of kill()

}
