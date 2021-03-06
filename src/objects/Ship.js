import {GameStats} from "../Helper.js"
import SplashState from "../states/SplashState.js"

let explode;
let timecheck;
let returnHome = false;
let timer;
let hud;
let holdDuration = 84;
let startTimer;
let endTimer;
let buttonPressed = false;
export default class Ship extends Phaser.Sprite {


  constructor({game, x, y, asset}) {
    super(game, x, y, asset);
    this.create();
    this.anchor.setTo(.5, .5);
    this.weight = 0;
    this.inputEnabled = true;
    this.input.useHandCursor = true;

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
     if(this.game.input.activePointer.isDown){
       this.isDown();
     }
     if(this.game.input.activePointer.isUp && buttonPressed){
       this.isUp();
     }


     if(GameStats.weight > 400){
       this.frame = 3;
     }else if(GameStats.weight > 300){
       this.frame = 2;
     }else if(GameStats.weight > 200){
       this.frame = 1;
     }else{
       this.frame = 0;
     }

 	this.events.onInputDown.add(this.startTimer, this);
 	this.events.onInputUp.add(this.endTimer, this);

  }

  isDown(){
    startTimer = this.game.time.now;
    buttonPressed = true;
  }

  isUp(){
    endTimer = this.game.time.now;
    console.log(endTimer - startTimer);
    if((endTimer - startTimer) > holdDuration){
      this.dropFish()
    }
    buttonPressed = false;
    endTimer = 0;
  }

  startTimer(){
    timer = this.game.time.create(false);
    timer.loop(2000, this.dropFish, this);
    timer.start();
  }

  endTimer(){
  	timer.stop();
  }

  dropFish(){
  	if(GameStats.fishCollected > 0){
  		GameStats.fishCollected--;
      GameStats.weight -= GameStats.fishWeight;
  	}
  	console.log("Fish: " + GameStats.fishCollected);
  }


  movementHandler() {
    this.scale.x = -1;
    this.body.velocity.x = 250;
  }


  kill(){
    explode.play();
    this.body.velocity.x = 0;
    this.game.isRunning = false;
    this.body.gravity.y = 600;
    this.game.state.start("Lose");
  }

  returnToPort() {
    this.body.collideWorldBounds = false;
    GameStats.isFinished = true;
    if(this.x > 4400){
      this.returnHome();
    }else if(!returnHome){
      this.continueToEnd();
    }else if(this.x < 500){
      this.game.state.start("Splash");
    }
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
