import {GameStats} from "../Helper.js"

let collect;
let talking;
export default class Fish extends Phaser.Sprite {


  constructor({game, x, y, asset, frame}) {
    super(game, x, y, asset, frame);
    this.create();
    this.inputEnabled = true;
    this.input.useHandCursor = true;
  }

  create() {

    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    collect = this.game.add.audio("collectFish", 1, false);

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
    // collect.play();
    GameStats.fishCollected++;
    GameStats.weight += GameStats.fishWeight;
    this.destroy();

  }

}
