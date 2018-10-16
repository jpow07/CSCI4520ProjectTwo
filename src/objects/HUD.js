import {GameStats} from "../Helper.js"

let score;
let weight;
let gradient;
let gameOver;
let message;
export default class HUD extends Phaser.Sprite {


  constructor(game) {
    super(game);
    this.create();

  }

  create() {
    this.fixedToCamera = true;

    score = this.createText("black", "Orbitron", 60, this.game.camera.centerX - 800, 100);
    weight = this.createText("black", "Orbitron", 60, this.game.camera.centerX + 800, 100);
    gameOver = this.createText("black", "Orbitron", 190, this.game.world.centerX, this.game.world.centerY);

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
      gameOver.setText("Game Over");
    }
  }

  createText(color, font, size, xPos, yPos){

      message = this.game.add.text(xPos, yPos);
      message.anchor.setTo(0.5);
      message.font = font;
      message.fontSize = size;
      message.fill = color;
      message.setShadow(10, 10, '#8ED6FF', 5);
      return message;
  }



}
