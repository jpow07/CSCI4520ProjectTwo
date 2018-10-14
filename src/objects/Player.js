import {GameStats} from "../Helper.js"

let explode;
let timecheck;
export default class Player extends Phaser.Sprite {


  constructor({game, x, y, asset}) {
    super(game, x, y, asset);
    this.create();
    this.anchor.setTo(.5, .5);
    this.weight = 0;
    this.inputEnabled = true;

  }

  create() {

    //this.animations.add('right', [5,6,7,8],10, false);
    //this.animations.add('left', [0,1,2,3], 10, false);
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    explode = this.game.add.audio("explosion", 1, false);

  }

  update() {
    if(this.game.isRunning)
     this.movementHandler();

     if(!this.alive && !this.body.onFloor()){
       this.body.rotation -= .3;
     }
  }


  movementHandler() {
    this.scale.x = -1;
    this.body.velocity.x = 400;

  }


  kill(){
    this.explosion();
    this.body.velocity.x = 0;
    this.game.isRunning = false;
    this.body.gravity.y = 600;

    // GameStats.running = false;

  }

  explosion(){
    explode.play();
  }
}
