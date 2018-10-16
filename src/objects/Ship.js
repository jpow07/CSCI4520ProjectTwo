import {GameStats} from "../Helper.js"
import SplashState from "../states/SplashState.js"

let explode;
let timecheck;
let returnHome = false;
export default class Ship extends Phaser.Sprite {


  constructor({game, x, y, asset}) {
    super(game, x, y, asset);
    this.create();
    this.anchor.setTo(.5, .5);
    this.weight = 0;
    this.inputEnabled = true;

  }

  create() {

    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    explode = this.game.add.audio("explosion", 1, false);
  }

  update() {
    if(this.game.isRunning && !GameStats.isFinished)
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
  }

  returnToPort() {
    this.body.collideWorldBounds = false;
    GameStats.isFinished = true;
    if(this.x > 4000/*(this.game.world.centerX)*/){
      this.returnHome();
    }else if(!returnHome){
      this.continueToEnd();
    }else if(this.x < 500){
      this.game.state.start("Splash");
    }
  }

  explosion(){
    explode.play();
  }

  returnHome(){
    console.log("return home");
    this.scale.x = 1;
    this.body.velocity.x = -1500;
    returnHome = true;
  }

  continueToEnd(){
    console.log("Continue to end");
    this.body.velocity.x = 1500;
  }

}
