import {GameStats} from "../Helper.js"

let score;
let weight;
let gradient;
let time;
export default class HUD extends Phaser.Sprite {


  constructor(game) {
    super(game);
    this.create();
    // this.anchor.setTo(.5, .5);

  }

  create() {
    this.fixedToCamera = true;

    score = this.game.add.text(this.game.world.centerX - 800, 100);
    score.anchor.setTo(0.5);
    score.font = 'Orbitron';
    score.fontSize = 60;
    score.fill = "blue";
    score.setShadow(5, 5, '#8ED6FF', 5);

    weight = this.game.add.text(this.game.world.centerX + 800, 100);
    weight.anchor.setTo(0.5);
    weight.font = 'Orbitron';
    weight.fontSize = 60;
    weight.fill = "blue";
    weight.setShadow(5, 5, '#8ED6FF', 5);

    time = this.game.add.text(this.game.world.centerX, this.game.world.centerY);
    time.anchor.setTo(0.5);
    time.font = 'Orbitron';
    time.fontSize = 60;
    time.fill = "red";
    time.setShadow(5, 5, '#8ED6FF', 5);
  }

  update() {
    if(this.game.isRunning) {
      score.setText("Score: " + GameStats.score);
      if(GameStats.weight > (GameStats.allowedWeight - 150)){
        console.log("red");
        weight.fill = "red";
      }
      weight.setText("Weight: " + GameStats.weight);
    } else {
      time.setText("Game Over, Your ship sunk!");
    }

    // time.setText("Time: " + GameStats.time);
    // GameStats.time++;


  }

}
